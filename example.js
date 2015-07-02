import React from 'react';
import TabView from './';
import ImageCaption from './../component-imagecaption';

var child = {
  caption: "First caption",
  src: "http://lorempixel.com/g/300/169/food",
  href: "http://www.google.com"
};


export default (
  <TabView>
    <div title="Business & Finance">
    <div className="TabView--Views--Tint"></div>
    <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
    </div>
    <div title="Politics">
    <div className="TabView--Views--Tint"></div>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
    </div>
    <div title="Science & Technology">
    <div className="TabView--Views--Tint"></div>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
    </div>
    <div title="History">
    <div className="TabView--Views--Tint"></div>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
     <a href={child.href}>
         <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
    </a>
    </div>
  </TabView>
);

