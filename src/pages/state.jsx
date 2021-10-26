import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {
    const [num, setNum] = useState(0)

    function inc() {
        setNum(num + 1)
    }

    return (
        <Layout title="Componente com Estado">
            <div>{num}</div>
            <button onClick={inc}>Incrementar</button>
        </Layout>
    )
}