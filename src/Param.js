import React, { useEffect } from 'react'

const Param = () => {
  useEffect(()=>{
    const code = window.location.href.split('=')[1]
    if(code){
        setTimeout(()=>{
            window.opener.callParent()
            window.close()
            
        },3000)
    }
  })  
  return (
    <div>Param</div>
  )
}

export default Param