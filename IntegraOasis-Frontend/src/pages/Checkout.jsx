import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping_address = {
      first_name: formData.fname,
      last_name: formData.lname,
      address: formData.address,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postcode: formData.pincode,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(formData.totalAmount) * 100,
      currency: "INR",
      name: "Web Mastery",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          address: "",
          country: "",
          city: "",
          state: "",
          pincode: "",
          totalAmount: "",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("myValue");
    setFormData({ totalAmount: storedValue || "" });
  }, []);

  return (
    <div className="flex container d-flex items-center justify-center h-screen">
      <div className="card p-4 shadow-lg" style={{ width: "60%" }}>
        <Button className="mt-3 mr-[550px] h-[40px] w-[40px] bg-[#052747]">
          <Link to="/cart">
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
        <h2 className="mb-4 text-center text-[30px] font-['Georgia'] text-[#052747]">
          Add Address
        </h2>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center"
          style={{ flexDirection: "column" }}
        >
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <Input
                  type="number"
                  className="form-control"
                  placeholder="Mobile"
                  name="mobile"
                  minLength={10}
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <Input
                type="number"
                className="form-control"
                placeholder="Total Amount"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                required
                readOnly
              />
            </div>
          </div>
          <div className="flex items justify-center">
            <Button type="submit" className="text-white bg-[#052747]">
              Checkout
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
