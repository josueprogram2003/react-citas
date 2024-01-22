/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const  Paciente = ({paciente}) =>{
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
      </div>
  )
}