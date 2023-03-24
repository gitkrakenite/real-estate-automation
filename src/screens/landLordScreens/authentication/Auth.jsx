import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../../components/landlord/Login";
import Register from "../../../components/landlord/Register";

const Auth = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div>
          {/* form */}
          <div>{show ? <Login /> : <Register />}</div>

          {/* options */}
          <div className="w-[90%] m-auto">
            {show ? (
              <div className="flex gap-[1em] mt-[1em] items-center justify-end text-md">
                <div className=" p-[10px]">
                  <p>
                    New Here ?{" "}
                    <span
                      className="text-[#19A7CE]"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow(!show)}
                    >
                      Create Account
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    Go back to{" "}
                    <Link to="/">
                      <span
                        className="text-[#19A7CE]"
                        style={{
                          fontWeight: 700,
                          letterSpacing: "1px",
                          cursor: "pointer",
                        }}
                      >
                        home screen ?
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-[1em] mt-[1em] items-center justify-start">
                <div className=" p-[10px]">
                  <p>
                    Already a member ?{" "}
                    <span
                      className="text-[#19A7CE]"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow(!show)}
                    >
                      Log in
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    Go back to{" "}
                    <Link to="/">
                      <span
                        className="text-[#19A7CE]"
                        style={{
                          fontWeight: 700,
                          letterSpacing: "1px",
                          cursor: "pointer",
                        }}
                      >
                        home screen ?
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
