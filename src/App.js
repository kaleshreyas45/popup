import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Param from './Param';
import { useState } from 'react';
function App() {
  const [data,setData] = useState(false)
  const openWindow = ()=>{
    window.open('/popup/Param?code=1234','test','width=600,height=600,top=100,left=100')
  }
  window.callParent = function(){
    setData(true)
  }
  return (
    <>
      {data?<h1>Shreyas</h1>:""}
      <button onClick={openWindow}>Click</button>
      <Route path="/Param">
        <Param></Param>
      </Route>
    </>

  );
}

export default App;
