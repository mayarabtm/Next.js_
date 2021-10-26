import Link from "next/dist/client/link"
import styles from '../styles/Navigator.module.css'

export default function Navigator(props) {
    return (
        <Link href={props.destiny}>
            <div className={styles.navigator} style={{
                backgroundColor: props.color ?? '#296dd4'
            }}>
                {props.text}
            </div>
        </Link>
    )
}