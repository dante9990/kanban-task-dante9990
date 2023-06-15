import React, {useState} from "react";
import { useRouteMatch, Link } from 'react-router-dom'
import './TaskDetail.css'

function TaskDetail(props) {

    const match = useRouteMatch()
    const { taskId } = match.params
    const { tasks, setTasks } = props

    const filteredTask = []
    const arrIssues = []

    for (let i = 0; i < tasks.length; i++) {
        arrIssues[i] = tasks[i].issues
        for (let j = 0; j < arrIssues[i].length; j++) {
            filteredTask.push(arrIssues[i][j])
        }
    }

    let task = filteredTask.find(task => task.id === taskId)

    const [values, setValues] = useState(task.description || 'This task has no description')
    const [visible, setVisible] = useState(false)

	const handleChange = e => {
		setValues(e.target.value)
	}

    const handleClick = () => {
        const newTask = {
            id: task.id,
            name: task.name,
            description: values
        }

        for(let i = 0; i < tasks.length; i++) {
            for(let j = 0; j < tasks[i].issues.length; j++) {
                if(tasks[i].issues[j] === task)
                tasks[i].issues[j] = newTask
            }
        }
        setVisible(!visible)
        setTimeout(() => {
            setVisible(false)
          }, 2000);
        setTasks([...tasks])
    }


    return (
        <div className="task-detail">
            <div className="task-detail__header">
                <h2 className="task-detail__title">{task.name}</h2>
                {visible && <div className="save">Save</div>}
                <Link to='/'>
                    <div className="task-detail__close"></div>
                </Link>
            </div>
            <textarea className="task-detail__text" name="description" onChange={handleChange} onDoubleClick={handleClick} value={values} ></textarea>
            <button className="btn__save" onClick={handleClick}>Save</button>
        </div>
    )
}

export default TaskDetail