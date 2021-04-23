import React from 'react';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

export default function ItemListContainer({greeting}) {
  return(
    <div>
      <h2>ItemListContainer</h2>
      <h5>{greeting}</h5>
      <ItemList />
      <ItemCount stock={5} initial={1} />
      <ItemCount stock={0} initial={0} />
      <ItemCount stock={6} initial={1} />
      <ItemCount stock={8} initial={1} />
    </div>
  )
}