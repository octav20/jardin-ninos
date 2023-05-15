import Layout from '@/components/Layout';
import MaestrosTable from '@/components/MaestrosTable';
import axios from 'axios';
function index({ maestros }) {

    return (
        <Layout>
            <MaestrosTable maestros={maestros}></MaestrosTable>
        </Layout>
    );
}

export default index;

export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"];
    console.log(reqUrl);
    const url = new URL(reqUrl);
    const { data: maestros } = await axios.get(
        `${url.origin}/api/maestros`
    );

    return {
        props: {
            maestros,
        },
    };
};
