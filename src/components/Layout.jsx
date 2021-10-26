import Link from "next/dist/client/link"
import styles from "../styles/Layout.module.css"
export default function Layout(props) {
    console.log(props);
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>{props.title ?? 'More one example'}</h1>
                <Link href="/">Voltar</Link>
            </div>

            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}