import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail.js';
import { getProductById } from '../services/index';

export default function ItemDetailContainer({database}) {

  const [data, setData] = useState({});
  const { id } = useParams();


  useEffect(() => {
   
    console.log("ItemDetailContainer");
    console.log(database);
   
    getProductById(id).then(data => setData(data));
    
  }, [id])

  return (
    <>
      <h2>ItemDetailContainer</h2>
      <ItemDetail itemDetails={data} />
    </>
  )
}
