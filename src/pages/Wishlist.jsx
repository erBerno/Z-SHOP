import React from "react";
import { SectionTitle, WishItem } from "../components";
import { useDispatch, useSelector } from "react-redux";


const Wishlist = () => {
    const { wishItems } = useSelector((state) => state.wishlist); 
    const dispatch = useDispatch();
  return (
    <>
      <SectionTitle title="Lista de Deseados"  />
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-accent-content">Producto</th>
                <th className="text-accent-content">Talla</th>
                <th className="text-accent-content">Acción</th>
              </tr>
            </thead>
            <tbody>
              { wishItems.map((item, index) => (
                <WishItem item={item} key={index} counter={index} />
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
