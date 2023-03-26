import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import "./tenants.css";
import { dummyTenant } from "../../../DummyData";

const Vacancy = () => {
  const [showVacateTenant, setShowVacateTenant] = useState(false);
  const [vacateTenant, setVacateTenant] = useState(false);

  const handleVacateTenant = (tenantName) => {
    setVacateTenant(true);
  };

  return (
    <div>
      <h2 className="text-2xl mb-1" style={{ fontWeight: 700 }}>
        Vacate a Tenant
      </h2>
      <h2></h2>

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
              onClick={() => setShowVacateTenant(!showVacateTenant)}
            >
              Vacate Tenant
            </button>
          </div>
        </div>
        {/*  */}
        {showVacateTenant ||
          (vacateTenant && (
            <div className="mb-[1em]">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="repair"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Repair Costs
                  </label>
                  <input
                    type="number"
                    placeholder="Costs"
                    id="repair"
                    required
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="refunded"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Amount Refunded
                  </label>
                  <input
                    type="number"
                    placeholder="Refunded cash"
                    id="refunded"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="vacateDate"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Date To Vacate
                  </label>
                  <input
                    type="email"
                    placeholder="i.e 15th Jun 2023"
                    id="vacateDate"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                  />
                </div>

                <div>
                  <button className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full">
                    Vacate Tenant
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
          ))}
        <h2 className="mb-[1em] text-2xl">You have A total Of 3 Tenants</h2>

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
                  onClick={() => handleVacateTenant(item.name)}
                >
                  Vacate {item.name.split(" ")[0]}
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

export default Vacancy;
