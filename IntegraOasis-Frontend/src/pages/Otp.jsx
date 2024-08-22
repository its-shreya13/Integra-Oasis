import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Otp() {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/verify-otp", { otp })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/login");
          alert("Signin with your saved credentials");
        } else {
          navigate("/otp");
          alert("Incorrect Otp");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Login">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-3">
          <Label htmlFor="otp" className="text-center text-[25px]">
            One-Time Password
          </Label>
          <Input
            id="otp"
            className="form-control w-1/5"
            onChange={(e) => setOtp(e.target.value)}
          />
          <p>Please enter the one-time password sent to your email.</p>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Otp;
