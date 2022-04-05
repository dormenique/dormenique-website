import React from "react";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

export default function Homepage() {
  return (
    <div>
      <Card /* arrow display *only* when is not on Profile's page, to go back to the other ones*/
      />
      <Footer />
    </div>
  );
}
