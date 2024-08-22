import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";

function Buy() {
  return (
    <div className="Buy">
      <Header />
      <Nav />
      <div className="flex flex-col items justify-center">
        <Card className="w-[950px] h-[410px] mx-6 mt-5">
          <CardContent>
            <div className="flex items justify-center">
              <img
                src="images/silky.jpg"
                className="flex items-center justify-center h-[200px] w-[400px] mx-4 my-3"
              />
              <img
                src="images/ikkat1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
              <img
                src="images/dikkat1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
              <img
                src="images/south1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
            </div>
            <h1 className="text-[25px] font-['Georgia']">
              Silky Tassels By Araushi
            </h1>
            <p className="font-['Georgia']">
              Silky Tassels offers a wide range of suit materials in different
              fabrics, colours and designs. These suit materials are suitable
              for various occassions may it be dazzling a festive occassion or
              casual everyday wear.The materials are authentic and pure, giving
              them their light weight and breathable structure. Silky Tassels
              delivers you these elegant bundles all over India. Visit the store
              the view the collection ...
            </p>

            <Button className="bg-[#052747] text-white ml-[850px] mb-5">
              <Link to="/site1">Visit</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[950px] h-[410px] mx-6 mt-5">
          <CardContent>
            <div className="flex items justify-center">
              <img
                src="images/silky.jpg"
                className="flex items-center justify-center h-[200px] w-[400px] mx-4 my-3"
              />
              <img
                src="images/ikkat1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
              <img
                src="images/dikkat1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
              <img
                src="images/south1.jpg"
                className="flex items-center justify-center h-[200px] w-[200px] mx-4 my-3"
              />
            </div>
            <h1 className="text-[25px] font-['Georgia']">
              Silky Tassels By Araushi
            </h1>
            <p className="font-['Georgia']">
              Silky Tassels offers a wide range of suit materials in different
              fabrics, colours and designs. These suit materials are suitable
              for various occassions may it be dazzling a festive occassion or
              casual everyday wear.The materials are authentic and pure, giving
              them their light weight and breathable structure. Silky Tassels
              delivers you these elegant bundles all over India. Visit the store
              the view the collection ...
            </p>

            <Button className="bg-[#052747] text-white ml-[850px] mb-5">
              <Link to="/site1">Visit</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Buy;
