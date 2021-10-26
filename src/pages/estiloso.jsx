import styles from '../styles/Estiloso.module.css'
import Link from 'next/dist/client/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout title="Example of CSS module">
            <div className={styles.purple}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}