import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { AiOutlinePlus } from "react-icons/ai";
import { GiSpanner } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
import {
  BsStackOverflow,
  BsBuildings,
  BsPeople,
  BsPen,
  BsDoorOpen,
} from "react-icons/bs";
import Properties from "../properties/Properties";
import Tenants from "../tenants/Tenants";
import Maintenance from "../maintenance/Maintenance";
import Notes from "../notes/Notes";
import Vacancy from "../vacancy/Vacancy";
import Help from "../help/Help";
import Profile from "../profile/Profile";
import Overview from "../overview/Overview";
import LandLord from "../landlord/LandLord";

const Dashboard = () => {
  // tabs navigation states
  const [overView, setOverview] = useState(false);
  const [properties, setProperties] = useState(false);
  const [tenants, setTenants] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [notes, setNotes] = useState(false);
  const [vacancy, setVacancy] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);

  // changing screen states
  const prevScreen = JSON.parse(localStorage.getItem("newscreen"));
  const [screen, setScreen] = useState(prevScreen || "overview");
  const [showscreen, setShowScreen] = useState("");

  const changeScreen = () => {
    localStorage.setItem("newscreen", JSON.stringify(screen));
  };

  useEffect(() => {
    changeScreen();
    // get screen from localstorage
    const currentscreen = JSON.parse(localStorage.getItem("newscreen"));
    setShowScreen(currentscreen);
  }, [screen]);

  return (
    <div className="h-[100vh] overflow-y-scroll">
      <div className="flex">
        {/* panel */}
        <div className="flex-[0.2] bg-[#146C94] min-h-[100vh] px-[2em] py-[2em]">
          <div className="mb-[2em] flex justify-between items-center">
            <div>
              <h2
                className="text-3xl cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                KODI_ <span className="text-[#fff]">KE</span>
              </h2>
            </div>
            <div>
              <BsBuildings className="text-2xl text-white" />
            </div>
          </div>
          {/* main tabs */}
          <div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("overview")}
            >
              <p>
                <BsStackOverflow />
              </p>
              <p>Overview</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("properties")}
            >
              <p>
                <BsBuildings />
              </p>
              <p>Properties</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("tenants")}
            >
              <p>
                <BsPeople />
              </p>
              <p>Tenants</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("maintenance")}
            >
              <p>
                <GiSpanner />
              </p>
              <p>Maintenance</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("notes")}
            >
              <p>
                <BsPen />
              </p>
              <p>Notes</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("vacancy")}
            >
              <p>
                <BsDoorOpen />
              </p>
              <p>Vacate Tenant</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("landlord")}
            >
              <p>
                <BsPeople />
              </p>
              <p>LandLords</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2 hover:bg-[#19A7CE] rounded-lg"
              style={{ borderBottom: "1px solid white" }}
              onClick={() => setScreen("help")}
            >
              <p>
                <BiHelpCircle />
              </p>
              <p>Help</p>
            </div>
            <div
              className="flex items-center gap-2 text-white text-lg p-[10px] cursor-pointer mb-2"
              onClick={() => setScreen("profile")}
            >
              <img
                src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                srcset=""
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
              <p>John Kimani</p>
            </div>
          </div>
        </div>
        {/* other screens */}
        <div className="flex-[0.8] bg-slate-50 pl-[2em] pt-[2em] pr-[2em]">
          <div>
            {showscreen === "overview" && <Overview />}
            {showscreen === "properties" && <Properties />}
            {showscreen === "tenants" && <Tenants />}
            {showscreen === "maintenance" && <Maintenance />}
            {showscreen === "notes" && <Notes />}
            {showscreen === "vacancy" && <Vacancy />}
            {/* {showscreen === "landlord" && <LandLord />} */}
            {showscreen === "help" && <Help />}
            {showscreen === "profile" && <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
