import React, { useState, useEffect } from 'react';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

export default function ItemListContainer({greeting}) {

  const [data, setData] = useState([])

  useEffect(() => {
    
    const response =  new Promise((resolve, reject) => {
      
      setTimeout(() => {
        setData([
          {
            id: 0,
            title: "Notebook",
            description: "Notebook description",
            price: 55000,
            pictureUrl: "https://via.placeholder.com/200"
          },
          {
            id: 1,
            title: "Computer",
            description: "Computer description",
            price: 80000,
            pictureUrl: "https://via.placeholder.com/200"
          },
          {
            id: 2,
            title: "Smart TV",
            description: "Smart TV description",
            price: 70000,
            pictureUrl: "https://via.placeholder.com/200"
          },
          {
            id: 3,
            title: "Phone",
            description: "Phone description",
            price: 40000,
            pictureUrl: "https://via.placeholder.com/200"
          }
        ]);
      }, 2000)

    }) 
    .then(result => {
      

    })
    .catch((err) => console.log("Error", err))  
    

  }, [data])


  return(
    <div>
      <h2>ItemListContainer</h2>
      <h5>{greeting}</h5>
      <ItemList dataItems={data} />
      <ItemCount stock={5} initial={1} />
      <ItemCount stock={0} initial={0} />
      <ItemCount stock={6} initial={1} />
      <ItemCount stock={8} initial={1} />
    </div>
  )
}