import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigatel = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userId", result.data.userId);

          navigatel("/in");
        } else {
          navigatel("/signup");
          alert("You are not registered to this service, kindly signup first.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <header className="flex items justify-center mb-2 ">
        <img src="images/headingn.jpg" />
      </header>
      <Tabs defaultValue="log" className="w-full max-w-xl mx-auto ">
        <TabsList className="flex items-center justify-center p-6">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent
          value="signin"
          className="flex flex-col items-center justify-center p-6 gap-3"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="username" className="text-center">
                Username
              </Label>
              <Input
                id="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Label htmlFor="password" className="text-center">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Link className="links" to="/passchange">
                Forgot password?
              </Link>
              <Link className="links" to="/signup">
                Don't have an account? Sign up
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
