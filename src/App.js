import Header from './components/Header';
import Table from './components/Table';
import AnimalsProvider from './context/Animals';

const App =() => {

  return (
    <div className="container">
      <AnimalsProvider>
        <Header title='PET MANAGER' />
        <Table />
      </AnimalsProvider>
    </div>
  );
}

export default App;
