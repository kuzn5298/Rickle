import { Card } from './Card';

export const CardSkeleton = () => (
  <Card
    className='animate-pulse'
    image={<div className='bg-gray h-full' />}
    title={
      <div className='flex flex-col gap-2'>
        <div className='h-4 bg-gray rounded w-[60%]' />
        <div className='h-3 bg-gray rounded w-[45%]' />
      </div>
    }
    body={
      <div className='flex flex-col gap-2'>
        <div className='h-2.5 bg-gray rounded w-[40%]' />
        <div className='h-2.5 bg-gray rounded w-[70%]' />
        <div className='h-2.5 bg-gray rounded w-[50%]' />
        <div className='h-2.5 bg-gray rounded w-[30%]' />
        <div className='h-2.5 bg-gray rounded w-[60%]' />
      </div>
    }
  />
);
