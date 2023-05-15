import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

function menu() {
    return (
        <div className='h-screen bg-gray-300 p-10'>
            <div className="container mx-auto">
                <div className='flex justify-evenly flex-row border-4 rounded-md border-solid p-4 border-black m-4'>
                    <div className='bg-slate-200 border-2 border-solid border-black h-52 w-80 hover:bg-slate-400 text-center rounded-md'>
                        <Link className='flex flex-col' href={"/alumnos"}>
                            <img className='self-center mt-1' src="/student_icon.png" alt="" width={150} height={150} />
                            <span className='align-bottom pt-3 font-bold text-xl'>Alumnos</span></Link>
                    </div>
                    <div className='bg-slate-200 border-2 border-solid border-black h-52 h-52 w-80 hover:bg-slate-400 text-center rounded-md'>
                        <Link className='flex flex-col' href={"/maestros"}>
                            <img className='self-center mt-1' src="/teacher_icon.png" alt="" width={150} height={150} />
                            <span className='align-bottom pt-3 font-bold text-xl'>Maestros</span></Link>
                    </div>
                    <div className='bg-slate-200 border-2 border-solid border-black h-52 h-52 w-80 hover:bg-slate-400 text-center rounded-md'>
                        <Link className='flex flex-col' href={"/salones"}>
                            <img className='self-center mt-1' src="/classroom_icon.png" alt="" width={150} height={150} />
                            <span className='align-bottom pt-3 font-bold text-xl'>Salones</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default menu;