import First from "./first"



function App() {
  const username = "Khushi Rajput"
// {} currly brase syntax jha bho ye hoga use variable ki trh use kre ge , {username} -> ye hai evaluated expresion yaha sirf final outcome likh skte hai 
  return (
    <>
      <h1>Hii! I am {username} Welcome to my first react project</h1>
      <First />
    </>
  )
}

export default App
