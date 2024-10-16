interface CharacterPageProps {
  params: {
    id: string;
  };
}

const CharacterPage: React.FC<CharacterPageProps> = ({ params }) => {
  return <div className='container'>Character {params.id}</div>;
};

export default CharacterPage;
