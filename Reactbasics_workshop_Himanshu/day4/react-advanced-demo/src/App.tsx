import React, { Suspense, useState } from 'react';
import Counter from './components/Counter';

const LazySettings = React.lazy(() => import('./components/LazySettings'));

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h1>React Advanced Demo</h1>
      <Counter />
      <button onClick={() => setShowSettings(true)}>Load Settings</button>
      {showSettings && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazySettings />
        </Suspense>
      )}
    </div>
  );
}

export default App;
