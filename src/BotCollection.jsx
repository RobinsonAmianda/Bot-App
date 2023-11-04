import React from 'react'

function BotCollection({avatar_url,name,catchphrase,id}) {
  return (
    <div id='card'>
     <div id='img'><img src={avatar_url} alt={name}/> </div> 
    <div id='header'><h5>{name}</h5></div>
    <div id='binary'><p>{catchphrase}</p></div>
    <hr />
  </div>
  )
}

export default BotCollection