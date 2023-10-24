"use client";
import { useState } from "react";

interface UserInterface {
  email: string | null;
  password: string | null;
}

const Login = () => {
  const [user, setUser] = useState<UserInterface>({
    email: null,
    password: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-10 text-center text-xl font-bold">Sign In</h1>
        <input
          required
          className="block border-2 border-slate-500 rounded mb-4"
          type="email"
          value={user.email || ""}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          required
          className="block border-2 border-slate-500 rounded"
          type="password"
          value={user.password || ""}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="flex justify-center">
          <button type="submit" className="mt-10 bg-orange-400 p-2 rounded">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
