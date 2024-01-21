import { useState } from 'react';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import DataProvider from './context/DataContext';
import Bar from './components/Bar/Bar';
import './App.scss';

function App() {
  const [contentIndex, setContentIndex] = useState<number>(0);

  return (
    <div className="app">
      <DataProvider>
        <Bar contentIndex={contentIndex} />
        <Title />
        <Form
          contentIndex={contentIndex}
          setContentIndex={(index) => setContentIndex(index)}
        />
      </DataProvider>
    </div>
  );
}

export default App;
