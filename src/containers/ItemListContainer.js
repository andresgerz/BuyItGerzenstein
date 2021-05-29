import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { getAllProducts } from '../services/index';

export default function ItemListContainer({greeting}) {

  
  const { category } = useParams();

  const [products, setProducts] = useState([]);  
 
  useEffect(() => {
    
    getAllProducts().then(data => setProducts(data));
  }, [])

  

  useEffect(() => {

    
    if (category != undefined) {
      
      let product = products.filter(item => item.category === category);
      setProducts(product);
    }

    
  }, [category])

  return(
    <div>
      <h2>ItemListContainer</h2>
      <h5>{greeting}</h5>
      <ItemList dataItems={products} />
    </div>
  )
}