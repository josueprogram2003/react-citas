/* eslint-disable react/prop-types */
export const  Paciente = ({paciente,setPaciente,eliminarPaciente}) =>{



  return(
    <div className="bg-white shadow-md rounded-lg py-5 px-5 m-3">
        <p className="block text-gray-700 uppercase font-bold lg:text-sm mb-2" >NOMBRE: {""}
          <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="block text-gray-700 uppercase font-bold lg:text-sm mb-2" >PROPIETARIO: {""}
          <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
         <p className="block text-gray-700 uppercase font-bold lg:text-sm mb-2" >EMAIL: {""}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>
         <p className="block text-gray-700 uppercase font-bold lg:text-sm mb-2" >FECHA ALTA: {""}
          <span className="font-normal normal-case">{paciente.alta}</span>
        </p>
         <p className="block text-gray-700 uppercase font-bold lg:text-sm mb-2" >SINTOMAS: {""}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between">
          <button type="button" className="py-2 px-10 me-3 bg-indigo-600 hover:bg-indigo-700  text-white font-bold uppercase rounded-lg" onClick={()=>setPaciente(paciente)}  >Editar</button>
          <button type="button"  className="py-2 px-10 bg-red-600 hover:bg-red-700  text-white font-bold uppercase rounded-lg" onClick={()=>eliminarPaciente(paciente)}>Eliminar</button>
        </div>
      </div>
  )
}