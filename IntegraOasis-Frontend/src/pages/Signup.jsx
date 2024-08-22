import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/signup", {
        name,
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/otp");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Signup">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <Tabs defaultValue="log" className="w-full max-w-xl mx-auto ">
        <TabsList className="flex items-center justify-center p-6">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent
          value="signup"
          className="flex flex-col items-center justify-center p-6 gap-3"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3">
              <Label htmlFor="name" className="text-center">
                Enter name:
              </Label>
              <Input
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="email" className="text-center">
                Enter email:
              </Label>
              <Input
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="username" className="text-center">
                Create username:
              </Label>
              <Input
                id="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="password" className="text-center">
                Create password:
              </Label>
              <Input
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Button type="submit">Signup</Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Signup;
