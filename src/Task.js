import { userContext } from './Main';
import { useContext } from 'react';
import Card from './Components/Card/Card';
import './Card.css'

function Task (props) {
    
    const user = useContext(userContext)
    return (
        <div className='task-container'>
            <Card name = {user[0]}
                task = {user[1]}
                date = {user[2]}
            />
        </div>
    )
}

export default Task