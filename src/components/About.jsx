import React from "react";
import {useState} from "react"
import "../App.css";
export default function About() {
  const [about,setAbout]=useState([]);
  return (
    <div className="">
      <p className="labelpark-text">
        <span className="l-t">LABEL PARK</span> is one of the leading manufacturer and exporters of bar code
        Labels, multicolor labels, Hot foil sticker, self-adhesive labels,etc
        for all applications which includes garment industry,
        breweries,cosmetics,food & beverages,pharmaceuticaryls and automobile
        industry. Since its inception, the company’s prime focus is to
        manufacture superior quality products as per specific customer’s
        requirements. For the past ten years. We manufacture high-quality labels
        and sticker for customers from different industries. We listen closely
        to the needs of our customers and partners, which enable us to provide
        the most cost effect solution for every job. We maximize our production
        efficiency, bringing down our operational costs and giving the benefit
        to customer’s quality products at competitive prices. Distributor and
        service providers of printing equipment’s which includes industrial
        barcode printers, Commercial Printers, Receipt Printers, Hands free,
        Wireless Scanners and Thermal Transfer Ribbons.
      </p>
    </div>
  );
}
