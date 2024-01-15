import {Paciente} from './Paciente'

export const ListadoPacientes = () =>{
  return(
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black 2xl:text-3xl lg:text-2xl text-center">Listado Pacientes</h2>
      <p className="mt-3 2xl:text-lg lg:text-1lg font-black text-center mb-5">
        Administra tus {""}
        <span className="text-indigo-600">Pacientes y Citas</span>
      </p>
     <Paciente/>
     <Paciente/>
     <Paciente/>
     <Paciente/>
     <Paciente/>
     <Paciente/>
     <Paciente/>

    </div>
  )
}