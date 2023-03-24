import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBuildings, BsPen } from "react-icons/bs";
import { MdGpsNotFixed } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Properties = () => {
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

        <div>
          <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer">
            Create Property
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {/* manage property */}
        <div className="flex-[0.5]">
          {/* create property Sections */}
          <div>
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
              <div>
                <label htmlFor="imgUrl">Image Url</label>
                <input type="text" placeholder="image url" id="imgUrl" />
              </div>
              <div>
                <label htmlFor="numberOfUnits">Number of Units</label>
                <input
                  type="number"
                  placeholder="How many units ?"
                  id="numberOfUnits"
                />
              </div>
              <div>
                <label htmlFor="location">Location of Property</label>
                <input
                  type="text"
                  placeholder="i.e Juja opposite Shell"
                  id="location"
                />
              </div>
              <div>
                <label htmlFor="gps">GPS Coordinates if any</label>
                <input type="text" placeholder="1°17'11.0004''S" id="gps" />
              </div>
            </form>
          </div>

          <h2 className="mb-[1em] text-2xl">You have 2 properties</h2>

          {/* properties */}
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
                <h4 className="text-xl">You have 10 units in Mexico Hostels</h4>
                <div className="flex items-center bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer gap-2">
                  <p>
                    <BsPen />
                  </p>
                  <p>Manage Units</p>
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
        {/* manage units */}
        <div className="flex-[0.5] bg-green-500">
          <h2>Units information </h2>
        </div>
      </div>
    </div>
  );
};

export default Properties;
