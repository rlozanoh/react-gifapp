 import React from 'react'
 import { GiftGridItem } from './GiftGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
 
 export const GiftGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );  

     return (
        <>
         <h3> { category } </h3>
         {loading && <p> Loaging.... </p>}
         <div className="cardGrid">
            {
                images.map( img => (
                    <GiftGridItem 
                        key= { img.id }
                        {...img}
                    />
                ))
            }
         </div>
        </>
     )
 }