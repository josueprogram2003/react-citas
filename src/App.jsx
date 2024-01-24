import {Header} from './components/Header'
import {Formulario} from './components/Formulario'
import{ListadoPacientes} from './components/ListadoPacientes'
import { useState } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  return (
    <div className='container mx-auto lg:pt-5 2xl:pt-7'>
      <Header></Header>
      <div className='2xl:mt-10 lg:mt-5 md:flex'>
        <Formulario  pacientes={pacientes} setPacientes={setPacientes} pacienteRaw={paciente} setPaciente={setPaciente} ></Formulario>
         <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}></ListadoPacientes> 
      </div>
    </div>
  )
}

export default App
