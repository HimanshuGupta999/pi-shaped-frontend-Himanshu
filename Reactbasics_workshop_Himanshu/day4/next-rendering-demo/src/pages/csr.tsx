import { useEffect, useState } from 'react';

const CSRPage = () => {
  const [fruits, setFruits] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/fruits')
      .then((res) => res.json())
      .then(setFruits);
  }, []);

  return (
    <div>
      <h1>Client-Side Rendered Fruits</h1>
      <ul>{fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
    </div>
  );
};

export default CSRPage;
