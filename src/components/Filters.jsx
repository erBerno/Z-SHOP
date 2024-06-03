import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "Todos",
    "Zapatos",
    "Poleras",
    "Chaquetas",
    "Gorros",
    "Pantalones",
    "Jeans",
    "Calcetines",
    "Cinturones"
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "Todos",
    "WALK LONDON",
    "Reebok",
    "Nike",
    "Jack & Jones",
    "Crocs",
    "Vans",
    "Puma",
    "New Balance",
    "Tommy Jeans",
    "Tommy Hilfiger",
    "Bershka",
    "New Look",
    "AllSaints",
    "Columbia",
    "The North Face",
    "Collusion",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Buscar Producto"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Categorias"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Marcas"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="Ordenar Por"
        name="order"
        list={["Cualquiera", "Precios más Altos", "Precios más Bajos"]}
        size="select-sm"
        defaultValue="Cualquiera"
      />
      {/* Producer */}
      <FormSelect
        label="Genero"
        name="gender"
        list={["Cualquiera", "Hombre", "Mujer"]}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="Rango de Precios"
        size="range-sm"
        price={2000}
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        BUSCAR
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        RESTABLECER
      </Link>
    </Form>
  );
};

export default Filters;
