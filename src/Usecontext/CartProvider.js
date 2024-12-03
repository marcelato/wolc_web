import React, {useState} from 'react'
import { toast } from 'sonner';

const Autoconext = React.createContext({})

export const AutoProvider =({children}) =>{
    
    const [cartItems, setCartItems] = useState([]);
    const [jwt, setJwt] = useState(() => JSON.parse(localStorage.getItem('jwt')));

    const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar el carrito

    // Función para agregar al carrito
    const addToCart = (product) => {
      setIsCartOpen(true);
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.ID === product.ID);
    
        if (existingItem) {
          // Si el producto ya está en el carrito, verifica si se puede agregar más
          if (existingItem.quantity + 1 > product.Quantity) {
            toast.error("No hay mas producto disponible")
            return prevItems; // No actualiza el carrito si excede el límite
          }
    
          return prevItems.map((item) =>
            item.ID === product.ID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
    
        // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
        if (product.Quantity > 0) {
          return [...prevItems, { ...product, quantity: 1 }];
        } else {
          alert("Este producto no tiene stock disponible.");
          return prevItems; // No agrega el producto si no hay stock
        }
      });
    };
    
  
    // Función para remover un producto
    const removeFromCart = (id) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.ID !== id)
      );
    };
  
    // Función para actualizar la cantidad
    const updateQuantity = (id, quantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.ID === id ? { ...item, quantity } : item
        )
      );
    };


    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    

    return <Autoconext.Provider  
    value={{cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity,
            setCartItems,
            totalItems,
            setIsCartOpen,
            isCartOpen,
            setJwt,
            jwt}}

    >
      {children}
    </Autoconext.Provider>
  }
  
  export default Autoconext