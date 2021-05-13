import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail.js';


export default function ItemDetailContainer({database}) {

  const [data, setData] = useState({});
  const { id } = useParams();


  useEffect(() => {
   

    let product = database.find(item => item.id === Number(id));
    setData(product);
    
  }, [id])

  return (
    <>
      <h2>ItemDetailContainer</h2>
      <ItemDetail itemDetails={data} />
    </>
  )
}
