import './todo.scss'
import {useState} from "react";

const Todo = ({task, taskList, setTaskList}) => {
    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [mission, setMission] = useState(task.mission);

    const disableTodo = () => {
        // 1. button bg turn to teal
        // 2. button text turn to enable
        // 3. cross task
        // 4 fill the cube
        setIsDone(!isDone)
    }

    const changeMission = (e) => {
        setMission(e.target.value)
    }

    const changeTask = () => {
        if(mission === '')
            return
        // based on the task id to find task in the tasks list
        const newTaskList = taskList.map((ele) => {
           if(ele.id === task.id){
               ele.mission = mission
               return ele
           }else{
               return ele
           }
        })

        setTaskList(newTaskList)
        setIsEditing(false)
    }

    return (
        <section id='todoContainer'>
            <span className={`${isDone ? 'dotFill' : 'dotEmpty' }`} />
            {
                !isEditing
                &&
                <p
                    id='taskText'
                    className={`${isDone && 'todoText' }`}
                    onClick={()=>setIsEditing(true)}
                >
                    {task.mission}
                </p>
            }

            {
                isEditing
                &&
                <input
                    className='editTask'
                    type="text"
                    autoFocus
                    value={mission}
                    onBlur={()=>changeTask()}
                    onChange={(e)=>changeMission(e)}
                />
            }

            <button
                className={`${isDone ? 'fillBg' : 'deleteBtn'}`}
                onClick={()=>disableTodo()}
            >
                {`${isDone ? 'Enable' : 'Disable' }`}
            </button>
        </section>
    )
}

export default Todo
