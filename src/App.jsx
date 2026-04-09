import Nav from "./Pages/Nav";
import Body from "./Pages/Body";
import Contact from "./Pages/Contact";
import ToDoApp from "./Pages/ToDoApp";
import Footer from "./Pages/Footer";
import Task from "./Pages/Task";


function App(){
  return(
    <div className="justify-items-center"> 
    {/* <Nav/>
    <Body/>
    <Contact/>
    <Footer/> */}
    <ToDoApp/>
    </div>
  )
}
export default App

// //   )
// //   }
// //   export default app

// function App(){
//   const data = {
//     name: "sanket",
//     email: "sanket@gmail.com"
//   }
//   return (
//     <>
//     <Contact props={data} />
//     </>
//   )
// }
//   export default App



// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1> count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Change Count</button>
//     </>
//   )
// }
// export default App