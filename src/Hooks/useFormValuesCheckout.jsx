import { useState } from 'react';

const useFormValuesCheckout = () => {

  const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        id: "",
        phone: "",
        cardName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
        address:"",
        city:"",
        state:"",
        postalCode:""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const inputVal = value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
      const limitedInputVal = inputVal.slice(0, 16); // Limitar a 16 dígitos
      const formattedCardNumber = limitedInputVal.replace(/(\d{4})(?=\d)/g, '$1 '); // Insertar un espacio cada cuatro dígitos
      setForm({ ...form, [name]: formattedCardNumber });
    } else if (name === 'cvc') {
      const inputVal = value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
      const limitedInputVal = inputVal.slice(0, 4); // Limitar a 4 dígitos (entre 3 y 4)
      setForm({ ...form, [name]: limitedInputVal });
    } else if (name === 'termsAccepted') {
      const inputValue = value.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios adicionales
      const accepted = inputValue === 'false';
      setForm({ ...form, [name]: accepted });
    } else if (name === 'siteTermsAccepted') {
      const inputValue = value.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios adicionales
      const acceptede = inputValue === 'false';
      setForm({ ...form, [name]: acceptede });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return [form, handleChange];
};

export default useFormValuesCheckout;