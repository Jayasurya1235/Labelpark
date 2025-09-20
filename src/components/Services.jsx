import React from "react";
import { useState } from "react";
import "../App.css";
export default function Services() {
  const [service, setService] = useState([]);
  return (
    <div className="">
      
      <p className="labelpark-text">
        <span className="l-t">Service AMC</span> : Annual Maintenance Contract
        is used to protect the printer investment along with printer downtime
        and repair costs. AMC is a contract that provides quality, post-warranty
        authorized service for printers of brands like CITIZEN, POSTEK, and TSC
        thermal transfer barcode printers. . The AMC includes services of
        original spare parts, print heads, PCBs, thermal transfer ribbons and
        die cut labels. AMC provides replacement of defective or worn out parts
        by new original parts and also has provision for a compatible stand-by
        printer if required. Technical Support Excellent pre-sales and
        after-sales technical support & service. Installation of products and
        training of operators. Repairs, Maintenance and cleaning instructions.
        Onsite support during warranty period. Free On line support through
        internet.
      </p>
    </div>
  );
}
