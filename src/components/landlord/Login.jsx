import React, { useEffect, useState } from "react";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { login, reset } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
// import Spinner from "../Spinner";

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const { user, isLoading, isError, isSuccess, message } = useSelector(
  //     (state) => state.auth
  //   );

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!email || !password) {
  //       toast.error("All details needed");
  //       return;
  //     } else {
  //       try {
  //         const userData = { email, password };
  //         dispatch(login(userData));
  //         // toast.success("Welcome to connect");
  //       } catch (error) {
  //         toast.error("Invalid credentials");
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     if (isError) {
  //       toast.error("Invalid credentials: " + message);
  //     }

  //     if (isSuccess || user) {
  //       toast.success("Welcome!");
  //       navigate("/landing");
  //     }

  //     dispatch(reset());
  //   }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="pl-[10px] md:pl-[1em] pr-[10px] md:pr-[1em] mt-[10px] md:mt-[4em] ">
      <div className="flex justify-center items-center bg-slate-100 pt-[50px] pb-[50px]">
        {/* img side */}
        <div className=" hidden lg:flex flex-[0.4] ">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/14348416/pexels-photo-14348416.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-lg"
            />

            <div className=" transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] rounded-lg" />
              <div className="absolute w-full h-full bottom-[8px] left-[16px]  pl-[1em] pr-[1em] flex flex-col justify-end text-white">
                {/* content */}
                <p className="text-lg">
                  The number one platform for farmers. Join our community for
                  all your needs. Learn from the experts, sell your products
                  directly to customers and so much more
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* form side */}
        <div className=" flex-1 md:flex-[0.5]">
          <h3 className="text-xl  ml-[20px]">PICK UP WHERE YOU LEFT OFF</h3>
          <h4 className="text-lg mb-[20px]  ml-[20px]">SIGN IN NOW</h4>
          <div>
            <form className="flex flex-col gap-[20px]">
              {/* email */}
              <div className="flex p-[10px] ml-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-transparent outline-none"
                    maxLength={30}
                    minLength={5}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <AiOutlineMail className="text-2xl" />
                </div>
              </div>
              {/* password */}
              <div className="flex p-[10px]  ml-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="password">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Create password"
                    required
                    id="password"
                    className="bg-transparent outline-none"
                    maxLength={30}
                    minLength={5}
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
                  className="bg-green-700  ml-[20px] p-[10px] text-slate-200 rounded-lg"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              )} */}
              <button
                type="submit"
                className="bg-green-700  ml-[20px] p-[10px] text-slate-200 rounded-lg"
                //   onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
