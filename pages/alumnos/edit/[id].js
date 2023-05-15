import AlumnoEditarForm from '@/components/AlumnoEditarForm';
import Layout from '@/components/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditarAlumno({ salones }) {

    // const [salones, setSalones] = useState();
    // useEffect(() => {
    //     const getSalones = async () => {
    //         const { data } = await axios.get('/api/salones');
    //         console.log(data);
    //         setSalones(data);
    //     };

    //     getSalones();
    // }, []);
    return (
        <Layout>
            <AlumnoEditarForm salones={salones}>
            </AlumnoEditarForm>
        </Layout>
    );
}

export default EditarAlumno;

export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"];
    const url = new URL(reqUrl);

    const { data: salones } = await axios.get(
        `${url.origin}/api/salones`
    );

    return {
        props: {
            salones,
        },
    };
};
