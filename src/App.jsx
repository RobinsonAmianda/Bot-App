import { useEffect, useState } from 'react'
import './App.css'
import BotCollection  from './BotCollection'

function App() {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then(res=>res.json())
    .then(bot=>{
      setData(bot)
    })
  },[])
  return (
    <>
      <div id='empty-div'></div>
      {data.map(bot=>(
       <BotCollection avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} key={bot.id} id={bot.id}/>
    ))} 
    </>
  )
}

export default App
