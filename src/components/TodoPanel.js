import TodoList from "./TodoList";
import {useState} from "react";
import { nanoid } from 'nanoid'
import {SiTodoist} from 'react-icons/si'
import './todoPanel.scss'

const TodoPanel = () => {
    const [taskList, setTaskList] = useState([])
    const [mission, setMission] = useState('');

    const addTask = () => {
        if(mission === '')
            return
        // 1. generate a new task
        // 2. push generated new task into tasks list
        setTaskList([...taskList, {
            id: nanoid(),
            mission: mission
        }])

        // 3. clear the input
        setMission('')
    }


    return (
        <section className='todoPanelContainer'>
            <section className="titleContainer">
                <h1>Todo List</h1>
                <SiTodoist color='coral' fontSize='26px' />
            </section>

            <section className="addTodoContainer">
                <input
                    className='todoInput'
                    type="text"
                    placeholder='Add a new todo here...'
                    value={mission}
                    onChange={(e)=>setMission(e.target.value)}
                />
                <button className='addButton' onClick={()=>addTask()}>ADD</button>

            </section>

            <TodoList
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </section>
    )
}

export default TodoPanel
