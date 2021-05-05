import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function ItemListContainer({database, greeting}) {

  const [data, setData] = useState(database);
  const { category } = useParams();


  useEffect(() => {

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