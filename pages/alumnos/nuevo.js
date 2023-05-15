import AlumnoForm from '@/components/AlumnoForm';
import Layout from '@/components/Layout';
import axios from 'axios';
import React from 'react';
function NuevoAlumno({ salones }) {
    return (
        <Layout>
            <AlumnoForm salones={salones}></AlumnoForm>
        </Layout>
    );
}

export default NuevoAlumno;

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
