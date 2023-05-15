import axios from 'axios';
import Link from 'next/link';
import React from 'react';

function MaestrosTable({ maestros }) {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`/api/maestros/${id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-min relative overflow-x-auto shadow-md sm:rounded-lg mt-1 ml-60">
            <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Nacimiento
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Direccion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Salon
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                {maestros.map(maestro => (
                    <tbody key={maestro.id}>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {maestro.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {maestro.fechaNacimiento}
                            </td>
                            <td className="px-6 py-4">
                                {maestro.telefono}
                            </td>
                            <td className="px-6 py-4">
                                {maestro.direccion}
                            </td>
                            <td className="px-6 py-4">
                                {maestro.grado}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Link href={`/maestros/edit/${maestro.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={(e) => handleDelete(e, maestro.id)}>Remove</button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

    );
}

export default MaestrosTable;