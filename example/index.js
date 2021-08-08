import React from "react";
import ReactDOM  from "react-dom";
import slides from "./slides.js";
import Carousel from '../src/Carousel/Carousel.jsx';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(< Carousel slides={slides} /> , container);

