import React, { useState } from "react"

const TsetConponent = () => {
  const [ count, setCount ] = useState(0)
  
  return (<>
  テストコンポーネント<br/>
  { count }<br />
  <button onClick={() => setCount(count + 1)}>+1</button>
  </>)
}

export default TsetConponent