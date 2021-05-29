import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import './ItemList.css';

export default function ItemList({dataItems}) {
  
  const [data, setdata] = useState(dataItems);

  useEffect(() => {
    setdata(dataItems);
    
  }, [dataItems])
  

  return (
    <div>
      <hr/>
      <h3>ItemList</h3>
      <ul className="item-list m-auto">{dataItems.map((elem) => 
        <li key={elem.id}>
          <Item info={elem} />
        </li>)}
      </ul>
      <hr/>
    </div>
  )
}