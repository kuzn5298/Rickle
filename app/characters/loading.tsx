import { CardGrid, CardSkeleton } from '@/components';

const CARDS_NUMBER = 20;
const CARDS = new Array(CARDS_NUMBER).fill(null).map((_, i) => i);

const Loading = () => (
  <div className='container'>
    <CardGrid>
      {CARDS.map((key) => (
        <CardSkeleton key={key} />
      ))}
    </CardGrid>
  </div>
);

export default Loading;
