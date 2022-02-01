import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { AdminContext } from "../contexts/AdminProvider";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    description: "",
    purpose: "",
    image: "",
    price: "",
  });

  const { addProduct } = useContext(AdminContext);

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newProduct) {
      if (!newProduct[key].trim()) {
        alert("Fields required!");
        return;
      }
    }
    addProduct(newProduct);
    setNewProduct({
      name: "",
      brand: "",
      description: "",
      purpose: "",
      image: "",
      price: "",
    });
  }

  return (
    <div className="add-container">
      <h2>Добавьте продукт:</h2>
      <Container>
        <form onSubmit={handleSubmit}>
          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({ ...newProduct, name: event.target.value })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Название продукта</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({ ...newProduct, brand: event.target.value })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Бренд</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  description: event.target.value,
                })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Описание</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({ ...newProduct, purpose: event.target.value })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Категория</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({ ...newProduct, image: event.target.value })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Изображение</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              onChange={(event) =>
                setNewProduct({ ...newProduct, price: event.target.value })
              }
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Цена</label>
          </div>
          <button type="submit" className="btn_custom">
            ДОБАВИТЬ
          </button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
