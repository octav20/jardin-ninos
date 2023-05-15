import AlumnoEditarForm from '@/components/AlumnoEditarForm';
import Layout from '@/components/Layout';
import MaestroEditarForm from '@/components/MaestroEditarForm';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditarAlumno({ salones }) {
    return (
        <Layout>
            <MaestroEditarForm salones={salones}></MaestroEditarForm>
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
