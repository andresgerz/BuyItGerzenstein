import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
//import getProducts from '../services/getProducts';

export default function ItemListContainer({database, greeting}) {
  const initialState = database;
  //const initialState = getProducts();
  const [data, setData] = useState(database);
  const { category } = useParams();


  useEffect(() => {

    console.log("test");
    console.log(data);
    if (category) {
      
      let product = data.filter(item => item.category === category);
      setData(product);
    }

    
  }, [category])
  
  
  return(
    <div>
      <h2>ItemListContainer</h2>
      <h5>{greeting}</h5>
      <ItemList dataItems={data} />
    </div>
  )
}