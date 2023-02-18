import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [popup,setpopup] = useState(false)
  const openWindow = ()=>{
    window.open('/popup?code=1234','test','width=600,height=600,top=100,left=100')
  }
  useEffect(()=>{
    const code = window.location.href.split('=')[1]
    if(code){
        setpopup(true)
        setTimeout(()=>{
            window.opener.location.reload()
            window.close()            
        },3000)
    }
  },[])
  return (
    <>
    {popup ? <h1>popup</h1>: <h1>Main window</h1>}
      <button onClick={openWindow}>Click</button>
    </>

  );
}

export default App;
