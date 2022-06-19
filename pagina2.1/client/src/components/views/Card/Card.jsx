
  import React from "react";
  import PropTypes from "prop-types";
  import Axios from "axios";
  import './Card.css'; 
  import { Redirect, useHistory } from "react-router-dom";
  
  function Card ({ imageSource, title, text, url, setOpen }) {
    const history = useHistory()
    return (
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
          <button variant = 'text' color = 'inherit'onClick={() => {
                    history.push('/calculator')}}>
            Ingresa!
          </button>
         
        </div>
        
      </div>
    );
  }

  

export default Card