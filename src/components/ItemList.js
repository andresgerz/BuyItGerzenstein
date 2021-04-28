import Item from './Item.js';
import './ItemList.css';

export default function ItemList({dataItems}) {

  

  return (
    <div>
      <hr/>
      <h3>ItemList</h3>
      <ul className="item-list m-auto">{dataItems.map(elem => 
        <li>
          <Item info={elem} />
        </li>)}
      </ul>
      <hr/>
    </div>
  )
}