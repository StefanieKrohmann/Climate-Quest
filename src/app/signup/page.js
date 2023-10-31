"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
const Signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [buttonDisabled, setDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const onSignup = async () => {
    setError("");
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/home");
    } catch (e) {
      toast.error(e.message);
      setError(e.response.data);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.password.length >= 3 && user.username.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#537749",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="sm:text-6xl text-2xl font-bold">Climate quest</div>
      <div className="h-14 w-fit flex mt-20">
        <div className="h-14 flex justify-center items-center px-6 sm:text-3xl font-bold text-white bg-[#537749] border-2 border-black border-r-0">
          Username
        </div>
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="h-14 sm:w-80 px-2 border-2 border-black focus:border-2 focus:rounded-none"
        />
      </div>
      <div className="mt-1 sm:ml-40 text-red-600">{error && error?.error+"!"}</div>
      <div className="h-14 w-fit flex mt-4">
        <div className=" h-14 flex justify-center items-center px-6 sm:text-3xl font-bold text-white bg-[#537749] border-2 border-black border-r-0">
          Password
        </div>
        <input
          value={user.password}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="h-14 sm:w-80 px-2 border-2 border-black focus:border-2 focus:rounded-none"
        />
      </div>

      <div className="sm:mt-20 mt-6 text-center">
        <div
          onClick={() => {
            !buttonDisabled && onSignup();
          }}
          className={`h-14 ${
            buttonDisabled ? "disable text-gray-300" : "hover:cursor-pointer text-black"
          } w-[300px] custom-border m-auto flex justify-center items-center text-2xl font-bold`}
        >
          {
            loading ? (
              <PropagateLoader
                color={"#537749"}
                loading={true}
                cssOverride={override}
                size={8}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : "Register"
          }
          
        </div>
        <Link href={"/login"}>
          <div className="m-auto mt-6 underline text-xl font-bold hover:cursor-pointer">
            Already have an account?
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Signup;
