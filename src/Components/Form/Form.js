import "./Form.css";
import { useState } from "react";
function Form({createTask}) {
  
  const [name, setName] = useState("");
  const [task, setTask] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    createTask(name,task);
  }
  return (
    <div className="form--contaner">
      <form action="" onSubmit={handleSubmit}>
        <section className="input-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required placeholder="Taks name" onChange={(e) => { setName(e.target.value);}}></input>
        </section>
        <section className="input-form">
          <label htmlFor="why">Task</label>
          <textarea type="text" id="why" required placeholder="Task" onChange={(e) => {setTask(e.target.value);}}></textarea>
        </section>
        <section>
          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  );
}

export default Form;
