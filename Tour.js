import React, { useState } from 'react';

const Tour=({id,image,name,price,info,removeTour})=>{
    const [readMore,setReadMore]=useState(false);
    return(
    <article className='tour'>
   <img src={image} alt={name}/>
<footer>
   <h3 className='name'>{name}</h3>
   <h4 className='price'>${price}</h4>
   <p className='para'>
   {readMore ? info : ` ${info.substring(0,200)}...`}
   <button className='readMore' onClick={()=> setReadMore(!readMore)}>
       {readMore ? 'show less' : 'read more'}</button>
   </p>
   <button className='notIn' onClick={()=> removeTour(id)}>Not Interested</button>
</footer><br/>
    </article>
   
    )
}
export default Tour;