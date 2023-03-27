import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./tenants.css";
import { dummyTenant } from "../../../DummyData";

const Tenants = () => {
  const [showCreateTenant, setShowCreateTenant] = useState(false);
  const [updateTenant, setUpdateTenant] = useState(false);

  const handleUpdateTenant = (tenantName) => {
    setUpdateTenant(true);
  };

  return (
    <div>
      <h2 className="text-2xl mb-1" style={{ fontWeight: 700 }}>
        Manage All Your Tenants
      </h2>
      <h2>All your tenants in one dashboard</h2>

      <div>
        <div className="mt-[2em] mb-[2em] flex justify-between">
          <form className="w-[30%]">
            <div className="flex items-center gap-4 w-full justify-between bg-zinc-300 p-2 rounded-md">
              <input
                type="text"
                placeholder="Search Tenant Name or Email"
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
              onClick={() => setShowCreateTenant(!showCreateTenant)}
            >
              Create Tenant
            </button>
          </div>
        </div>
        {/*  */}
        {showCreateTenant && (
          <div className="mb-[1em]">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Full Name of the Tenant
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
                  Tenant's profile if any
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  id="imgUrl"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              {/* <div className="flex flex-col gap-2">
                <label
                  htmlFor="idUrl"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  ID Photo upload
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  id="imgUrl"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div> */}
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
                  placeholder="Tenants phone or mobile"
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
                  htmlFor="pets"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Any Pets
                </label>
                <select
                  name=""
                  id="marital"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="property"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Property To Occupy
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
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Unit in Heri Assigned to Tenant
                </label>
                <select
                  name=""
                  id="unit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="a5 block 3">A5 block 3</option>
                  <option value="c5 block 2">C2 block 6</option>
                  <option value="C5 block 2">C5 block 2</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Paid All Deposits
                </label>
                <select
                  name=""
                  id="unit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unpaidDues"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Total Unpaid Dues
                </label>
                <input
                  type="number"
                  placeholder="Total unpaid in Ksh."
                  id="unpaidDues"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>

              <div>
                <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                  Create Tenant Now
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
        <h2 className="mb-[1em] text-2xl">You have A total Of 3 Tenants</h2>

        {/* update Tenant */}
        {updateTenant && (
          <div className="mb-[1em]">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Full Name of the Tenant
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
                  Tenant's profile if any
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  id="imgUrl"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>
              {/* <div className="flex flex-col gap-2">
                <label
                  htmlFor="idUrl"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  ID Photo upload
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  id="imgUrl"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div> */}
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
                  placeholder="Tenants phone or mobile"
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
                  htmlFor="pets"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Any Pets
                </label>
                <select
                  name=""
                  id="marital"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="property"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Property To Occupy
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
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Unit in Heri Assigned to Tenant
                </label>
                <select
                  name=""
                  id="unit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="a5 block 3">A5 block 3</option>
                  <option value="c5 block 2">C2 block 6</option>
                  <option value="C5 block 2">C5 block 2</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Paid All Deposits
                </label>
                <select
                  name=""
                  id="unit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="unpaidDues"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Total Unpaid Dues
                </label>
                <input
                  type="number"
                  placeholder="Total unpaid in Ksh."
                  id="unpaidDues"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                />
              </div>

              <div>
                <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                  Update Tenant
                </button>
              </div>
              <div>
                <p
                  className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                  onClick={() => setUpdateTenant(false)}
                >
                  Hide this section
                </p>
              </div>
            </form>
          </div>
        )}

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
                  Delete Tenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tenants;
