import React, { useState } from "react";
import "./splash.css";
import { BiPhoneCall } from "react-icons/bi";
import { BsGearWideConnected, BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiOutlineLock,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Splash = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="pt-[1em] relative">
      {/* topbar */}
      <div className="flex justify-between items-center pb-[3em] w-[96%] lg:w-[90%] 2xl:w-[80%] m-auto ">
        {/* logo */}
        <div>
          <h2
            className=" hidden md:flex text-2xl cursor-pointer"
            style={{ fontWeight: 700 }}
          >
            KODI_ <span className="text-[#146C94]">KE</span>
          </h2>
        </div>
        {/* links */}
        <div className="hidden md:flex items-center justify-between gap-[3em]">
          <ul className="flex items-center gap-[20px]">
            <li className="listItem">PRICING</li>
            <li className="listItem">EDUCATION</li>
            <li className="listItem">FAQ</li>
          </ul>
          <ul className="flex items-center gap-[20px]">
            <li className="listItem">CONTACT US</li>
            <li className="listBtn">
              <Link to="/auth">SIGN UP</Link>
            </li>
          </ul>
        </div>

        {/* mobile links */}

        {!toggle && (
          <AiOutlineMenu
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
        {/* mobile links */}
        {toggle && (
          <div className="bg-zinc-200 absolute top-0 right-0 z-50 w-full h-[100vh] px-[1em] pt-[1em] md:hidden">
            <div className="flex justify-between">
              <div>
                <h2
                  className="text-2xl cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  KODI_ <span className="text-[#146C94]">KE</span>
                </h2>
              </div>
              <div>
                <AiOutlineClose
                  className="text-3xl cursor-pointer"
                  title="close"
                  onClick={() => setToggle(false)}
                />
              </div>
            </div>
            {/* links */}
            <div className="flex flex-col mt-[2em]  items-end justify-between  gap-[3em]">
              <ul className="flex flex-col items-end gap-[20px]  w-full">
                <div
                  className="w-full text-end pb-2"
                  style={{ borderBottom: "2px solid #19A7CE" }}
                >
                  <li className="listItem">PRICING</li>
                </div>
                <div
                  className="w-full text-end pb-2"
                  style={{ borderBottom: "2px solid #19A7CE" }}
                >
                  <li className="listItem">EDUCATION</li>
                </div>
                <div
                  className="w-full text-end pb-2"
                  style={{ borderBottom: "2px solid #19A7CE" }}
                >
                  <li className="listItem">FAQ</li>
                </div>
              </ul>
              <ul className="flex flex-col items-center gap-[20px] w-full">
                <div
                  className="w-full text-end pb-2"
                  style={{ borderBottom: "2px solid #19A7CE" }}
                >
                  <li className="listItem">CONTACT US</li>
                </div>

                <Link to="/auth" className="w-full text-center pb-2">
                  <div className="w-full text-center pb-2">
                    <li className="listBtn">GET STARTED</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* hero section */}
      <div className="flex justify-between w-[96%] lg:w-[90%] 2xl:w-[80%] m-auto ">
        {/* text side */}
        <div className=" flex-1 text-center lg:text-left lg:flex-[0.5]">
          <div
            className=" mb-[20px] xl:mb-[1em] text-4xl 2xl:text-5xl"
            style={{ lineHeight: "1.2em" }}
          >
            <h2>Manage your rentals with Kodi_Ke</h2>
            <h2>the number one most recommended</h2>
            <h2>landlord software</h2>
          </div>
          <div className="mb-[20px] xl:mb-[1em] text-xl xl:text-2xl text-zinc-500">
            <p>Property listing, maintenance requests, unit and block</p>
            <p>management, invoice and receipt generation DIY landlords.</p>
          </div>
          <div className="mb-[2em] mt-[2em]">
            <Link to="/auth">
              <span className="bg-[#19a7ce] px-[60px] py-[20px] cursor-pointer rounded-md text-zinc-100 text-lg">
                GET STARTED
              </span>
            </Link>
          </div>
          <div>
            <p className="text-xl text-zinc-500">
              Our latest news & offers ?{" "}
              <span
                className="text-zinc-800 underline cursor-pointer hover:text-[#19a7ce]"
                style={{ fontWeight: 600 }}
              >
                Click here
              </span>
            </p>
          </div>
        </div>
        {/* img side */}
        <div className=" hidden lg:block flex-[0.5]">
          <img
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full rounded-md"
          />
        </div>
      </div>

      {/*  */}
      <section className="mt-[6em] w-[96%] lg:w-[90%] 2xl:w-[80%] m-auto ">
        <div className="text-center mb-[1em]">WHAT WE OFFER</div>
        <div>
          <p className="text-center text-xl md:text-2xl lg:text-4xl text-[#19A7CE]">
            A complete set of tools, guidance, and best-in-class educational
            content that give you everything you need to be a confident and
            professional landlord.
          </p>
        </div>
      </section>

      {/* footer */}
      <section className="bg-[#146C94] px-[1em] lg:px-[4em] xl:px-[8em] 2xl:px-[11em] mt-[3em] pb-4">
        <div className=" flex flex-col md:flex-row justify-evenly items-start md:items-center pt-[2em] gap-6 md:gap-0">
          <div className="flex items-center gap-[10px] text-xl text-zinc-100">
            <p>
              <BiPhoneCall className="text-2xl" />
            </p>
            <p>Unlimited free training & support</p>
          </div>
          <div className="flex items-center gap-[10px] text-xl text-zinc-100">
            <p>
              <AiOutlineLock className="text-2xl" />
            </p>
            <p>Flexible Property Management Software</p>
          </div>
          <div className="flex items-center gap-[10px] text-xl text-zinc-100">
            <p>
              <BsGearWideConnected className="text-2xl" />
            </p>
            <p>Integration Control</p>
          </div>
        </div>
        {/*  */}
        <div className="mt-[4em] flex flex-col md:flex-row text-center md:text-left md:justify-between gap-[3em] md:gap-0">
          <div>
            <div className="mb-[1em]">
              <h2
                className="text-2xl cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                KODI_ <span className="text-[#fff]">KE</span>
              </h2>
            </div>
            <div>
              <h3 className="text-zinc-200">FOLLOW US</h3>
              <div className="mt-[1em] flex justify-center md:justify-start gap-[10px] text-xl text-zinc-200">
                <BsFacebook className="cursor-pointer" />
                <AiOutlineInstagram className="cursor-pointer" />
                <AiOutlineTwitter className="cursor-pointer" />
                <BsLinkedin className="cursor-pointer" />
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <ul className="text-zinc-200">
              <li className="mb-2" style={{ fontWeight: 700 }}>
                KODI_KE
              </li>
              <li className="mb-2 cursor-pointer">About Us</li>
              <li className="mb-2 cursor-pointer">Pricing</li>
              <li className="mb-2 cursor-pointer">FAQ</li>
              <li className="mb-2 cursor-pointer">Security</li>
              <li className="mb-2 cursor-pointer">Reviews</li>
            </ul>
          </div>
          <div>
            <ul className="text-zinc-200">
              <li className="mb-2" style={{ fontWeight: 700 }}>
                FEATURES
              </li>
              <li className="mb-2 cursor-pointer">Accounting</li>
              <li className="mb-2 cursor-pointer">Property Management</li>
              <li className="mb-2 cursor-pointer">Leasing</li>
              <li className="mb-2 cursor-pointer">Education</li>
            </ul>
          </div>

          <div>
            <ul className="text-zinc-200">
              <li className="mb-2" style={{ fontWeight: 700 }}>
                RESOURCES
              </li>
              <li className="mb-2 cursor-pointer">Blog</li>
              <li className="mb-2 cursor-pointer">Hubs</li>
              <li className="mb-2 cursor-pointer">Podcasts</li>
              <li className="mb-2 cursor-pointer">Partners</li>
              <li className="mb-2 cursor-pointer">News & Ads</li>
            </ul>
          </div>

          <div>
            <ul className="text-zinc-200">
              <li className="mb-2" style={{ fontWeight: 700 }}>
                COMPANY
              </li>
              <li className="mb-2 cursor-pointer">Contact Us</li>
              <li className="mb-2 cursor-pointer">Careers</li>
              <li className="mb-2 cursor-pointer">Press</li>
              <li className="mb-2 cursor-pointer">Support</li>
              <li className="mb-2 cursor-pointer">Help Centre</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Splash;
