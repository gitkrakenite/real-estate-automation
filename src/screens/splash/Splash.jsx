import React from "react";
import "./splash.css";
import { BiPhoneCall } from "react-icons/bi";
import { BsGearWideConnected, BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiOutlineLock,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Splash = () => {
  return (
    <div className="pt-[1em]">
      {/* topbar */}
      <div className="flex justify-between items-center pb-[3em] w-[80%] m-auto ">
        {/* logo */}
        <div>
          <h2 className="text-2xl cursor-pointer" style={{ fontWeight: 700 }}>
            KODI_ <span className="text-[#146C94]">KE</span>
          </h2>
        </div>
        {/* links */}
        <div className="flex items-center justify-between gap-[3em]">
          <ul className="flex items-center gap-[20px]">
            <li className="listItem">PRICING</li>
            <li className="listItem">EDUCATION</li>
            <li className="listItem">FAQ</li>
          </ul>
          <ul className="flex items-center gap-[20px]">
            <li className="listItem">LOG IN</li>
            <li className="listBtn">SIGN UP</li>
          </ul>
        </div>
      </div>
      {/* hero section */}
      <div className="flex justify-between w-[80%] m-auto ">
        {/* text side */}
        <div className="flex-[0.5]">
          <div className="mb-[1em] text-5xl" style={{ lineHeight: "1.2em" }}>
            <h2>Manage your rentals with Kodi_Ke</h2>
            <h2>the number one most recommended</h2>
            <h2>landlord software</h2>
          </div>
          <div className="mb-[1em] text-2xl text-zinc-500">
            <p>Property listing, maintenance requests, unit and block</p>
            <p>management, invoice and receipt generation DIY landlords.</p>
          </div>
          <div className="mb-[2em] mt-[2em]">
            <span className="bg-[#19a7ce] px-[60px] py-[20px] cursor-pointer rounded-md text-zinc-100 text-lg">
              GET STARTED
            </span>
          </div>
          <div>
            <p className="text-xl text-zinc-500">
              Already a member ?{" "}
              <span
                className="text-zinc-800 underline cursor-pointer hover:text-[#19a7ce]"
                style={{ fontWeight: 600 }}
              >
                Sign in here
              </span>
            </p>
          </div>
        </div>
        {/* img side */}
        <div className="flex-[0.5]">
          <img
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full rounded-md"
          />
        </div>
      </div>

      {/*  */}
      <section className="mt-[6em] w-[80%] m-auto ">
        <div className="text-center mb-[1em]">WHAT WE OFFER</div>
        <div>
          <p className="text-center text-4xl text-[#19A7CE]">
            A complete set of tools, guidance, and best-in-class educational
            content that give you everything you need to be a confident and
            professional landlord.
          </p>
        </div>
      </section>

      {/* footer */}
      <section className="bg-[#146C94] px-[11em] mt-[3em] pb-4">
        <div className="flex justify-evenly items-center pt-[2em]">
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
        <div className="mt-[4em] flex justify-between">
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
              <div className="mt-[1em] flex gap-[10px] text-xl text-zinc-200">
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
