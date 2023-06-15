import React from "react";
import List from "../list/List";
import './Board.css'

function Board(props) {
    const { tasks, setTasks } = props

    const listTasks = tasks.filter(listTask => listTask.title !== 'finished')

    const issuesList = []

    for (let i = 0; i <= listTasks.length - 1; i++) {
        issuesList[i] = listTasks[i].issues
    }

    const unicId = window.crypto.getRandomValues(new Uint32Array(1))

    const moveTask = (id, title) => {
        const indexList = tasks.indexOf(tasks.find(n => n.title === title))
        const prevList = tasks[indexList - 1]
        const issue = prevList.issues.find(i => i.id === id)
        const newIssues = prevList.issues.filter(n => n.id !== id);
        tasks[indexList - 1].issues = newIssues


        const task = {
            id: issue.id,
            name: issue.name,
            description: issue.description
        }

        const newTasks = [...tasks[indexList].issues, task]

        tasks[indexList].issues = newTasks

        setTasks([...tasks])
    }

    const addNewTask = (name, description) => {
        const backlogList = tasks.find(task => task.title === 'backlog')

        const task = {
            id: String(unicId),
            name,
            description
        }

        const newBaklogList = [...backlogList.issues, task]

        tasks[0].issues = newBaklogList

        setTasks([...tasks])
    }

    return (
        <div className="board">
            {
               tasks && tasks.map((task, index) => {
                    return (
                        <List key={index}
                            data={issuesList[index - 1]}
                            title={task.title}
                            tasks={task.issues || []}
                            addNewTask={addNewTask}
                            moveTask={moveTask} />
                    )
                })
            }
        </div>
    )
}

export default Board