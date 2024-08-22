import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";
import axios from "axios";

function SilkyT() {
  const handleAddToCart = async (
    productId,
    name,
    description,
    image,
    price,
    quantity
  ) => {
    const userId = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage
    try {
      const response = await axios.post("http://localhost:3000/api/cart/add", {
        userId,
        productId,
        name,
        description,
        image,
        price,
        quantity,
      });
      console.log("Item added to cart:", response.data);
      alert("Item added to cart");
    } catch (err) {
      console.error("Error adding item to cart:", err);
    }
  };

  return (
    <div className="Resell">
      <Header />
      <div className=" bg-cyan-100 text-[50px] font-['Rage'] text-[#052747] text-center">
        Silky Tassels
      </div>
      <div className=" bg-cyan-100 text-[35px] font-['Rage'] text-[#052747] text-center">
        By Aarushi
      </div>
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Blue)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit1",
                  "Double Ikkat (Blue)",
                  "3 piece set",
                  "images/dikkat1.jpg",
                  2000.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Blue)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit4",
                  "Ikkat on Cotton (Blue)",
                  "3 piece set",
                  "images/ikkat1.jpg",
                  1800.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south1.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Blue)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit7",
                  "South Cotton (Blue)",
                  "3 piece set",
                  "images/south1.jpg",
                  1600.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Green)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit2",
                  "Double Ikkat (Green)",
                  "3 piece set",
                  "images/dikkat2.jpg",
                  2000.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Green)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit5",
                  "Ikkat on Cotton (Green)",
                  "3 piece set",
                  "images/ikkat2.jpg",
                  1800.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south2.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Red)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit8",
                  "South Cotton (Red)",
                  "3 piece set",
                  "images/south2.jpg",
                  1600.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex items justify-center">
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/dikkat3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Double Ikkat (Maroon)</b>
            </h1>
            <p>
              A pattern with same colour scheme in shirt, dupatta and pant but
              with different ikkat patterns and borders.
              <br />
              Pure cotton ikkat shirt 2.5mtr, bottom 2.5mtr and dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹2000.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit3",
                  "Double Ikkat (Maroon)",
                  "3 piece set",
                  "images/dikkat3.jpg",
                  2000.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/ikkat3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>Ikkat on Cotton (Purple)</b>
            </h1>
            <p>
              Introducing the most light weight cotton on double ikkat pattern.
              <br />
              Summer friendly, bright colours.
              <br />
              Ikkat cotton shirt 2.5mtr, plain cotton bottoms 2.5mtr, double
              ikkat cotton dupatta 2.5mtr
            </p>
            <h1 className="text-[22px]">
              <b>₹1800.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit6",
                  "Ikkat on Cotton (Purple)",
                  "3 piece set",
                  "images/ikkat3.jpg",
                  1800.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[300px] h-[600px] mx-6 my-5">
          <CardContent>
            <img
              src="images/south3.jpg"
              className="flex items-center justify-center h-[300px] w-[250px] mb-3 mt-6 rounded"
            />
            <h1 className="text-[20px]">
              <b>South Cotton (Grey)</b>
            </h1>
            <p>
              Extremely breathable fabric, lightweight, bright summer colour
              suits in PURE south cotton with Mangalagiri borders.
              <br />3 Piece set, 2.5mtr each fabric with Mangalagiri borders
            </p>
            <h1 className="text-[22px]">
              <b>₹1600.00</b>
            </h1>
            <Button
              className="bg-[#052747] text-white ml-[160px] my-3"
              onClick={() =>
                handleAddToCart(
                  "suit9",
                  "South Cotton (Grey)",
                  "3 piece set",
                  "images/south3.jpg",
                  1600.0,
                  1
                )
              }
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex items justify-center">
        <img
          src="images/silky.jpg"
          className="flex items-center justify-center h-[250px] w-[400px] mx-5 my-5"
        />
        <img
          src="images/tassels.jpg"
          className="flex items-center justify-center h-[250px] w-[400px] mx-5 my-5"
        />
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default SilkyT;
