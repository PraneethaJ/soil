import React, {useState,useEffect} from 'react'

function App() {

  const [dat,setData] =useState([{}])

  useEffect(()=>{
    fetch("/members").then(
      res=>res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  } ,[])

  return (
    <div>
      
      {(typeof dat.members === 'undefined') ? (
          <p>Loading...</p>
      ): (
        dat.members.map((member,i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App
