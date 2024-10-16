import { CharacterList } from '@/components';
import { characterService } from '@/services';

const FIRST_PAGE = 1;

const CharactersPage = async () => {
  const { data } = await characterService.getCharacters({
    page: FIRST_PAGE,
  });
  const { results = [] } = data ?? {};

  return (
    <div className='container'>
      <CharacterList initData={results} initPage={FIRST_PAGE} />
    </div>
  );
};

export default CharactersPage;
