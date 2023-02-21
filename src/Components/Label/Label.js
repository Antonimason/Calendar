import './Label.css'

function Label (props) {

    return (
        <div className="label--container">
            <div className={`circle ${props.color}`}>
                <i className="logo">{props.icon}</i>
            </div>
        </div>
    )
} 

export default Label