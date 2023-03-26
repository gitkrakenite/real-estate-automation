import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import "./tenants.css";
import { dummyTenant } from "../../../DummyData";

const LandLord = () => {
  const [showCreateLandlord, setShowCreateLandlord] = useState(false);
  const [updateLandLord, setUpdateLandLord] = useState(false);

  const handleUpdateLandlord = (landLordName) => {
    setUpdateLandLord(true);
  };

  return (
    <div>
      <h2 className="text-2xl mb-1" style={{ fontWeight: 700 }}>
        Manage All Your LandLord
      </h2>
      <h2>All your landlords in one dashboard</h2>

      <div>
        <div className="mt-[2em] mb-[2em] flex justify-between">
          <form className="w-[30%]">
            <div className="flex items-center gap-4 w-full justify-between bg-zinc-300 p-2 rounded-md">
              <input
                type="text"
                placeholder="Search LandLord Name or Email"
                className="bg-transparent outline-none w-full"
              />
              <p>
                <AiOutlineSearch className="text-xl" />
              </p>
            </div>
          </form>

          <div>
            <button
              className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer"
              onClick={() => setShowCreateLandlord(!showCreateLandlord)}
            >
              Create LandLord
            </button>
          </div>
        </div>
        {/*  */}
        {console.log(showCreateLandlord)}

        {showCreateLandlord && (
          <div className="mb-[1em]">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Full Name of the LandLord
                </label>
                <input
                  type="text"
                  placeholder="i.e John Doe"
                  id="name"
                  required
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="imgUrl"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Landlord's profile if any
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  id="imgUrl"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="i.e johndoe@gmail.com"
                  id="numberOfUnits"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="number"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="LandLord's phone or mobile"
                  id="number"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="kra"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  KRA pin
                </label>
                <input
                  type="text"
                  placeholder="full kra pin"
                  id="kra"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="marital"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Marital Status
                </label>
                <select
                  name=""
                  id="marital"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="separated">Separated</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="property"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Property To Manage
                </label>
                <select
                  name=""
                  id="property"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="heri">Heri Homes</option>
                  <option value="mexico">Mexico Hostels</option>
                </select>
              </div>

              <div>
                <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                  Add LandLord Now
                </button>
              </div>
              <div>
                <p
                  className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                  // onClick={() => setShowCreateProperty(!showCreateProperty)}
                >
                  Hide this section
                </p>
              </div>
            </form>
          </div>
        )}
        <h2 className="mb-[1em] text-2xl">You have 3 LandLords</h2>
        {/* tenant info */}
        <div className="flex gap-4 flex-wrap ">
          {dummyTenant?.map((item) => (
            <div key={item.id} className="unitShadow p-3 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  src={item.profile}
                  alt=""
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
              </div>
              <div className="flex justify-between mb-1 mt-1">
                <p>
                  Name: <span style={{ fontWeight: 700 }}> {item.name}</span>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:phillip@gmail.com">
                    <span style={{ fontWeight: 700 }}>{item.email}</span>
                  </a>
                </p>
              </div>
              <div className="flex justify-between mb-1 mt-1">
                <p>
                  Phone: <span style={{ fontWeight: 700 }}>078383832</span>{" "}
                </p>
                <p>
                  KRA: <span style={{ fontWeight: 700 }}> 7272xx88ch78h</span>{" "}
                </p>
              </div>
              <div className="flex justify-between mb-1 mt-1">
                <p>
                  Pet Owner: <span style={{ fontWeight: 700 }}>Yes</span>{" "}
                </p>
                <p>
                  Marital Status:{" "}
                  <span style={{ fontWeight: 700 }}>Single</span>{" "}
                </p>
              </div>
              <div className="flex justify-between gap-4 mb-1 mt-1">
                <p>
                  Property Assigned:{" "}
                  <span style={{ fontWeight: 700 }}>{item.property}</span>
                </p>
                <p>
                  Unit Assigned:{" "}
                  <span style={{ fontWeight: 700 }}>{item.unit}</span>
                </p>
              </div>
              <div className="flex gap-8 mb-1 mt-1">
                <p>
                  Paid Rent Deposit:{" "}
                  <span style={{ fontWeight: 700 }}>{item.rentDeposit}</span>{" "}
                </p>
                <p>Paid All Entry Fee: Partial</p>
              </div>
              <div>
                <p>
                  Total Unpaid Dues:{" "}
                  <span style={{ fontWeight: 700 }}>Ksh.{item.unpaidDues}</span>{" "}
                </p>
              </div>
              <div className="h-[4px] bg-zinc-500 mt-3 mb-3 rounded-md" />
              <div className="flex justify-between">
                <button
                  className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer"
                  onClick={() => handleUpdateTenant(item.name)}
                >
                  Update {item.name.split(" ")[0]}
                </button>
                <button className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer">
                  Delete Landlord
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandLord;
