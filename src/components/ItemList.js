import React, { useState, useEffect } from 'react';
import Item from './Item.js';

export default function ItemList() {

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
            pictureUrl: "www.url0"
          },
          {
            id: 1,
            title: "Computer",
            description: "Computer description",
            price: 80000,
            pictureUrl: "www.url1"
          },
          {
            id: 2,
            title: "Smart TV",
            description: "Smart TV description",
            price: 70000,
            pictureUrl: "www.url2"
          },
          {
            id: 3,
            title: "Phone",
            description: "Phone description",
            price: 40000,
            pictureUrl: "www.url3"
          }
        ]);
      }, 2000)

    }) 
    .then(result => {
      

    })
    .catch((err) => console.log("Error", err))  
    

  }, [data])

  return (
    <div>
      <hr/>
      <h3>ItemList</h3>
      <ul className="w-25 m-auto">{data.map(elem => 
        <li>
          <Item info={elem} />
        </li>)}
      </ul>
      <hr/>
    </div>
  )
}