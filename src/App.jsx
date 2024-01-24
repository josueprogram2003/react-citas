import {Header} from './components/Header'
import {Formulario} from './components/Formulario'
import{ListadoPacientes} from './components/ListadoPacientes'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  // Se carga una sola vez
  useEffect(()=>{
    const obtenerLC = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLC();
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes' , JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (paciente) =>{
    setPacientes(pacientes.filter(data => data.id !== paciente.id))
  }

  return (
    <div className='container mx-auto lg:pt-3 2xl:pt-5'>
      <Header></Header>
      <div className='2xl:mx-4 lg:mt-5 md:flex'>
        <Formulario  pacientes={pacientes} setPacientes={setPacientes} pacienteRaw={paciente} setPaciente={setPaciente} ></Formulario>
         <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></ListadoPacientes> 
      </div>
    </div>
  )
}

export default App
