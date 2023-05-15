import Layout from '@/components/Layout';
import MaestroForm from '@/components/MaestroForm';
import axios from 'axios';
import React from 'react';

function NuevoMaestro({ salones }) {
    return (
        <Layout>
            <MaestroForm salones={salones}></MaestroForm>
        </Layout>
    );
}

export default NuevoMaestro;

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
