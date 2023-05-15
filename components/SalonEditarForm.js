import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
function SalonEditarForm() {

    const router = useRouter();

    const [salon, setSalon] = useState({
        nombre: "",
        grado: "",
    });


    useEffect(() => {

        const getSalon = async (id) => {

            const { data } = await axios.get(`/api/salones/${id}`);
            setSalon(data);
            console.log(data);
        };

        getSalon(router.query.id);
    }, [router.query.id]);
    const handleChange = ({ target: { name, value } }) => {
        setSalon({
            ...salon,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/salones/${router.query.id}`, salon);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex flex-col'>
            <h1 className='text-black font-bold text-2xl'>Salones</h1>
            <form className='self-center border-solid rounded-md divide-solid border border-gray-700' action="" onSubmit={handleSubmit}>

                <div className='p-10 flex flex-col space-y-3 max-w-screen-s w-96'>
                    <label className='text-black font-semibold' htmlFor="nombre">Nombre:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='nombre' value={salon.nombre} placeholder='Nombre' required onChange={handleChange} />
                    <label className='text-black font-semibold' htmlFor="grado">Grado:</label>
                    <input className=' w-full p-2 rounded-sm' type="text" name='grado' value={salon.grado} placeholder='Grado' required onChange={handleChange} />

                    <button className='bg-slate-400 text-black font-bold p-2 hover:bg-slate-500 rounded-md' type='submit'>Actualizar</button>
                </div>
            </form>
        </div>
    );
}

export default SalonEditarForm;