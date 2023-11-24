import { useEffect, useState } from 'react'
import BotCollection  from './BotCollection'
import YourBotArmy from './YourBotArmy'
import 'bootstrap/dist/css/bootstrap.css';

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
    <div className = "container bg-dark">
       <YourBotArmy  selectedBot = {selectedBot} /> 
       <h1 className = "text-center bg-primary text-capital">Bot Collection </h1>
       <div className = "row">
      {data.map(bot=>(
        
       <BotCollection avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} onBotSelect = {handleBotSelect} key={bot.id}/>
       ))}
       
    </div>
    </div>
  )
}

export default App
