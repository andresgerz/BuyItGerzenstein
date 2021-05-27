import { database } from '../firebase/index';
  


const ItemCollection = database.collection('ItemCollection');
const OrderCollection = database.collection('OrderCollection');


export async function getAllProducts() {

  return await ItemCollection.get().then((query) => {

    if (query.size === 0) {
      console.log("There are not results.");
    }

    return query.docs.map(doc => {
      return  {id: doc.id, ...doc.data()};
    });
    
  }).catch((error) => {
    console.log(error);
  })
  
}


export async function getProductById(id) {

  return await ItemCollection.doc(id).get().then(snapshot => {
    const product = snapshot.data();

    return {id: product.id, ...product};
  })

}

export async function createOrder(order) {
  console.log("Create order");
  const docRef = await ItemCollection.add(order);

  const doc = await docRef.get();

  const newProduct = { id: doc.id, ...doc.data() };
  
  return newProduct;
}


export async function getAllOrders() {

  return await OrderCollection.get().then((query) => {

    if (query.size === 0) {
      console.log("There are not results.");
    }

    return query.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    
  }).catch((error) => {
    console.log(error);
  })
}