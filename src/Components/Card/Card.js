import './Card.css'
import { MdDeleteOutline } from 'react-icons/md';
function Card (props) {
    return(
        <div className = "card--container">
            <div className="card-info">
                <h2 className="card-name">{props.name}</h2>
                <p className="card-task">{props.task}</p>
            </div>
            <div className="card-date">{props.date}</div>
            <div className="card-delete">{<MdDeleteOutline/>}</div>
        </div>
    )
}
export default Card