import React from 'react'

function YourBotArmy({selectedBot,name,id}) {
  function handleDelete() {
  fetch(`http://localhost:3000/bots/${id}`,{
    method:"DELETE",
    headers:{
      "COntent-Type":"application/json"
    }
  })
  .then(res=>res.json())
  .then(deleted=>{
    const remaining = selectedBot.filter(bot=>bot.id !== id)
    setData(remaining)
  })
  }
  return (
  <div id='empty-div'>
    
   <div id='selectedBot'><img src={selectedBot} alt={name}  onClick={handleDelete}/> </div>
  </div>
  )
}

export default YourBotArmy