import Form from './components/Form/Form';
import Title from './components/Title/Title';
import DataProvider from './context/DataContext';

import './App.scss';

function App() {
  return (
    <DataProvider>
      <Title />
      <Form />
    </DataProvider>
  );
}

export default App;
