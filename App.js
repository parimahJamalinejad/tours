import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url='https://course-api.com/react-tours-project'
function App(){
const [loading,setLoading]=useState(true);
const [tours,setTours]=useState([]);
//////removing tour function
const removeTour=(id)=>{
    const newtours=tours.filter(item=> item.id!==id)
    setTours(newtours);
}
  /////////fetching tour function with try and catch
  const fetchTours=async()=>{
      
     try{
        const response=await fetch(url);
        const tours=await response.json();
        setLoading(false);
        setTours(tours);
     }
     catch(error){
        setLoading(false);
       console.log(error)
     }
  }

  /////////useEffect function
  

  useEffect(()=>{
    fetchTours()
  },[])
if(loading){
 return(  <main>
  <Loading/>
</main>)
}
if(tours.length===0){
  return (
    <main>
      <p className='refresh1'>No tours left</p>
      <button className='refresh' onClick={()=>fetchTours()}>Refresh</button>
    </main>
  )
}

  


    return(
    
    <main>

    <Tours tours={tours} removeTour={removeTour}/>
    
    </main>
   
    )
}
export default App;
