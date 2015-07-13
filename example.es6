import React from 'react';
import TabView from './index.es6';
import ImageCaption from '@economist/component-imagecaption';

var child = {
  caption: "First caption",
  src: "http://lorempixel.com/g/300/169/food",
  href: "http://www.google.com"
};


export default (
  <TabView>
        <div title="Politics">
        <div className="TabView--Views--Tint"></div>
          <a href="#">
           <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/cats"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/people"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/city"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/fashion"/>
              <figcaption>this is the caption</figcaption>
            </figure>
         </a>
        </div>
        <div title="Business & Economics">
        <div className="TabView--Views--Tint"></div>
         <a href="#">
           <figure className="TabView--View--Content">
             <img src="http://lorempixel.com/g/300/169/food"/>
             <figcaption>this is the caption</figcaption>
           </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/nightlife"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/sports"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/nature"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
        </div>
        <div title="Science & technology">
        <div className="TabView--Views--Tint"></div>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/transport"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/abstract"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/technics"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/cats"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
        </div>
        <div title="History">
        <div className="TabView--Views--Tint"></div>
         <a href="#">
          <figure className="TabView--View--Content">
            <img src="http://lorempixel.com/g/300/169/nightlife"/>
            <figcaption>this is the caption</figcaption>
          </figure>
         </a>
         </div>
         </TabView>
);

