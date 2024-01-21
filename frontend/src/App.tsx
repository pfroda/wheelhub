import { useState } from 'react';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import DataProvider from './context/DataContext';
import ErrorProvider from './context/ErrorContext';
import Bar from './components/Bar/Bar';
import './App.scss';

function App() {
  const [contentIndex, setContentIndex] = useState<number>(0);

  return (
    <div className="app">
      <DataProvider>
        <ErrorProvider>
          <Bar contentIndex={contentIndex} />
          <Title />
          <Form
            contentIndex={contentIndex}
            setContentIndex={(index) => setContentIndex(index)}
          />
        </ErrorProvider>
      </DataProvider>
    </div>
  );
}

export default App;
