import React, { useEffect, useState } from 'react';
import SearchProduct from '../pages/searchProduct';
import carGreen from '../images/ic_shipping.png';
import { useLocation } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

function Page2() {
  const [datos, setDatos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [idProduct, setIdProduct] = useState(null);
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    if (location.state) {
      setDatos(location.state.data);
    }
  }, []);

  function dateDescription(e) {
    setIdProduct(e)
    history.push({
      pathname: "/items/:id",
      state: { id: e }
    })
  }


  return (

    <div >
      <SearchProduct />
      <div className=" col-md-12">
        <div className="row">

          <div className="col-md-2">

          </div>
          <div className="col-md-7">

            <div className="ol-md-12 conten-results">
              <span>electronica,audio>video>ipod>reproductores>32 GB</span>
            </div>
            {datos.map(data => (
              <div className="col-md-12 b-w p-r-p">
                <div class="row">
                  <div className="col-md-3">
                    <img className="image-resut-search pointer-image" src={data.thumbnail} alt="Imagen" onClick={() => dateDescription(data.id)} />
                  </div>
                  <div className="col-md-8 separate-image">
                    <div class="row">
                      <div class=" col-sm-8 separate-top"><span className="fz-24 pointer-image">$ {data.price}</span> <img className="img-car-green" src={carGreen} ></img> </div>
                      <div class="col-6 col-sm-4 aling-city" ><span className="fz-12 c-g">{data.address.city_name}</span></div>
                      <div class="w-100"></div>
                      <div class="col-6 col-sm-8 separate-price "><span className="fz-18" onClick={dateDescription}>{data.title}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
            {
              flag ? <Redirect
                to={{
                  pathname: "/items/:id",

                  state: { id: idProduct }
                }}
              /> :
                null
            }
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;