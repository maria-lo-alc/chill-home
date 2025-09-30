import products from './products'

export default function getProducts(){
  return new Promise( (resolve) =>{
    console.log("Cargando productos...")
    setTimeout( () => resolve(products), 1500)
    
  })
};

export function getProductById(idParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productRequested = products.find( item => item.id === Number(idParam) )    
    console.log("Devolviendo producto... ", productRequested)    
    setTimeout( () => {
      if (productRequested){
        resolve(productRequested)
      }
      else{
        reject("Item no encontrado")
      }
    }
      , 1000)
  })
  return promiseProduct;
}

export function getProductByCategory(categoryParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productsRequested = products.filter( item => item.category === categoryParam )    
    console.log("Devolviendo productos por categoria... ", productsRequested)    
    setTimeout ( () => resolve (productsRequested), 1000)
  })
  return promiseProduct;
}
