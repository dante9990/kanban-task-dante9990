import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

const dataMock = [
  {
    title: 'backlog',
    issues: [
      // {
      //   id: '1',
      //   name: 'Sprint bugfix',
      //   description: 'Fix all the bugs'
      // }
    ]
  },
  {
    title: 'ready',
    issues: [
      // {
      //   id: '12',
      //   name: 'Sprint bugfix',
      //   description: 'Fix all the bugs'
      // }
    ]
  },
  {
    title: 'in progress',
    issues: [
      // {
      //   id: '123',
      //   name: 'Sprint bugfix',
      //   description: 'Fix all the bugs'
      // }
    ]
  },
  {
    title: 'finished',
    issues: [
      // {
      //   id: '1234',
      //   name: 'Sprint bugfix',
      //   description: 'Fix all the bugs'
      // }
    ]
  },
]

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || dataMock
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
    <BrowserRouter>
    <div className="App">
      
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
