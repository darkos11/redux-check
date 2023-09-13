import Todo from "./Todo";
import { useSelector } from 'react-redux'
import { useState } from "react";
const ListTodo = () => {
  const todos = useSelector((state) => state.todo)
   /* initial state all task are displayed */
   const [sort, setSort] = useState("all"); 
   console.log('todos',todos.isDone  )
  return (
    <>  

    <button size="lg" variant="danger" style={{ width: '140px' }}
            onClick={() => setSort("not-completed")}>  not-completed
      </button>

      <button size="lg" variant="success" style={{width:'140px'}}
          onClick={() => setSort("completed")}> Completed
      </button>

      <button size="lg" style={{background:"#94bbe9",border:'transparent' ,width:'140px'}}
          onClick={() => setSort("all")} >
          All
      </button>
      {todos.length > 0 && sort === "all" ?
          todos.map(job => (
            <Todo  job={job} key={job.id} />)) : null}
        
        {/* display finished todos */}

        {todos.length > 0 && sort === "completed" ?
          todos.filter(ele => ele.isDone === true).map(job => ( 
                
            <Todo  job={job} key={job.id} />)) : null}
        {/* display  todos to do */}
        {todos.length > 0 && sort === "not-completed" ?
          todos.filter(ele => ele.isDone === false).map(job => (     
          <Todo  job={job} key={job.id} />)): null}
    </>
  );
};

export default ListTodo;
