import axios from 'axios';
import React, { useEffect, useState } from 'react';
function AlumnoForm({ salones }) {

    const [alumno, setAlumno] = useState({
        nombre: "",
        fechaNacimiento: "",
        contacto: "",
        direccion: "",
        salon: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setAlumno({
            ...alumno,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/alumnos/', alumno);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex flex-col'>
            <h1 className='text-black font-bold text-2xl'>Alumnos</h1>
            <form className='self-center border-solid rounded-md divide-solid border border-gray-700' action="" onSubmit={handleSubmit}>

                <div className='p-10 flex flex-col space-y-3 max-w-screen-s w-96'>
                    <label className='text-black font-semibold' htmlFor="nombre">Nombre:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='nombre' value={alumno.nombre} placeholder='Nombre' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                    <input className=' w-full p-2 rounded-sm' type="date" name='fechaNacimiento' value={alumno.fechaNacimiento} placeholder='Fecha de nacimiento' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="contacto">Contacto:</label>
                    <input className=' w-full p-2 rounded-sm' type="number" name='contacto' value={alumno.contacto} placeholder='Contacto' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="direccion">Direccion:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='direccion' value={alumno.direccion} placeholder='Direccion' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="salon">Salon:</label>
                    <select className=' w-full p-2 rounded-sm' name="salon" onChange={handleChange} required>
                        <option value="">Selecciona un salon</option>

                        {salones.map((salon) => (
                            <option key={salon.id} value={salon.id}>{salon.grado}</option>
                        ))}
                    </select>

                    <button className='bg-slate-400 text-black font-bold p-2 hover:bg-slate-500 rounded-md' type='submit'>Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default AlumnoForm;