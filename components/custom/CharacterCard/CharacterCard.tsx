import { CharacterLocation, CharacterStatus } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  status: CharacterStatus;
  species: string;
  origin: CharacterLocation;
  location: CharacterLocation;
}

const STATUS_COLOR: Record<CharacterStatus, string> = {
  Alive: 'bg-green-500',
  Dead: 'bg-red-500',
  unknown: 'bg-yellow-500',
};

export const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  image,
  name,
  status,
  species,
  origin,
  location,
}) => (
  <Link href={`/character/${id}`}>
    <article className='flex gap-3 bg-card rounded overflow-hidden hover:shadow-hover-card transition-shadow'>
      <section className='relative min-w-40 min-h-40'>
        <Image src={image} alt={name} width={160} height={160} />
      </section>
      <section className='text-[10px] p-3 overflow-hidden'>
        <div className='mb-4'>
          <p className='font-sigmar mb-0.5 text-sm truncate'>{name}</p>
          <p className='flex gap-1 items-center'>
            <span className={`${STATUS_COLOR[status]} size-1.5 rounded-full`} />
            <span>
              {status} - {species}
            </span>
          </p>
        </div>
        <div className='mb-2.5'>
          <p className='mb-1.5 font-medium text-grey truncate'>
            Last known location:
          </p>
          <p className='truncate'>{location?.name}</p>
        </div>
        <div>
          <p className='mb-1.5 font-medium text-grey truncate'>Origin:</p>
          <p className='truncate'>{origin?.name}</p>
        </div>
      </section>
    </article>
  </Link>
);
