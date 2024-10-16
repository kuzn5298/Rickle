'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Character } from '@/types';
import { characterService } from '@/services';
import { CharacterCard } from '../CharacterCard';

export interface CharacterListProps {
  initData: Character[];
  initPage: number;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  initData,
  initPage,
}) => {
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(initPage);
  const isNextPage = useRef(true);

  const loadMoreCharacters = useCallback(async () => {
    setLoading(true);
    pageRef.current++;
    const { data, status } = await characterService.getCharacters({
      page: pageRef.current,
    });
    if (status >= 200 && status < 300) {
      const { results, info } = data ?? {};
      setData((users) => [...users, ...(results ?? [])]);
      isNextPage.current = pageRef.current < (info?.pages ?? 0);
    } else {
      pageRef.current--;
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const innerHeight = target.offsetHeight + target.scrollTop;
      const offsetHeight = target.scrollHeight;

      if (!loading && innerHeight === offsetHeight && isNextPage.current) {
        loadMoreCharacters();
      }
    };

    handleScroll({ target: scrollContainer } as Event);
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, [loadMoreCharacters, loading]);

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
      {data.map((character) => (
        <CharacterCard
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          location={character.location}
          origin={character.origin}
          species={character.species}
          status={character.status}
        />
      ))}
    </section>
  );
};
