import React from "react";
import { config } from "../Config/Config";

const PostCreateProduct = async ({name,description,Supplier_reference,Brand,quantity,images,price,fecha,code,type,ID}) => {
    const formData = new FormData();
    formData.append('ID',ID);
    formData.append('type', type);
    formData.append('code', code);
    formData.append('fecha', fecha);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('supplier_reference',Supplier_reference);
    formData.append('brand',Brand);
    formData.append('quantity',quantity); 
    images.forEach((imageObj, index) => {
        formData.append("image", imageObj.file); 
        formData.append("url", imageObj.url); // Enviar el archivo `file`
        formData.append(`isMain[${index}]`, imageObj.isMain); // Enviar `isMain` para cada imagen
    });

    try {
        const resp = await fetch(`${config.serverRoute}/api/admin/inserProducts`, {
          method: "POST",
          body: formData
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };


  const GetProduct = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/admin/GetProduct`, {
          method: "GET",
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const data = await resp.json();
        return data.query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetProductHistory = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/admin/GetProductHistory`, {
          method: "GET",
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const data = await resp.json();
        return data.query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const PostProductDelete = async ({ID,user_id,record_id}) => {
        return fetch(`${config.serverRoute}/api/admin/deleteproduct`,{
          method:'POST',
          headers:{
              'Content-type':'application/json'
          },
          body: JSON.stringify({ID,user_id,record_id})
      }).then(resp =>{
          if(!resp.ok) throw new Error('Response is not ok')
          return resp.json()
      }).then(resp=>{
          return resp
      })
  };



  const GetProductDetail = async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/admin/GetProductDetail/${id}`, {
          method: "GET",
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const data = await resp.json();
        return data.data
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const ENDPOINT = `${config.serverRoute}/api/user/login`

  const LoginService =({username,password})=>{
    return fetch(`${ENDPOINT}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({username,password})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
        return resp
    })
}

//cart product
const PostCartProduct = async ({Username,Lastname,ID_card,Phone,Email,total_amount}) => {
  return fetch(`${config.serverRoute}/api/cart/CartProduct`,{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body: JSON.stringify({Username,Lastname,ID_card,Phone,Email,total_amount})
    }).then(resp =>{  
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
        return resp
    })
}; 

export default {
    PostCreateProduct,
    GetProduct,
    GetProductDetail,
    LoginService,
    PostProductDelete,
    GetProductHistory,
    PostCartProduct
}
/**
const products = [
  {
    id: 1,
    brand: 'ABUS',
    title: 'Pasador picaporte de acero mod. hasp 140/190',
    ref: '5315',
    sku: 'FF-0000046691',
    price: 99800,
    image: 'https://www.ferricentro.com/media/catalog/product/C/E/CERRADURA-EMBUTIR-L370-LISBOA-US15-4008.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:', // Replace with actual image path
  }
  // Add more products here as needed
];
 */