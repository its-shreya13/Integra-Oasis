import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Passchange() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/forgot-password", {
        email,
      })
      .then((result) => {
        console.log(result);
        navigate("/resetotp");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Passchange">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-3">
          <Label className="text-[20px]" htmlFor="email">
            Enter your registered e-mail id
          </Label>
          <Input
            id="email"
            type="email"
            className="form-control w-1/3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center gap-3 mt-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Passchange;
