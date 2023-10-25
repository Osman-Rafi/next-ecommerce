"use client";
import { IUser } from "./types";
import Toastify from "../../components/Toastify";

import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState<IUser>({
    userName: null,
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`/api/user/register`, user);
    Toastify.showServerResponse(data);
    if (data.success) {
      setUser({
        userName: null,
        email: null,
        password: null,
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-10 text-center text-xl font-bold">Sign Up</h1>
        <input
          required
          className="block border-2 border-slate-500 rounded mb-4"
          type="text"
          value={user.userName || ""}
          placeholder="Choose an user name"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
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
          <button
            disabled={loading}
            type="submit"
            className="mt-10 bg-orange-400 p-2 rounded"
          >
            {!loading ? "Sign up" : "Processing..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
