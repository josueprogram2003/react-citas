import { useState, useEffect } from "react"
import { Error } from './Error'; // Asegúrate de que la E en Error está en mayúscula

export function Formulario ({setPacientes,pacientes,pacienteRaw,setPaciente}){

  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [alta,setAlta] = useState('')
  const [sintomas,setSintomas] = useState('')
  const [error, setError] = useState(false)
  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36);
    return random +fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
       setError(true)
       return;
    }
    setError(false)

    // objeto de paciente
  const paciente = {
    nombre,
    propietario,
    email,
    alta,
    sintomas,
    id:generarId()
  };
  setNombre('');
  setPropietario('');
  setEmail('');
  setSintomas('');
  setAlta('');
  if (pacienteRaw.id && pacienteRaw != undefined) {
     paciente.id = pacienteRaw.id;
     const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === pacienteRaw.id ? paciente : pacienteState)
     setPacientes(pacienteActualizado)
     setPaciente({})
  }else{
    setPacientes([...pacientes, paciente]);
  }
  }

  useEffect(()=>{
    //Se va a ejecutar cada vez que se modifique el prop paciente
   if (Object.keys(pacienteRaw).length > 0 && pacienteRaw != undefined) {
    setNombre(pacienteRaw.nombre);
    setEmail(pacienteRaw.email);
    setSintomas(pacienteRaw.sintomas);
    setPropietario(pacienteRaw.propietario);
    setAlta(pacienteRaw.alta);
   }else{
    console.log("No hay nada")
   }
  },[pacienteRaw])

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black 2xl:text-3xl lg:text-2xl text-center">Seguimiento Pacientes</h2>      
      <p className="mt-3 2xl:text-lg lg:text-1lg font-black text-center mb-5">Añadre Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-5 px-5" onSubmit={handleSubmit}>
        {
          error && <Error mensaje={"Todos los campos son obligatorios"}/>
        }
        <div className="2xl:mb-4 lg:mb-2">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold lg:text-sm">Nombre Mascota </label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 placeholder-gray-400 rounded-md" name="mascota" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div className="2xl:mb-4 lg:mb-2">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold lg:text-sm">Nombre Propietario</label>
          <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 placeholder-gray-400 rounded-md" value={propietario} name="propietario" onChange={(e)=> setPropietario(e.target.value)}/>
        </div>
        <div className="2xl:mb-4 lg:mb-2">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold lg:text-sm">Email</label>
          <input type="email" id="email" placeholder="Email" className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 placeholder-gray-400 rounded-md" name="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        </div>
         <div className="2xl:mb-4 lg:mb-2">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold lg:text-sm">Alta</label>
          <input type="date" id="alta"  className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 placeholder-gray-400 rounded-md" name="alta" onChange={(e)=> setAlta(e.target.value)} value={alta}/>
        </div>
          <div className="2xl:mb-4 lg:mb-2">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold lg:text-sm">Sintomas</label>
          <textarea name="sintomas" id="sintomas" placeholder="Escribe los sintomas" className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 placeholder-gray-400 rounded-md"  onChange={(e)=> setSintomas(e.target.value)} value={sintomas}></textarea>
        </div>
         <div>
          <input type="submit" className="border-2 w-full 2xl:p-2 lg:p-1 mt-2 bg-indigo-600 text-white rounded-md font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value={pacienteRaw.id ? 'Editar Paciente': 'Agregar Paciente'} />
        </div>
      </form>
    </div>
  )
}




