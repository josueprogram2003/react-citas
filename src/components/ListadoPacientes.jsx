/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import {Paciente} from './Paciente'

// eslint-disable-next-line react/prop-types
export const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) =>{

  useEffect(()=>{
  },[pacientes])

  return(
    <div className="md:w-1/2 lg:w-3/5  overflow-y-auto">
      <h2 className="font-black 2xl:text-3xl lg:text-2xl text-center">Listado Pacientes</h2>
      {
        pacientes.length == 0 ? 
        (
          <h1 className='2xl:text-3xl lg:text-2xl text-center'>Comienza agregando pacientes</h1>
        )
        :
        (
         <>
           <p className="mt-3 2xl:text-lg lg:text-1lg font-black text-center mb-5">
          Administra tus {""}
          <span className="text-indigo-600">Pacientes y Citas</span>
        </p>
        {
          // eslint-disable-next-line react/prop-types
          pacientes.map((paciente)=>{
            return(
              // eslint-disable-next-line react/jsx-key
              <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} /> 
            )
          })
        }
         </>
        )
      }
    </div>
  )
}