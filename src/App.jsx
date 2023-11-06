import { useEffect, useState } from 'react'
import './App.css'
import BotCollection  from './BotCollection'
import YourBotArmy from './YourBotArmy'


function App() {
  const[data,setData] = useState([])
  const[selectedBot,setSelectedBot] = useState()
  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then(res=>res.json())
    .then(bot=>{
      setData(bot)
    })
  },[])
  function handleBotSelect(bot) {
    setSelectedBot(bot)
  }
  return (
    <>
       <YourBotArmy  selectedBot = {selectedBot} /> 
      {data.map(bot=>(
        <div>
       <BotCollection avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} onBotSelect = {handleBotSelect} key={bot.id}/>
    </div>
    ))} 
    </>
  )
}

export default App
