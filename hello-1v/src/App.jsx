import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greet} from './components/Greet' 
import Welcome from './components/Welcome'
import ReactCreate from './components/ReactCreate'
import Props from './components/Props'
import Message from './Message'
import Counter from './components/Counter'
import DesProp from './components/DesProp'
import Events from './components/Event'
import Events2 from './components/Events2'
import FuncitonClick from './components/FuncitonClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComp from './components/ParentComp'
import UserGreeting from './components/UserGreeting'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={() => setCount((count) =>count= count + 1)}>
          count is {count}
        </button>
        <Greet/>
        <Welcome name="Omprasad 333 " >
        <h1> Welcome children </h1>
        </Welcome>
        <ReactCreate/>
        <Props name="Omprasad">

          <h1>Hello children of prop </h1>
        </Props>
        <Message/>
        <Counter/>
        <DesProp name="Omprasad B L" age={25}  />
        <Events/>
        <Events2/>

        <FuncitonClick/>
        <ClassClick/>

        <EventBind/>
        <ParentComp/>
        <UserGreeting/>
    </div>
  )
}

export default App
