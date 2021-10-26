import Layout from "../../../components/Layout";
import { useRouter } from "next/dist/client/router";

export default function ClientToCode(){
    const router = useRouter()

    return(
        <Layout title="Navigation Dynamic">
            <div>Código = {router.query.code}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}