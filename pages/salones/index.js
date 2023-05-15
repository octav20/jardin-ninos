import Layout from '@/components/Layout';
import SalonesTable from '@/components/SalonesTable';
import axios from 'axios';
function index({ salones }) {

    return (
        <Layout>
            <SalonesTable salones={salones}></SalonesTable>
        </Layout>
    );
}

export default index;

export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"];
    console.log(reqUrl);
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
