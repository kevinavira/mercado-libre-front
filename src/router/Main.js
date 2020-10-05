import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import  SearchProduct from '../pages/searchProduct';
import DetailProduct from '../pages/detailProduct';
import SearchResult from '../pages/searchResult';
import 'bootstrap/dist/css/bootstrap.css';



function Main(props) {
  return (
    <HashRouter>
      <Route exact path="/" ><SearchProduct /></Route>
      <Route exact path="/items/search=" render={(props) => <SearchResult {...props}   />}  />
      <Route exact path="/items/:id"><DetailProduct  {...props}/></Route>
    </HashRouter>
  );
}

export default Main;