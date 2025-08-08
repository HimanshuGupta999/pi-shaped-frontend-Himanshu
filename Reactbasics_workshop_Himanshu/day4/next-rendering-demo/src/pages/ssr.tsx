import { GetServerSideProps } from 'next';

type Props = {
  fruits: string[];
};

const SSRPage = ({ fruits }: Props) => (
  <div>
    <h1>Server-Side Rendered Fruits</h1>
    <ul>{fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/fruits');
  const fruits = await res.json();
  return { props: { fruits } };
};

export default SSRPage;
