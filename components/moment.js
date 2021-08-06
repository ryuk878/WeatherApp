import  React, { useState , useEffect } from 'react'
import '../App.css'



export const DateTime = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="time">{date.toLocaleTimeString()} <br></br> {date.toLocaleDateString()}</div>
    )
}

export default DateTime
