import React from "react";
import Card from "../Card/Card";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const cards = [
  {
    id: 1,
    title: "Ingresa tus Datos",
    image: image1,
    url: "",
  },
  {
    id: 2,
    title: "Mira tus ejercicios",
    image: image2,
    url: "/rutinas"
  },
  {
    id: 3,
    title: "Grafica de progreso",
    image: image3,
    url: "",
  },
];

function Cards() {
  return (
    <div className="Cards">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;