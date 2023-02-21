import {useState} from 'react';
import './App.css';
import Calendar from 'react-calendar';
import Label from './Components/Label/Label';
import Form from './Components/Form/Form';
import Card from './Components/Card/Card';
import { VscIssues} from 'react-icons/vsc';
import { MdDeleteOutline } from 'react-icons/md';

function App({mainTask}) {
  const [date, setDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dating, setDating] = useState("");

  console.log(title, description)

  function createTask(name, task) {
    setTitle(name);
    setDescription(task);
  }

  return (<>
  <div className="main-container">
    <div className="app">
      <h1 className="header">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
      
    </div>

    <div className="label-container">
      <div className = "circle-green" onClick ={() => {
        let lebelio = <Label 
          name = "green"
          icon = <VscIssues/>
          color = "green"
          />
        setLabel(lebelio);
        }}>
      <Label 
        name = "green"
        icon = <VscIssues/>
        color = "green"
      />
      </div>

      <div className = "circle-red" onClick ={() => {
        let lebelio = <Label 
          name = "red"
          icon = <VscIssues/>
          color = "red"
          />
        setLabel(lebelio);
        }}>
      <Label 
        name = "red"
        icon = <VscIssues/>
        color = "red"
      />
      </div>

      <div className= "circle-blue" onClick ={() => {
          let lebelio = <Label 
            name = "blue"
            icon = <VscIssues/>
            color = "blue"
            />
          setLabel(lebelio);
        }}>
      <Label 
        name = "blue"
        icon = <VscIssues/>
        color = "blue"
      />
      </div>
    </div>


    <div className="form-container">
    <Form createTask ={createTask}/>
    </div>

    <section>
      <button onClick={()=> {
        setDating(date.toDateString())
        mainTask(title,description);
      }}>Submit</button>
    </section>

  </div>
    </>
  );
}

export default App;
