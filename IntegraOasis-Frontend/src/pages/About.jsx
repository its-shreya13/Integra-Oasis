import React from "react";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "../sharedcomp/Footer";

function About() {
  return (
    <div className="About">
      <Header />
      <div className="flex items justify-center">
        <img className="h-[200px] w-[400px]" src="images/headingn.jpg" />
      </div>
      <div className="flex items justify-center">
        <Card className="w-[1000px] h-[200px] mx-3 my-5">
          <CardContent>
            <p className="font-['Georgia'] text-[18px] mx-4 my-4 text-justify">
              <b>Integra Oasis</b> is an e-commerce platform that facilitates
              users to Buy, Learn and Resell from Small scale and Handicraft
              businesses. Every business is provided with a dedicated page to
              showcase their products and contact information. Integra Oasis has
              a simple yet user friendly interface enabling a smooth shopping
              experience. Users can post used products to be sold in the Resell
              section and can also buy as per their requirement. We aim at
              promoting small scale businesses and local craftsmen and ensure
              that their talent reaches a larger audience.
              <br />
              Integra Oasis also provides a Learning feature where in users can
              learn the craft directly from the source itself.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex items justify-center">
        <div className="text-[50px] font-['Rage'] text-[#052747] text-center">
          FAQs
        </div>
      </div>
      <div className="flex items justify-center">
        <Accordion type="single" collapsible className="w-[600px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I sell used items on resell?
            </AccordionTrigger>
            <AccordionContent>
              Yes. You can buy and sell used and second hand items on resell.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Does it promote small scale businesses?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We aim on promoting small scale and handicraft businesses by
              giving them personal platforms to show case their products and
              skills.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How to use the learn feature?</AccordionTrigger>
            <AccordionContent>
              Go to Learn option in the bottom navigation bar. Visit any
              businesses of your choice, browse through their skill learning
              programs and workshops. Choose the one that suits you best, add to
              cart, make the payment and Voila!!,you can now learn from the best itself.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default About;
