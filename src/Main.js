
import { createContext} from 'react'
import { useState } from 'react';
import Header from './Components/Header/Header';
import App from './App'
import Task from './Task'
import { MdDeleteOutline } from 'react-icons/md';


export const userContext = createContext();

function Main () {
  const [maintitle, setMaintitle] = useState("");
  const [maindescription, setMaindescription] = useState("");
  const [mainlabel, setMainlabel] = useState("");
  const [maindate, setMaindate] = useState("");
  const [mainpasar, setMainpasar] = useState("");

  const localStorage = value => {
    window.localStorage.setItem("task",JSON.stringify(value))
  }

  function mainTask(taskname, taskdescription, taskdate) {
    setMaintitle(taskname);
    setMaindescription(taskdescription);
    setMaindate(taskdate);
    pasar();
  }



  function pasar() {
    console.log(maindate)
    setMainpasar(
        [maintitle, maindescription, maindate]
    )
    localStorage(mainpasar);
  }

    return(
        <>
        <div className="main-container">
            <Header />

        </div>
        <div>
            <App mainTask = {mainTask} />
        </div>

        <userContext.Provider value = {mainpasar}>
        <div>
            <Task />
        </div>
        </userContext.Provider>

        </>
    )
}

export default Main