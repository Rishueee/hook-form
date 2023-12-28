import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registrationMessage, setRegistrationMessage] = React.useState("");

  const onSubmit = (data) => {
    setRegistrationMessage("Registration Successful!");
  };

  return (
    <>
      {registrationMessage && (
          <div className="registration-message">
            <p>{registrationMessage}</p>
          </div>
        )}
      <div className="cont">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="First name"
              {...register("name1", { required: "Input is empty" })}
            />
            <p>{errors.name1?.message}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              {...register("name2", { required: "Input is empty" })}
            />
            <p>{errors.name2?.message}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Input is empty",
                pattern: {
                  value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                  message: "Enter a valid email",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <input
              type="pass"
              placeholder="Password"
              {...register("pass", {
                required: "Input is empty",
                minLength: {
                  value: 4,
                  message: "Too Weak atleast 4 character",
                },
                maxLength: {
                  value: 20,
                  message: "Too Long",
                },
              })}
            />
            <p>{errors.pass?.message}</p>
          </div>
          <button type="submit" className="register">
            Register
          </button>
        </form>
      
      </div>
    </>
  );
}

export default App;
