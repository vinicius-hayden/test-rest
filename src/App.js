import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";
import IPhoneCard from "./components/IPhoneCard";
import AltHeader from "./components/AltHeader";

export default function App() {

 const [products, handleProduct] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((serverResponse) => {
        return serverResponse.json();
      })
      .then((serverResponseJSON) => {
        handleProduct(serverResponseJSON);
      })

  }, []);

  return (
    <>
      <AltHeader/>
      <Header/>
      <IPhoneCard></IPhoneCard>
      <br/>
      <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        {products.map( (product, key) => 
          <div className="p-2" key={key}>
            <Card key={product.id} title={product.title} description={product.description} 
             subdescription={product.subdescription} image={product.image} alt={product.alt}>
            </Card>
          </div>
          )}
      </div>
      </div>
    </>
  );
}