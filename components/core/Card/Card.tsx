import clsx from 'clsx';
import Image from 'next/image';

export interface CardProps {
  image?: string | React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
  altImage?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  body,
  altImage = 'Card image',
  className,
}) => (
  <article
    className={clsx(
      'flex gap-3 bg-card rounded overflow-hidden',
      image && 'min-h-40',
      className
    )}
  >
    {image && (
      <section className='relative min-w-40 '>
        {typeof image === 'string' ? (
          <Image
            src={image}
            alt={altImage}
            fill
            priority={false}
            sizes='192px'
            className='object-cover'
          />
        ) : (
          image
        )}
      </section>
    )}
    <section className='p-3 overflow-hidden flex flex-col gap-4 flex-1'>
      {title && <div>{title}</div>}
      {body && <div className='flex-1'>{body}</div>}
    </section>
  </article>
);
