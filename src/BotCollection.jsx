import React, { useState } from 'react'



function BotCollection({avatar_url,name,catchphrase,id,onBotSelect,}) {
  const[selectedBot,setSelectedBot] = useState([])
  
  function handleClick(bot) {
    onBotSelect(avatar_url)
  }
  function handleDelete() {
    fetch(`http://localhost:3000/bots/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(res=>res.json())
  .then(deleted=>{
    const remaining = selectedBot.filter(bot=>bot.id !== id)
    setData(remaining);
  })
  }
  return (
    <div id='botCollection' className ="col-md-2 mb-2">
      <div className = "card bg-light">
     <img className = "card-img-top img-fluid"src={avatar_url} alt={name} onClick={handleClick}/>
     <div className ="card-body"> 
    <h5 className = "card-title text-success">{name}</h5>
    <p className ="text-success">{catchphrase}</p>
    <button className = "btn btn-danger" onClick={handleDelete}>X</button> 
    </div> 
    </div>
  </div>
  )
}

export default BotCollection