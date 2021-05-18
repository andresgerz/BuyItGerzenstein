import { database } from '../firebase/index';
  
export default function getProducts() {

  const ItemCollection = database.collection('ItemCollection');

  return ItemCollection
    .get()
    .then(snapshot => {

    
      let products = snapshot.docs.map(doc => {

        let product = doc.data();
        return {
          id: doc.id,
          ...product
        }
      })
    })
}