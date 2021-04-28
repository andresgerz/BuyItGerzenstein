import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';

const getItems = () => {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve({
          id: 0,
          title: "Guitar",
          description: "Guitar description",
          price: 42000,
          pictureUrl: "https://via.placeholder.com/200"
        })
      
    }, 2000)

  }) 
  
}

export default function ItemDetailContainer() {

  const [data, setData] = useState({})



  useEffect(() => {
    
    getItems()
    .then(result => {
      console.log(result);
      setData(result);
    })
    .catch((err) => console.log("Error", err));
   

  }, [])

  return (
    <div>
      <h2>ItemDetailContainer</h2>
      <ItemDetail dataItem={data} />
    </div>
  )
}
