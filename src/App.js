import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
    },
    {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
    },
    {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
    },
    {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
    },
    {
    nome: 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
    },
    {
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
    },
    {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaborados] = useState([])

  const aoCadastrado = (colaborador) => {
    setColaborados([...colaboradores, colaborador]);
  }

  const aoExcluirTime = (time) => {
    //Excluindo os colaboradores faz com que a seção do time suma
    setColaborados(colaboradores.filter(c => c.time !== time.nome))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(t => t.nome)} 
      aoCadastrado={colaborador => aoCadastrado(colaborador)}/>

      {times.map(t => <Time 
      key={t.nome} 
      nome={t.nome} 
      corPrimaria={t.corPrimaria} 
      corSecundaria={t.corSecundaria}
      colaboradores={colaboradores.filter(c => c.time === t.nome)}
      aoExcluirTime={time => aoExcluirTime(time)}
      />)}

      <Rodape />
    
    </div>
  );
}

export default App;
