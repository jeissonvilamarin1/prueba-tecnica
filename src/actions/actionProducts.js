import { db } from "../firebase/firebaseConfig";
import { typesProducts } from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query, 
  where
} from "@firebase/firestore";



//Filtrar
export let filtro = []

export const filterAsync = (value = 'desc', products) => {
      return async(dispatch)=>{
            filtro=[]
            const taskCollections = collection(db, "products");
            const q = query(taskCollections, where("price", ">=", 0) , (orderBy('price', value)));
            const datos = await getDocs(q)
            console.log(datos)
            datos.forEach((docu) => {
                  filtro.push(docu.data())
            })
            console.log(filtro)
      }
}

//Listar
export const listProductAsync = () => {
      return async (dispatch) => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productos = [];
            querySnapshot.forEach((doc) =>{
                  productos.push({
                        ...doc.data()
                  })
            })
            dispatch(listSync(productos))
      }
}

export const listSync = (products) =>{
      return{
            type:  typesProducts.list,
            payload: products
      }
}

//Crear

export const createProducts = (newProduct) => {
      return(dispatch) =>{
            addDoc(collection(db, "products"), newProduct)
            .then(resp => {
                  dispatch(listProductAsync())
            })
            .catch(error => {
                  console.log(error)
            })
      }
}