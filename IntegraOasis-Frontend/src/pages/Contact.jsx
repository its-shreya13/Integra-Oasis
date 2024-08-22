import React, { useState } from "react";
// import { Widget, addResponseMessage } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";
import { Card, CardContent } from "@/components/ui/card";

function Contact() {
//   const ChatBot = () => {
//     const [messages, setMessages] = useState([]);

//     const handleNewUserMessage = (newMessage) => {
//       console.log(`New message incoming! ${newMessage}`);

//       // Process the message and determine a response
//       const response = getBotResponse(newMessage);

//       // Add the response message
//       addResponseMessage(response);
//     };

//     const getBotResponse = (message) => {
//       // Define simple responses for demonstration purposes
//       const responses = {
//         hi: "Hello! How can I assist you today?",
//         hello: "Hi there! How can I help you?",
//         help: "Sure, what do you need help with?",
//         shipping: "Our standard shipping time is 5-7 business days.",
//         price:
//           "The price depends on the product. Can you specify which product?",
//         return: "You can return any product within 30 days of purchase.",
//         default:
//           "I am sorry, I do not understand your question. Can you please rephrase it?",
//       };

//       return responses[message.toLowerCase()] || responses["default"];
//     };
//   };
  return (
    <div className="Contact">
      <Header />
      <div className="flex items justify-center">
        <img className="h-[200px] w-[400px]" src="images/headingn.jpg" />
      </div>
      <Nav />
      <div className="flex items justify-center">
        <Card className="w-[1000px] h-[200px] mx-3 my-5">
          <CardContent>
            <p className="font-['Georgia'] text-[18px] mx-4 my-4 text-justify">
              E-mail for any queries : <br/>
              integraoasis.s3t@gmail.com<br/><br/>
              Chat with us :
            </p>
            <Button className="ml-4 bg-[#052747] text-white"><Link>Chat</Link></Button>
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
