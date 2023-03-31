import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import { BsBuildings, BsPen } from "react-icons/bs";
import { useSelector } from "react-redux";

// const manageTenants = () => {
//   localStorage.setItem("newscreen", JSON.stringify("tenants"));
// };

const Overview = () => {
  const { user } = useSelector((state) => state.auth);
  const { property } = useSelector((state) => state.properties);
  return (
    <div>
      {/* topBar */}
      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <div>
          <p className="text-md">Hi {user.name},</p>
          <p className="text-xl" style={{ fontWeight: 600 }}>
            We are here for you!
          </p>
        </div>
      </div>
      {/* reports */}
      <div className="mt-[3em] flex justify-between">
        {/* tenants report */}
        <div className=" bg-zinc-300 p-[2em] ">
          <div className="flex justify-center text-2xl">
            <p className="">
              <MdPeopleOutline className="text-centre" />
            </p>
          </div>
          <div className="text-2xl mt-3">
            <h2>You have 58 tenants</h2>
          </div>
          <div className="flex gap-2 justify-end items-center mt-3 text-sm ">
            Currently at 50% capacity
          </div>
          <div className="flex gap-2 justify-end items-center mt-3 text-sm">
            20% have paid rent
          </div>
        </div>
        {/* property report */}
        <div>
          <div className=" bg-zinc-300 p-[2em] ">
            <div className="flex justify-center text-2xl">
              <p className="">
                <BsBuildings className="text-centre" />
              </p>
            </div>
            <div className="text-2xl mt-3">
              <h2>Monitoring {property.length} Properties</h2>
            </div>
            <div className="flex gap-2 justify-end items-center mt-3 text-sm ">
              You can Add More
            </div>
            <div className="flex gap-2 justify-end items-center mt-3 text-sm">
              Access 100% Monitoring
            </div>
          </div>
        </div>
        {/* vacancy report */}
        <div>
          <div className=" bg-zinc-300 p-[2em] ">
            <div className="flex justify-center text-2xl">
              <p className="">
                <BsBuildings className="text-centre" />
              </p>
            </div>
            <div className="text-2xl mt-3 text-center">
              <h2>Vacancies</h2>
            </div>
            <div className="flex gap-2 justify-end items-center mt-3 text-sm ">
              15 units are vacant
            </div>
            <div className="flex gap-2 justify-end items-center mt-3 text-sm">
              Consider posting a vacancy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
