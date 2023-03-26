import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBuildings, BsPen } from "react-icons/bs";
import { MdGpsNotFixed } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "./properties.css";

const Properties = () => {
  const [showCreateProperty, setShowCreateProperty] = useState(false);
  const [showCreateUnit, setShowCreateUnit] = useState(false);
  const [showUnits, setShowUnits] = useState(false);
  const [currentunitName, setCurrentUnitName] = useState("");

  const handleUnits = (unitName) => {
    // alert(unitName);
    setCurrentUnitName(unitName);
    setShowUnits(true);
  };

  return (
    <div>
      <h2 className="text-2xl mb-1" style={{ fontWeight: 700 }}>
        Manage All Your Properties
      </h2>
      <h2>You can have more than one property</h2>

      <div className="mt-[2em] mb-[2em] flex gap-10">
        <form className="w-[30%]">
          <div className="flex items-center gap-4 w-full justify-between bg-zinc-300 p-2 rounded-md">
            <input
              type="text"
              placeholder="Search Property Name"
              className="bg-transparent outline-none"
            />
            <p>
              <AiOutlineSearch className="text-xl" />
            </p>
          </div>
        </form>

        <div onClick={() => setShowCreateProperty(!showCreateProperty)}>
          <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer">
            Create Property
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {/* manage property */}
        <div className="flex-[0.5] ">
          {/* create property Sections */}
          {showCreateProperty && (
            <div className="mb-[1em]">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Name of the Property
                  </label>
                  <input
                    type="text"
                    placeholder="Name of the Property"
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
                    Image Url
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
                    htmlFor="numberOfUnits"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Number of Units
                  </label>
                  <input
                    type="number"
                    placeholder="How many units ?"
                    id="numberOfUnits"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Location of Property
                  </label>
                  <input
                    type="text"
                    placeholder="i.e Juja opposite Shell"
                    id="location"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="gps"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    GPS Coordinates if any
                  </label>
                  <input
                    type="text"
                    placeholder="1°17'11.0004''S"
                    id="gps"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>

                <div>
                  <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                    Create Property Now
                  </button>
                </div>
                <div>
                  <p
                    className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                    onClick={() => setShowCreateProperty(!showCreateProperty)}
                  >
                    Hide this section
                  </p>
                </div>
              </form>
            </div>
          )}

          <h2 className="mb-[1em] text-2xl">You have 2 properties</h2>

          {/* properties */}
          <div className="flex flex-col gap-[2em]">
            {/*  */}
            <div>
              <div>
                <div
                  className="flex items-center gap-2 mb-1 text-2xl"
                  style={{ fontWeight: 600 }}
                >
                  <BsBuildings />
                  <h2>Mexico Hostels</h2>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <GoLocation />
                  <p>Athi Daystar Campus</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <MdGpsNotFixed />
                  <p>coordinates (lat-99912 lon-788819) </p>
                </div>
              </div>

              {/* Unit Information */}
              <div className="mb-2">
                <h2 className="text-3xl">Units Information</h2>
                <div className="flex gap-10 mt-[10px] items-center">
                  <h4 className="text-xl">
                    You have 10 units in Mexico Hostels
                  </h4>
                  <div
                    className="flex items-center bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer gap-2"
                    // onClick={() => setShowUnits(!showUnits)}
                  >
                    <p>
                      <BsPen />
                    </p>
                    <p onClick={() => handleUnits("Mexico")}>Manage Units</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2>Rent per unit Ksh.5000 |</h2>
                  <h2> | One time deposit Ksh.5000</h2>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h2>Water deposit None |</h2>
                  <h2> | Garbage deposit Ksh.5000</h2>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[400px] h-[240px] object-cover rounded-md"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-[20px]">
                  <div>Created 34 mins Ago</div>
                  <div>Updated 10 mins Ago</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-[20px]">
                  <div>Investor Name: Mr.Scott Luvaha</div>
                  <div>Investor Email: scott@gmail.com</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <div
                  className="flex items-center gap-2 mb-1 text-2xl"
                  style={{ fontWeight: 600 }}
                >
                  <BsBuildings />
                  <h2>Heri Hostels</h2>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <GoLocation />
                  <p>Athi Daystar Campus</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <MdGpsNotFixed />
                  <p>coordinates (lat-99912 lon-788819) </p>
                </div>
              </div>

              {/* Unit Information */}
              <div className="mb-2">
                <h2 className="text-3xl">Units Information</h2>
                <div className="flex gap-10 mt-[10px] items-center">
                  <h4 className="text-xl">You have 10 units in Heri Hostels</h4>
                  <div
                    className="flex items-center bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer gap-2"
                    // onClick={() => setShowUnits(!showUnits)}
                  >
                    <p>
                      <BsPen />
                    </p>

                    <p onClick={() => handleUnits("heri")}>Manage Units</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2>Rent per unit Ksh.5000 |</h2>
                  <h2> | One time deposit Ksh.5000</h2>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h2>Water deposit None |</h2>
                  <h2> | Garbage deposit Ksh.5000</h2>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[400px] h-[240px] object-cover rounded-md"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-[20px]">
                  <div>Created 34 mins Ago</div>
                  <div>Updated 10 mins Ago</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-[20px]">
                  <div>Investor Name: Mr.Scott Luvaha</div>
                  <div>Investor Email: scott@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showUnits && (
          <>
            {/* manage units */}
            <div className="flex-[0.5] ">
              {/* topbar */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl" style={{ fontWeight: 700 }}>
                    {currentunitName}'s units.{" "}
                  </h2>
                </div>
                <div onClick={() => setShowCreateUnit(!showCreateUnit)}>
                  <p className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer">
                    Create A Unit in {currentunitName}
                  </p>
                </div>
                <div onClick={() => setShowUnits(false)}>
                  <p className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer">
                    Hide Units in {currentunitName}
                  </p>
                </div>
              </div>

              {/* create unit */}
              {showCreateUnit && (
                <div>
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Name of the unit
                      </label>
                      <input
                        type="text"
                        placeholder="i.e A5, C4"
                        id="name"
                        required
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="rent"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Rent Amount per Month
                      </label>
                      <input
                        type="number"
                        placeholder="Amount in ksh."
                        id="rent"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="rentDeposit"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Rent Deposit
                      </label>
                      <input
                        type="number"
                        placeholder="one time deposit"
                        id="rentDeposit"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="waterDeposit"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Water Deposit if any
                      </label>
                      <input
                        type="text"
                        placeholder="Enter deposit"
                        id="location"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="investorname"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Investor for this Unit
                      </label>
                      <input
                        type="text"
                        placeholder="Enter investor name"
                        id="investorname"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="extraFee"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Total extra fee apart from rent
                      </label>
                      <input
                        type="number"
                        placeholder="Extra fee apart from rent"
                        id="extraFee"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="waterReading"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Latest Water Reading
                      </label>
                      <input
                        type="text"
                        placeholder="Updated Water Reading"
                        id="waterReading"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="status"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Vacant or Occupied ?
                      </label>
                      <select
                        id="status"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                      >
                        <option value="occupied">Occupied</option>
                        <option value="vacant">Vacant</option>
                      </select>
                    </div>

                    <div>
                      <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                        Create Unit Now
                      </button>
                    </div>
                    <div>
                      <p
                        className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                        onClick={() => setShowCreateUnit(false)}
                      >
                        Hide this section
                      </p>
                    </div>
                  </form>
                </div>
              )}
              {/*  */}
              {/* display mexico units */}
              <div className="unitWrapper">
                {/*  */}
                <div className="unitShadow mb-2 p-2 mt-3">
                  <div className="flex justify-between gap-[10px] mb-2">
                    <p>
                      Unit Name:{" "}
                      <span style={{ fontWeight: 700 }}>A5 block 2</span>
                    </p>
                    <p>
                      Investor:{" "}
                      <span style={{ fontWeight: 700 }}>Mike Njogu</span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p>
                      One time Deposit:{" "}
                      <span style={{ fontWeight: 700 }}>Ksh.5500</span>{" "}
                    </p>
                    <p>
                      Rent per month:{" "}
                      <span style={{ fontWeight: 700 }}>Ksh.5500</span>
                    </p>
                    <p>
                      Water Deposit:{" "}
                      <span style={{ fontWeight: 700 }}>Unset</span>
                    </p>
                    <p>
                      Extra Charges:{" "}
                      <span style={{ fontWeight: 700 }}>Ksh.8000</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Current Water Reading:{" "}
                      <span style={{ fontWeight: 700 }}>Ksh.4000</span>
                    </p>
                  </div>
                  <div className="mt-4 mb-4 flex justify-between items-center">
                    <div>
                      Status:{" "}
                      <span className="bg-green-700 text-white p-[5px] rounded-md text-sm">
                        Occupied
                      </span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <p>
                        <BsPen className="text-[#146C94]" />
                      </p>
                      <p>Edit A5</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer bg-red-700 text-white rounded-md p-1">
                      <p>
                        <BsPen className="" />
                      </p>
                      <p>Delete A5</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="unitShadow mb-2 p-2 mt-3">
                  <div className="flex justify-between gap-[10px]">
                    <p>Unit Name: A5 block 2</p>
                    <p>Investor: Mike Njogu</p>
                  </div>
                  <div>
                    <p>One time Deposit: Ksh.5500</p>
                    <p>Rent per month: Ksh. 5000</p>
                    <p>Water Deposit: Unset</p>
                    <p>Extra Charges: Ksh. 8000</p>
                  </div>
                  <div>
                    <p>Current Water Reading: Ksh.4000</p>
                  </div>
                  <div>Status: Occupied</div>
                </div>
                {/*  */}
                <div className="unitShadow mb-2 p-2 mt-3">
                  <div className="flex justify-between gap-[10px]">
                    <p>Unit Name: A5 block 2</p>
                    <p>Investor: Mike Njogu</p>
                  </div>
                  <div>
                    <p>One time Deposit: Ksh.5500</p>
                    <p>Rent per month: Ksh. 5000</p>
                    <p>Water Deposit: Unset</p>
                    <p>Extra Charges: Ksh. 8000</p>
                  </div>
                  <div>
                    <p>Current Water Reading: Ksh.4000</p>
                  </div>
                  <div>Status: Occupied</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
