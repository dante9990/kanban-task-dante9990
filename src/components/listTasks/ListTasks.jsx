import React, { useState } from "react";
import './ListTasks.css'

function ListTask(props) {

    const { data, moveTask } = props
    const [visible, setVisible] = useState(false)

    const handleClick = (e) => {
        moveTask(e.target.id, props.title)

    }

    return (
        <div className="select">
            <div className={`select__emty ${visible ? 'select__emty-active' : ''}`} onClick={()=> setVisible(!visible)}></div>
            <div className={`select__items ${visible ? 'select__items-active' : ''}`}>
                {data.map((task) => {
                    return (
                        <div key={task.id} className="select__item" onClick={handleClick} id={task.id}>{task.name}</div>
                    )
                })}
            </div>
        </div>

    )
}

export default ListTask