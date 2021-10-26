import Link from 'next/link'
import Navigator from '../components/Navigator'

export default function Home() {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text="Estiloso" destiny="/estiloso" color="#21cfa9"/>
            <Navigator text="Example" destiny="/example"/>
            <Navigator text="JSX" destiny="/jsx" color="#8121cf"/>
            <Navigator text="Navigation #01" destiny="/navigation" color="#812100"/>
            <Navigator text="Navigation #02" destiny="/client/sp-2/123" color="#e22b80"/>
            <Navigator text="Componente com Estado" destiny="/state" color="#E89A4A"/>
            <Navigator text="Integração com API #01" destiny="/integration_1" color="red"/>
        </div>
    )
}

