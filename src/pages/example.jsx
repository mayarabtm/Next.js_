import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Example(){
    return(
        <Layout title="Usando Componentes">
            <Header title="Next.js & React" />
            <Header title="Aprenda Next na Prática"/>
        </Layout>
    )
}