import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
function MaestroEditarForm({ salones }) {
    const router = useRouter();
    const [maestro, setMaestro] = useState({
        nombre: "",
        fechaNacimiento: "",
        telefono: "",
        direccion: "",
        id_salon: "",
        grado: "",
    });
    useEffect(() => {

        const getMaestros = async (id) => {

            const { data } = await axios.get(`/api/maestros/${id}`);
            setMaestro(data);
            console.log(data);
        };

        getMaestros(router.query.id);
    }, [router.query.id]);

    const handleChange = ({ target: { name, value } }) => {
        setMaestro({
            ...maestro,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/maestros/${router.query.id}`, maestro);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex flex-col'>
            <h1 className='text-black font-bold text-2xl'>Maestros</h1>
            <form className='self-center border-solid rounded-md divide-solid border border-gray-700' action="" onSubmit={handleSubmit}>

                <div className='p-10 flex flex-col space-y-3 max-w-screen-s w-96'>
                    <label className='text-black font-semibold' htmlFor="nombre">Nombre:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='nombre' value={maestro.nombre} placeholder='Nombre' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                    <input className=' w-full p-2 rounded-sm' type="date" name='fechaNacimiento' value={maestro.fechaNacimiento} placeholder='Fecha de nacimiento' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="telefono">Telefono:</label>
                    <input className=' w-full p-2 rounded-sm' type="number" name='telefono' value={maestro.telefono} placeholder='Telefono' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="direccion">Direccion:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='direccion' value={maestro.direccion} placeholder='Direccion' required onChange={handleChange} />

                    <label className='text-black font-semibold' htmlFor="salon">Salon:</label>
                    <select className=' w-full p-2 rounded-sm' name="id_salon" onChange={handleChange} required>
                        <option value={maestro.id_salon}>{maestro.grado}</option>

                        {salones.map((salon) => (
                            <option key={salon.id} value={salon.id}>{salon.grado}</option>
                        ))}
                    </select>

                    <button className='bg-slate-400 text-black font-bold p-2 hover:bg-slate-500 rounded-md' type='submit'>Actualizar</button>
                </div>
            </form>
        </div>
    );
}

export default MaestroEditarForm;