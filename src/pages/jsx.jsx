export default function Jsx() {

    const titulo = <h1>JSX é um conceito central</h1>

    const subtitle = () => {
        return <h2>{'testing'.toLocaleUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitle()}
            <p>
                {JSON.stringify({name: 'Fabiola', age: 30})}
            </p>
        </div>
    )
}