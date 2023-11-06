import React, { useState } from 'react'

function BotCollection({avatar_url,name,catchphrase,id,onBotSelect,}) {
  const[selectedBot,setSelectedBot] = useState()
  
  function handleClick(bot) {
    onBotSelect(avatar_url)
  }
  function handleDelete() {}
  return (
    <div id='botCollection'>
     <div id='img'><img src={avatar_url} alt={name} onClick={handleClick}/> </div> 
    <div id='header'><h5>{name}</h5></div>
    <div id='binary'><p>{catchphrase}</p></div>
    <hr />
  </div>
  )
}

export default BotCollection