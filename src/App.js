import React from 'react'
import SignIn from './SignInandAdd/SignIn';
import Header from './Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRawMaterials from './AddRawMaterials/AddRawMaterials';
import AddUser from './SignInandAdd/AddUser';
import Help from './Help/Help';
function App() {
  const [isLoggedIn,setIsLoggedIn]=React.useState(false);
  // if(sessionStorage.getItem("user1")){
  //   // console.log(sessionStorage.getItem("user1"))
  //   setIsLoggedIn(true)
  // }
  return (
    <div className="App">
      {
        isLoggedIn? <Home />:  <SignIn setIsLoggedIn={setIsLoggedIn}/>  

      }
    </div>
  );
}
const Home=(props)=>{
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={ <AddRawMaterials user={props.user}/>  }>
        
          {/* <RawMaterialTypes/> */}
        </Route>
        <Route path="/myhistory" element={   <div>History</div>}/>
        
        <Route path="/help" element={  <Help/>} /> 
        
        <Route path="/adduser" element={ <AddUser/>} /> 

    </Routes>

    {/*  */}
    {/*  */}
  </Router>
  )
}
export default App;
