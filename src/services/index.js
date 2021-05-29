import { database } from '../firebase/index';
  


const ItemCollection = database.collection('ItemCollection');
const OrderCollection = database.collection('OrderCollection');


export async function getAllProducts() {

  return await ItemCollection.get().then((query) => {

    if (query.size === 0) {
      console.log("There are not results.");
    }

    return query.docs.map(item => {
      return  {id: item.id, ...item.data()};
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
  const docRef = await OrderCollection.add(order);

}


export async function getAllOrders() {

  return await OrderCollection.get().then((query) => {

    if (query.size === 0) {
      console.log("There are not results.");
    }

    return query.docs.map(order => {
      return {id: order.id, ...order.data()};
    });
    
  }).catch((error) => {
    console.log(error);
  })
}