import React, { useEffect, useState } from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { register, reset } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
// import Spinner from "../Spinner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  //   const { user, isLoading, isError, isSuccess, message } = useSelector(
  //     (state) => state.auth
  //   );

  //   useEffect(() => {
  //     if (isError) {
  //       toast.error("Error occurred" + message);
  //     }

  //     if (isSuccess || user) {
  //       toast.success("Welcome!");
  //       navigate("/landing");
  //     }

  //     dispatch(reset());
  //   }, [user, isError, isSuccess, message, navigate, dispatch]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setCategory("farmer");
  //     if (!name || !category || !email || !password) {
  //       toast.error("All details needed");
  //       return;
  //     } else {
  //       try {
  //         const userData = { name, email, category, password };
  //         dispatch(register(userData));
  //         // toast.success("Welcome to connect");
  //       } catch (error) {
  //         toast.error("An error occurres" + message);
  //         alert("Registration failed");
  //       }
  //     }
  //   };

  return (
    <div className=" pl-[10px] md:pl-[1em] pr-[10px] md:pr-[1em] mt-[10px] md:mt-[4em] ">
      <div className="flex justify-center items-center bg-slate-100 pt-[50px] pb-[50px]">
        <div className=" flex-[1] lg:flex-[0.5]">
          <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
            GET STARTED FOR FREE
          </h3>
          <h4 className="text-lg mb-[20px]">Create new account</h4>
          <div>
            <form className="flex flex-col gap-[20px]">
              {/* name */}
              <div className="flex p-[10px] mr-[20px]  items-center justify-between bg-slate-200 rounded-xl">
                <div className=" flex-[0.9] flex flex-col gap-[6px] ">
                  <label
                    htmlFor="name"
                    className=""
                    style={{ letterSpacing: "1px", fontWeight: 600 }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="bg-transparent outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <MdOutlineAccountBalanceWallet className="text-2xl" />
                </div>
              </div>
              {/* email */}
              <div className="flex p-[10px] mr-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="email" style={{ fontWeight: 600 }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-transparent outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <AiOutlineMail className="text-2xl" />
                </div>
              </div>
              {/* password */}
              <div className="flex p-[10px] mr-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="password" style={{ fontWeight: 600 }}>
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Create password"
                    required
                    id="password"
                    className="bg-transparent outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  {show ? (
                    <AiOutlineEyeInvisible
                      className="text-2xl cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-2xl cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  )}

                  {/* < /> */}
                </div>
              </div>
              {/* {isLoading ? (
                <Spinner message="Please Wait" />
              ) : (
                <button
                  type="submit"
                  className="bg-green-700 mr-[20px] p-[10px] text-slate-200 rounded-lg"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              )} */}
              <button
                type="submit"
                className="bg-[#146C94] mr-[20px] p-[10px] text-slate-200 rounded-lg"
                // onClick={handleSubmit}
              >
                Create Account
              </button>
              <p>
                By creating an Account you agree to our{" "}
                <span className="text-[#146C94] cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </form>
          </div>
        </div>
        <div className=" hidden lg:flex flex-[0.4] ">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-lg"
            />

            <div className=" transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] rounded-lg" />
              <div className="absolute w-full h-full bottom-[8px] left-[16px]  pl-[1em] pr-[1em] flex flex-col justify-end text-white">
                {/* content */}
                <p className="text-lg">
                  Manage all your properties in one platform. Enjoy offers and
                  most of all real time feedback and 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
