import React, { useEffect, useState } from 'react';
import SearchProduct from '../pages/searchProduct';
import { useLocation } from "react-router-dom";



function Page3() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [dataDescription, setDataDescription] = useState([]);
  useEffect(() => {
    const id = location.state;
    console.log("entro")
    console.log(location.state)
    console.log("entro")


    const url = 'https://api.mercadolibre.com/items/' + id.id
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      const url2 = 'https://api.mercadolibre.com/items/' + id.id + "/description"
      fetch(url2)
      .then(res => res.json())
      .then(data2 => {
        console.log("data2",data2)
        setDataDescription(data2)
      })

  }, [location.state]);

  return (
    
    <div>
      <SearchProduct />
      <div className="col-md-12 ">
        <div class="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-7 b-w">
            <div className="col-md-12 b-w p-r-p">
              <div class="row">
                <div className="col-md-8">

                  <img src={data.thumbnail} className="image-resut-detail pointer-image" alt="Imagen" />
                </div>
                <div className="col-md-4">
                  <div class="row">
                    <div class="col-6 col-sm-12 span-sold"><span className="fz-14 color-sold">Nuevo - {data.sold_quantity} Vendidos</span></div>
                    <div class="col-6 col-sm-12 p-r-p"> <span className="fz-24 color-title" ><h3>{data.title}</h3></span> </div>
                    <div class="col-6 col-sm-12 p-r-p "> <span className="fz-24 color-title" ><h3>$ {data.price}</h3></span> </div>
                    <div class="col-6 col-sm-12 p-r-p ">  <button type="button" class="btn btn-primary w-100 button-buy">Comprar</button></div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-sm-12 description-separate">
              <span className="fz-28">Descripción del producto</span>
            </div>
            <div className="col-sm-8 description-separate-left">
              <span className="fz-16 color-description-gray">
                <h10>{dataDescription.plain_text}</h10> 
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;