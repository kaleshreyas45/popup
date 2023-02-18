import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [data,setData] = useState(false)
  const [popup,setpopup] = useState(false)
  const openWindow = ()=>{
    window.open('/popup?code=1234','test','width=600,height=600,top=100,left=100')
  }
  window.callParent = function(){
    setData(true)
  }
  useEffect(()=>{
    const code = window.location.href.split('=')[1]
    if(code){
        setpopup(true)
        setTimeout(()=>{
            window.opener.callParent()
            window.close()            
        },3000)
    }
  },[])
  return (
    <>
    {popup && <h1>popup</h1>}
      {data?<h1>Shreyas</h1>:""}
      <button onClick={openWindow}>Click</button>
    </>

  );
}

export default App;
