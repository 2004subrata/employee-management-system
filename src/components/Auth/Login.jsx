import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);

    setEmail('');
    setPassword('');
  };  

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white bg-transparent outline-none border-2  border-emerald-600 py-3 px-5 text-lg font-medium rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white bg-transparent outline-none border-2 border-emerald-600 py-3 px-5 text-lg font-medium rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 py-2 px-8 w-full text-xl rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
