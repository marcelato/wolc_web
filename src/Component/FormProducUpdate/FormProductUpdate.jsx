import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { Button } from "@nextui-org/react";
import Navigate from "../../Component/Navigate/Navigate";
import useProduct from "../../Actions/useProduct";
import { useParams } from "react-router-dom";

function FormProductUpdate() {
    const {id} = useParams()
    const {isLoadingCreateProduct,productDetail,isLoadingProductDetail,productDetailError} =useSelector((state) => state.Product)
    const {PostCreateProduct,GetCreateProductDetail} = useProduct()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [Supplier_reference, setSupplier_reference] = useState("");
    const [Brand, setBrand] = useState("");
    const [Code, setCode] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [images, setImages] = useState([]);
    const [amountInUsd, setAmountInUsd] = useState("0");
    const now = moment().format('YYYY-MM-DD HH:mm:ss');

    const fetData =async() =>{
        await GetCreateProductDetail({id})
    }

    console.log(isLoadingCreateProduct)


    useEffect(() =>{
      fetData()
    },[])

    useEffect(() => {
        if (productDetail) {
          setName(productDetail.Name || "");
          setDescription(productDetail.Description || "");
          setSupplier_reference(productDetail.SupplierReference || "");
          setBrand(productDetail.Brand || "");
          setCode(productDetail.Code || "");
          setQuantity(productDetail.Quantity || 0);
          setAmountInUsd(Number(productDetail.Price || 0).toLocaleString());
          const imageArray = Array.isArray(productDetail.images) ? productDetail.images : [];
          setImages(imageArray.map((url, index) => ({ url, isMain: url === productDetail.img })));
        }
      }, [productDetail]);
      
    const convertToInteger = (value) => {
        const cleanedValue = value.replace(/,/g, ''); // Elimina las comas
        return parseInt(cleanedValue, 10); // Convierte a entero
    };

    const amountAsInteger = convertToInteger(amountInUsd);
     const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await PostCreateProduct({   code:Code,
                                            images:images,
                                            name:name,
                                            Brand:Brand,
                                            Supplier_reference:Supplier_reference,
                                            description:description,
                                            price:amountAsInteger,
                                            fecha:now,
                                            quantity:quantity,
                                            type:"update",
                                            ID:id})
            } catch (error) {
                console.log(error)
            }
        
        }
    };

    // Función para manejar cambios en el input
    const handleChange = (e) => {
      const value = e.target.value.replace(/\D/g, ''); 
      setAmountInUsd(Number(value).toLocaleString()); 
    };

    const handleImageChange = (index, file) => {
      const updatedImages = [...images];
      updatedImages[index] = {
        ...updatedImages[index],
        file,
        url: URL.createObjectURL(file)
      };
      setImages(updatedImages);
    };

    const handleSetMainImage = (index) => {
      const updatedImages = images.map((img, i) => ({
        ...img,
        isMain: i === index
      }));
      setImages(updatedImages);
    };
  
    const handleRemoveImage = (index) => {
      const updatedImages = images.filter((_, i) => i !== index);
      setImages(updatedImages);
    };
  
    const addNewImage = () => {
      setImages([...images, { file: null, url: '', isMain: images.length === 0 }]);
    };

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!name) formErrors.name = "El nombre es obligatorio.";
        if (!Code) formErrors.Code = "El código único es obligatorio.";
        if (!description) formErrors.description = "La descripción es obligatoria.";
        if (!amountInUsd) formErrors.amountInUsd = "El precio debe ser un número.";
        if (!Brand) formErrors.Brand = "La marca es obligatoria.";
        if (!Supplier_reference) formErrors.Supplier_reference = "La referencia del proveedor es obligatoria.";
        if (!quantity || quantity <= 0) formErrors.quantity = "La cantidad debe ser mayor que cero.";
        if (!images.some(img => img.isMain)) formErrors.images = "Debe seleccionar una imagen principal.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const fillContent =()=>{
        if(isLoadingProductDetail){
          return <p>Cargando</p>
        }
        if(productDetailError){
          return <p>Error </p>
      }


      return  <>
      
      <Navigate title={"Productos"} />
          <h2 className="text-3xl font-bold text-gray-100  text-center mb-6">
             Actualizar vo Producto
          </h2>
      <form
          onSubmit={handleSubmit}
          className="max-w-7xl mx-auto p-8  rounded-3xl shadow-lg space-y-8"
        >

          
          <Toaster richColors position="top-right" />

        {/* Primera fila: Nombre y Código */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-100 font-medium">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-2 block w-full  bg-[#18181b] px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Ejemplo: Producto A"
              defaultValue={productDetail.Name}
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="code" className="block text-gray-100  font-medium">
              Código único <span className="text-red-500">*</span>
            </label>
            <input
              id="code"
              type="text"
              value={Code}
              onChange={(e) => setCode(e.target.value)}
              className={`mt-2  block w-full px-4 bg-[#18181b] py-2 border ${
                errors.Code ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="Ejemplo: 12345"
              defaultValue={productDetail.Code}
            />
            {errors.Code && <p className="text-sm text-red-500 mt-1">{errors.Code}</p>}
          </div>
        </div>

        {/* Segunda fila: Descripción */}
        <div>
          <label htmlFor="description" className="block text-gray-100  font-medium">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 block w-full bg-[#18181b] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Describe el producto aquí..."
            defaultValue={productDetail.Description}
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">{errors.description}</p>
          )}
        </div>

        {/* Tercera fila: Precio y Marca */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-gray-100  font-medium">
              Precio <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              type="text"
              value={amountInUsd}
              onChange={handleChange}
              className={`mt-2 block bg-[#18181b] w-full px-4 py-2 border ${
                errors.amountInUsd ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
              placeholder="$1.000.000"
            />
            {errors.amountInUsd && (
              <p className="text-sm text-red-500 mt-1">{errors.amountInUsd}</p>
            )}
          </div>

          <div>
            <label htmlFor="brand" className="block text-gray-100  font-medium">
              Marca
            </label>
            <input
              id="brand"
              type="text"
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-2 block w-full bg-[#18181b] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              defaultValue={productDetail.Brand}
            />
            {errors.Brand && <p className="text-sm text-red-500 mt-1">{errors.Brand}</p>}
          </div>
        </div>

        {/* Cuarta fila: Cantidad */}
        <div>
          <label htmlFor="quantity" className="block text-gray-100  font-medium">
            Cantidad
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-2 block w-full bg-[#18181b] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            defaultValue={productDetail.Quantity}
          />
          {errors.quantity && (
            <p className="text-sm text-red-500 mt-1">{errors.quantity}</p>
          )}
        </div>

          <div>
              <label className="block text-gray-100 ">Referencia del proveedor</label>
              <input 
                  type="text"
                  value={Supplier_reference}
                  onChange={(e) => setSupplier_reference(e.target.value)}
                  className="mt-2 block  bg-[#18181b] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  defaultValue={productDetail.SupplierReference}
              />
              {errors.Supplier_reference && <p className="text-red-500">{errors.Supplier_reference}</p>}
          </div>

        <div>
          <label className="block text-gray-100  font-medium">Imágenes</label>
          <div>
            {images.map((image, index) => (
              <div key={index} className="mt-4 flex items-center space-x-4">
                <input
                  type="file"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                  className="block"
                />
                {image.url && (
                  <img
                    src={image.url}
                    alt="preview"
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                )}
                <button
                  type="button"
                  onClick={() => handleSetMainImage(index)}
                  className={`px-4 py-2 rounded-lg ${
                    image.isMain
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {image.isMain ? "Principal" : "Establecer como Principal"}
                </button>
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addNewImage}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Agregar más imágenes
          </button>
          {errors.images && <p className="text-red-500">{errors.images}</p>}
        </div>

        {/* Botón Enviar */}
        <div className="text-center">
          <Button
            isLoading={isLoadingCreateProduct}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Guardar imagenes
          </Button>
        </div>
      </form>
      </>

    }


    if(!productDetail) return null

    return (
            <>{fillContent()} </>);
        }
export default FormProductUpdate;
