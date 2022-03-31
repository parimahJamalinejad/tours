import React, { useState } from 'react';
import Tour from './Tour';

const Tours=({tours,removeTour})=>{
    
    
    return(
    
<section className='tours'>
    <p className='head'> Our Tours</p>
    {tours.map(tour=> <Tour key={tour.id} {...tour} removeTour={removeTour}/>)}
</section>
   
    )
}
export default Tours;