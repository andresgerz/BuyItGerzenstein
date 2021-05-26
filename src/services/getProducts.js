/* import { database } from '../firebase/index';
  
export default function getProducts() {

  const ItemCollection = database.collection('ItemCollection');

  return ItemCollection.get().then((query) => {

    query.docs.map(doc => {return doc.data()});

    })
  } */