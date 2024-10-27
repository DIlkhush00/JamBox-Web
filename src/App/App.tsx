import React from "react"

function App () {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <p>{ count }</p>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </>

  )
}

export default App