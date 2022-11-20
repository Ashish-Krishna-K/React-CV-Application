import '../styles/General-Information.css'

const General = (props) => {

    return (
        <div id="general">
            <h2>{props.name}</h2>
            <div id="space-this">
                <span>{props.email}</span>
                <span>{props.phone}</span>
            </div>
        </div>
    )
}

export default General;