import React from 'react'

function YourBotArmy({selectedBot,name,id}) {
  return (
  <div id='empty-div'>
    
   <div id='selectedBot'><img src={selectedBot} alt={name} /> </div>
  </div>
  )
}

export default YourBotArmy