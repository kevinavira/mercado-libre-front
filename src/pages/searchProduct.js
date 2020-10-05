import React, { Component } from 'react';
import logo from '../images/logo_mercadolibre.png';
import logoseach from '../images/editfind_104370.png';
import { Redirect } from 'react-router-dom'

class searchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    const name = document.getElementById("input-search").value;
    const url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + name

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.results, flag: true })

      })

  }

  render() {
    console.log(this.state.data);
    return (
      <div className="c-y p-search">
        <div className="container">

          <div className="row">

            <div className="col-sm col-md-3 div-image-mercado-libre">
              <img className="format-img-meracado-libre" src={logo} alt="Responsive image" />
            </div>
            
            <div className="col-sm col-md-7 center-input">
              <input id="input-search" type="text" className="form-control input-search" placeholder="Nunca dejes de buscar" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group-append image-search">
              <button className="btn btn-outline-secondary style-button-search" type="button" onClick={this.handleSubmit} >
                <img src={logoseach} alt="Responsive image" />
              </button>
              
              {
                this.state.flag ? <Redirect
                  to={{
                    pathname: "/items/search=",

                    state: { data: this.state.data }
                  }}
                /> :
                  null
              }

            </div>
            
          </div>
          
        </div>

      </div>

    );
  }
}

export default searchProduct;