import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label='Nome' placeHolder='Digite seu nome'/>
      <CampoTexto label='Cargo' placeHolder='Digite seu cargo'/>
      <CampoTexto label='Imagem' placeHolder='Insira o url da sua imagem'/>
    </div>
  );
}

export default App;
