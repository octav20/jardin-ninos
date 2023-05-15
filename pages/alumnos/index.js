import AlumnosTable from '@/components/AlumnosTable';
import Layout from '@/components/Layout';
import axios from 'axios';
function index({ alumnos }) {

    return (
        <Layout>
            <AlumnosTable alumnos={alumnos}></AlumnosTable>
        </Layout>
    );
}

export default index;

export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"];
    console.log(reqUrl);
    const url = new URL(reqUrl);
    const { data: alumnos } = await axios.get(
        `${url.origin}/api/alumnos`
    );

    return {
        props: {
            alumnos,
        },
    };
};
