import Form from './components/Form/Form';
import Title from './components/Title/Title';
import DataProvider from './context/DataContext';
import './App.scss';

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Title />
        <Form />
      </DataProvider>
    </div>
  );
}

export default App;
