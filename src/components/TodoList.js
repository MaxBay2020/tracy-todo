import Todo from "./Todo";
import './todoList.scss'

const TodoList = ({taskList, setTaskList}) => {

    return (
        <section className='todoListContainer'>
            {
                taskList.map((task) => {
                    return <Todo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList}  />
                })
            }
        </section>
    )
}

export default TodoList
