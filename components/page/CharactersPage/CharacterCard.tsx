import { Card } from '@/components/core';
import { formatUnknown } from '@/libs/utils';
import { CharacterLocation, CharacterStatus } from '@/types';
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
  <Link href={`/characters/${id}`} prefetch={false}>
    <Card
      image={image}
      className='text-[10px] hover:shadow-hover-card transition-shadow'
      title={
        <div>
          <p className='font-sigmar mb-0.5 text-sm truncate'>{name}</p>
          <p className='flex gap-1 items-center'>
            <span className={`${STATUS_COLOR[status]} size-1.5 rounded-full`} />
            <span>
              {formatUnknown(status)} - {species}
            </span>
          </p>
        </div>
      }
      body={
        <div>
          <div className='mb-2.5'>
            <p className='mb-1.5 font-medium text-gray truncate'>
              Last known location:
            </p>
            <p className='truncate'>
              {formatUnknown(location?.name, 'No data')}
            </p>
          </div>
          <div>
            <p className='mb-1.5 font-medium text-gray truncate'>Origin:</p>
            <p className='truncate'>{formatUnknown(origin?.name, 'No data')}</p>
          </div>
        </div>
      }
    />
  </Link>
);
