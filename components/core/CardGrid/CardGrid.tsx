export const CardGrid: React.FC<React.PropsWithChildren> = ({ children }) => (
  <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
    {children}
  </section>
);
