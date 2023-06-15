import React from "react";
import { Switch, Route } from 'react-router-dom'
import Board from "../board/Board";
import TaskDetail from "../taskDetail/TaskDetail";
import './Main.css'

function Main(props) {

    

    return (
        <main className='main'>
            <Switch>
                <Route path={'/tasks/:taskId'}>
                    <TaskDetail {...props} />
                </Route>
                <Route path='/'>
                    <Board {...props} />
                </Route>
            </Switch>

        </main>
    )
}

export default Main