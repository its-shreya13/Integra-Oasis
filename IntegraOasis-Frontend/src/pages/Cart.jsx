import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../sharedcomp/Header";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/cart/${userId}`
        );
        setCart(response.data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [userId]);

  const totalprice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = async (productId) => {
    try {
      const result = await axios.post("http://localhost:3000/api/cart/remove", {
        productId,
        userId,
      });
      setCart(result.data);
    } catch (err) {
      console.error("Error removing item from cart:", err.message);
      alert("Error removing item from cart");
    }
  };
  const handleSave = () => {
    const valueToSave = totalprice;
    localStorage.setItem('myValue', valueToSave);
    navigate("/checkout");
  };

  return (
    <div className="Cart">
      <Header />
      <div className="flex text-[#052747] text-[50px] font-['Rage'] items justify-center">
        <Button className="mt-3 mr-[550px] h-[40px] w-[40px] bg-[#052747]">
          <Link to="/in">
            <svg
              className="flex w-9 h-9 mb-2 text-white dark:text-white group-hover:text-gray-500 items justify-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 22"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
        </Button>
        <h1 className="mr-[590px]">Shopping Bag</h1>
      </div>

      <ul>
        {cart.items.map((item) => (
          <li key={item.productId} className="flex items justify-center">
            <Card className="w-[600px] h-[200px] mx-4 my-2">
              <CardContent>
                <div className="flex items justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="flex items-center justify-center h-[180px] w-[250px] my-3 mx-4 rounded"
                  />
                  <Card className="w-[250px] h-[180px] mx-4 my-3">
                    <CardContent>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <p>Price: ₹{item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                      <Button
                        className="bg-[#052747] text-white ml-[130px] mt-[30px]"
                        onClick={() => handleRemoveFromCart(item.productId)}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <div className="fixed w-full h-[60px] bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 bottom-0">
        <div className="flex items justify-center">
          <h1 className="fixed text-[#052747] text-[30px] left-[10px]">
            <b>Total : ₹{totalprice.toFixed(2)}</b>
          </h1>
          <Button onClick={handleSave} className="fixed w-[240px] h-[50px] bg-[#052747] gap-x-3 mt-1 mr-1 right-[10px]">
            
              Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
