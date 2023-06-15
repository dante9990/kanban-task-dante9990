import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import FormSubmit from "../FormSubmit/FormSubmit";
import ListTask from "../listTasks/ListTasks";
import './List.css';



function List(props) {
    const { title, tasks, addNewTask, data, moveTask } = props
    const [visible, setVisible] = useState(false)

    const changeVisible = () => {
        setVisible(!visible)
    }

    const formSubmit = (name, description) => {
        addNewTask(name, description)
        changeVisible()
    }

    const handleMove = (id, title) => {
        moveTask(id, title)
        changeVisible()
    }

    return (
        <section className='list'>
            <h2 className='list__title'>{title}</h2>
            <div className='list__items'>
                {
                    tasks.map(task => {
                        return (
                            <Link to={`/tasks/${task.id}`} key={task.id} className='link'>
                                <div className='list__item'>
                                    <h3 className='list__text'>{task.name}</h3>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
            {!visible && <Button changeVisible={changeVisible} data={title !== 'backlog' ? data : false} />}
            {visible && title === 'backlog' && <FormSubmit formSubmit={formSubmit} />}
            {visible && title !== 'backlog' && <ListTask data={data} moveTask={handleMove} title={title} />}
        </section>
    )
}

export default List