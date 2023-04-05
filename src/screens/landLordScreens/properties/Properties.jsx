import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBuildings, BsPen, BsTrash } from "react-icons/bs";
import { MdGpsNotFixed } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "./properties.css";
import { dummyProperty } from "../../../DummyData";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../../features/property/propertySlice";
import { toast } from "react-hot-toast";
import Spinner from "../../../components/Spinner";
import moment from "moment";
import { createProperty } from "../../../features/property/propertySlice";
import axios from "../../../axios";

import { createUnit, getUnit } from "../../../features/units/unitSlice";

const Properties = () => {
  const [showCreateProperty, setShowCreateProperty] = useState(false);
  const [showUpdateProperty, setShowUpdateProperty] = useState(false);
  const [showCreateUnit, setShowCreateUnit] = useState(false);
  const [showUnits, setShowUnits] = useState(false);
  const [currentunitName, setCurrentUnitName] = useState("");
  const [showUpdateUnit, setShowUpdateUnit] = useState(false);

  // create Property states
  const [propertyName, setPropertyName] = useState("");
  const [propertyImg, setPropertyImg] = useState("");
  const [unitsNo, setUnitsNo] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [gpsCoordinates, setGpsCoordinates] = useState("");
  const [landlordName, setLandlordName] = useState("");
  const [landLordProfile, setLandLordProfile] = useState("");
  const [landlordEmailAddress, setLandlordEmailAddress] = useState("");
  const [landlordPhoneNumber, setLandlordPhoneNumber] = useState("");
  const [landlordKraPin, setLandlordKraPin] = useState("");
  const [deleteProperty, setDeleteProperty] = useState("");

  // updatePropertyFields
  const [updatepropertyName, setupdatePropertyName] = useState("");
  const [updatepropertyImg, setupdatePropertyImg] = useState("");
  const [updateunitsNo, setupdateUnitsNo] = useState("");
  const [updatepropertyLocation, setupdatePropertyLocation] = useState("");
  const [updategpsCoordinates, setupdateGpsCoordinates] = useState("");
  const [updatelandlordName, setupdateLandlordName] = useState("");
  const [updatelandLordProfile, setupdateLandLordProfile] = useState("");
  const [updatelandlordEmailAddress, setupdateLandlordEmailAddress] =
    useState("");
  const [updatelandlordPhoneNumber, setupdateLandlordPhoneNumber] =
    useState("");
  const [updatelandlordKraPin, setupdateLandlordKraPin] = useState("");
  const [loading, setLoading] = useState("");
  const [propertyUpdateId, setPropertyUpdateId] = useState("");

  useEffect(() => {
    setPropertyName(updatepropertyName);
    setPropertyImg(updatepropertyImg);
    setUnitsNo(updateunitsNo);
    setPropertyLocation(updatepropertyLocation);
    setGpsCoordinates(updategpsCoordinates);
    setLandlordName(updatelandlordName);
    setLandLordProfile(updatelandLordProfile);
    setLandlordEmailAddress(updatelandlordEmailAddress);
    setLandlordPhoneNumber(updatelandlordPhoneNumber);
    setLandlordKraPin(updatelandlordKraPin);
    setDeleteProperty("hidden");
  }, [
    updatepropertyName,
    updatepropertyImg,
    updatelandlordPhoneNumber,
    deleteProperty,
  ]);

  const handleUpdateProperty = async (e) => {
    e.preventDefault();
    try {
      const propertyData = {
        propertyName,
        propertyImg,
        unitsNo,
        propertyLocation,
        gpsCoordinates,
        landlordName,
        landLordProfile,
        landlordEmailAddress,
        landlordPhoneNumber,
        landlordKraPin,
      };
      await axios.put("/property/" + propertyUpdateId, propertyData);
      toast.success("Updated Succesfully");
      setLoading(!loading);
      setShowUpdateProperty(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { property, isError, isSuccess, isLoading } = useSelector(
    (state) => state.properties
  );

  const { unit } = useSelector((state) => state.units);

  const handleClear = () => {
    setPropertyName("");
    setPropertyImg("");
    setUnitsNo("");
    setPropertyLocation("");
    setGpsCoordinates("");
    setLandlordName("");
    setLandLordProfile("");
    setLandlordEmailAddress("");
    setLandlordPhoneNumber("");
    setLandlordKraPin("");
  };

  const handleCreateProperty = (e) => {
    e.preventDefault();

    if (
      !propertyName ||
      !propertyImg ||
      !unitsNo ||
      !propertyLocation ||
      !landlordName ||
      !landlordEmailAddress ||
      !landlordPhoneNumber ||
      !landlordKraPin
    ) {
      toast.error("Some fields missing details");
      return;
    }

    try {
      const propertyData = {
        propertyName,
        propertyImg,
        unitsNo,
        propertyLocation,
        gpsCoordinates,
        landlordName,
        landLordProfile,
        landlordEmailAddress,
        landlordPhoneNumber,
        landlordKraPin,
      };

      dispatch(createProperty(propertyData));
      handleClear();
      setShowCreateProperty(false);

      toast.success("Sent successfully");
    } catch (error) {
      toast.error("Error occured: ");
    }
  };

  // search property
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search property func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = property?.filter(
          (item) =>
            item.propertyName
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.propertyLocation
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.landlordName.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  // search unit
  const [unitsearchText, setUnitSearchText] = useState("");
  const [unitsearchTimeout, setUnitsearchTimeout] = useState(null);
  const [unitSearchedResults, setUnitSearchedResults] = useState(null);

  // search unit Func
  const handleUnitSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(unitsearchTimeout);

    setUnitSearchText(e.target.value);

    setUnitsearchTimeout(
      setTimeout(() => {
        const searchResults = unit?.filter(
          (item) =>
            item.unitName
              .toLowerCase()
              .includes(unitsearchText.toLowerCase()) ||
            item.assignedPropertyName
              .toLowerCase()
              .includes(unitsearchText.toLowerCase()) ||
            item.unitInvestorName
              .toLowerCase()
              .includes(unitsearchText.toLowerCase()) ||
            item.unitVacancy
              .toLowerCase()
              .includes(unitsearchText.toLowerCase())
        );

        setUnitSearchedResults(searchResults);
      }, 500)
    );
  };

  const handlePropertyDelete = async (propertytoDeleteId) => {
    let shouldDelete = confirm("Are you sure you want to delete ?");

    if (shouldDelete) {
      try {
        const propertyData = {
          propertyStatus: deleteProperty,
        };
        console.log(propertyData);
        console.log(deleteProperty);
        await axios.put("/property/" + propertytoDeleteId, propertyData);
        toast.success("Deleted Succesfully");
        setLoading(!loading);
        setShowUpdateProperty(false);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.success("Aborted Delete");
    }
  };

  const handleShowUnits = (propertyName) => {
    setCurrentUnitName(propertyName); //update text
    setShowUnits(true);

    if (!propertyName) {
      toast.error("Property Name required");
      return;
    } else {
      const propertyData = {
        assignedPropertyName: propertyName,
      };
      dispatch(getUnit(propertyData));
    }
  };

  useEffect(() => {
    dispatch(getProperty());
  }, [isError, isSuccess, loading, setLoading]);

  useEffect(() => {
    // if (isError) {
    //   toast.error("Error occurred: ");
    // }

    if (property.length > 1) {
      toast.success("Properties Found!");
    }
  }, [property, isError, isSuccess, dispatch]);

  // create unit states
  const [unitName, setUnitName] = useState("");
  const [assignedPropertyName, setAssignedPropertyName] = useState("");
  const [unitRent, setUnitRent] = useState("");
  const [unitRentDeposit, setUnitRentDeposit] = useState("");
  const [unitWaterDeposit, setUnitWaterDeposit] = useState("");
  const [unitInvestorName, setUnitInvestorName] = useState("");
  const [unitUnpaidDues, setUnitUnpaidDues] = useState("");
  const [unitWaterReading, setUnitWaterReading] = useState("");
  const [unitVacancy, setUnitVacancy] = useState("");
  const [deleteUnit, setDeleteUnit] = useState("");

  // updateUnitFields
  const [updateunitName, setupdateunitName] = useState("");
  const [updateassignedPropertyName, setupdateassignedPropertyName] =
    useState("");
  const [updateunitRent, setupdateUnitRent] = useState("");
  const [updateunitRentDeposit, setupdateunitRentDeposit] = useState("");
  const [updateunitWaterDeposit, setupdateunitWaterDeposit] = useState("");
  const [updateunitInvestorName, setupdateunitInvestorName] = useState("");
  const [updateunitUnpaidDues, setupdateunitUnpaidDues] = useState("");
  const [updateunitWaterReading, setupdateunitWaterReading] = useState("");
  const [updateunitVacancy, setupdateunitVacancy] = useState("");
  const [unitUpdateId, setUnitUpdateId] = useState("");

  useEffect(() => {
    setUnitName(updateunitName);
    setAssignedPropertyName(updateassignedPropertyName);
    setUnitRent(updateunitRent);
    setUnitRentDeposit(updateunitRentDeposit);
    setUnitWaterDeposit(updateunitWaterDeposit);
    setUnitInvestorName(updateunitInvestorName);
    setUnitUnpaidDues(updateunitUnpaidDues);
    setUnitWaterReading(updateunitWaterReading);
    setUnitVacancy(updateunitVacancy);
    setDeleteUnit("hidden");
    setAssignedPropertyName(currentunitName);
  }, [
    updateunitName,
    updateunitRent,
    updateunitRent,
    deleteUnit,
    currentunitName,
  ]);

  const handleUpdateUnit = async (e) => {
    e.preventDefault();
    try {
      const unitData = {
        unitName,
        assignedPropertyName,
        unitRent,
        unitRentDeposit,
        unitWaterDeposit,
        unitInvestorName,
        unitUnpaidDues,
        unitWaterReading,
        unitVacancy,
      };
      await axios.put("/unit/" + unitUpdateId, unitData);
      toast.success("Updated Succesfully");
      // setLoading(!loading);
      alert("Reload to see changes");
      setShowUpdateUnit(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCreateUnit = (e) => {
    e.preventDefault();
    // alert(assignedPropertyName);
    if (
      !assignedPropertyName ||
      !unitName ||
      !unitVacancy ||
      !unitRent ||
      !unitRentDeposit ||
      !unitWaterDeposit ||
      !unitWaterReading
    ) {
      toast.error("Some fields missing details");
      return;
    }

    try {
      const unitData = {
        unitName,
        assignedPropertyName,
        unitRent,
        unitRentDeposit,
        unitWaterDeposit,
        unitInvestorName,
        unitUnpaidDues,
        unitWaterReading,
        unitVacancy,
      };

      dispatch(createUnit(unitData));
      setShowCreateUnit(false);
      handleShowUnits();
      toast.success("Sent successfully");
    } catch (error) {
      toast.error("Error occured: ");
    }
  };

  const handleDeleteUnit = async (unitToDeleteId) => {
    let shouldDelete = confirm("Are you sure you want to delete ?");

    if (shouldDelete) {
      try {
        const unitData = {
          unitStatus: deleteUnit,
        };

        await axios.put("/unit/" + unitToDeleteId, unitData);
        toast.success("Deleted Succesfully");
        setLoading(!loading);
        // setShowUpdateProperty(false);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.success("Aborted Deletion");
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl mb-1" style={{ fontWeight: 700 }}>
        Manage All Your Properties
      </h2>
      <h2>You can have more than one property</h2>

      {/* search form */}
      <div className="mt-[2em] mb-[2em] flex gap-10">
        <form className="w-[32%]">
          <div className="flex items-center gap-4 w-full justify-between bg-zinc-300 p-2 rounded-md">
            <input
              type="text"
              placeholder="Search Anything"
              className="bg-transparent outline-none"
              required
              value={searchText}
              onChange={handleSearchChange}
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

      {/* manage property */}
      <div className="">
        <div className="">
          {/* create property Sections */}
          {showCreateProperty && (
            <div className="mb-[1em]">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleCreateProperty}
              >
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
                    min={5}
                    maxLength={30}
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="imgUrl"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Property Image Url
                  </label>
                  <input
                    type="text"
                    placeholder="image url"
                    id="imgUrl"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={propertyImg}
                    onChange={(e) => setPropertyImg(e.target.value)}
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
                    required
                    value={unitsNo}
                    onChange={(e) => setUnitsNo(e.target.value)}
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
                    required
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="gps"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    GPS Coordinates (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="1°17'11.0004''S"
                    id="gps"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    value={gpsCoordinates}
                    onChange={(e) => setGpsCoordinates(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordName"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    id="landlordName"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordProfile"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Photo (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    id="landlordProfile"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    value={landLordProfile}
                    onChange={(e) => setLandLordProfile(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordEmail"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    id="landlordEmail"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordEmailAddress}
                    onChange={(e) => setLandlordEmailAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordPhone"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Phone
                  </label>
                  <input
                    type="text"
                    placeholder="0798 516432"
                    id="landlordPhone"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordPhoneNumber}
                    onChange={(e) => setLandlordPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordKra"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's KRA Pin
                  </label>
                  <input
                    type="text"
                    placeholder="0798xx51643sa"
                    id="landlordKra"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordKraPin}
                    onChange={(e) => setLandlordKraPin(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                    onClick={handleCreateProperty}
                  >
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

          {showUpdateProperty && (
            <div className="mb-[1em]">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleUpdateProperty}
              >
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
                    min={5}
                    maxLength={30}
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="imgUrl"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Property Image Url
                  </label>
                  <input
                    type="text"
                    placeholder="image url"
                    id="imgUrl"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={propertyImg}
                    onChange={(e) => setPropertyImg(e.target.value)}
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
                    required
                    value={unitsNo}
                    onChange={(e) => setUnitsNo(e.target.value)}
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
                    required
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="gps"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    GPS Coordinates (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="1°17'11.0004''S"
                    id="gps"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    value={gpsCoordinates}
                    onChange={(e) => setGpsCoordinates(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordName"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    id="landlordName"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordName}
                    onChange={(e) => setLandlordName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordProfile"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Photo (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    id="landlordProfile"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    value={landLordProfile}
                    onChange={(e) => setLandLordProfile(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordEmail"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    id="landlordEmail"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordEmailAddress}
                    onChange={(e) => setLandlordEmailAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordPhone"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's Phone
                  </label>
                  <input
                    type="text"
                    placeholder="0798 516432"
                    id="landlordPhone"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordPhoneNumber}
                    onChange={(e) => setLandlordPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="landlordKra"
                    style={{ fontWeight: 700 }}
                    className="text-md"
                  >
                    Landlord's KRA Pin
                  </label>
                  <input
                    type="text"
                    placeholder="0798xx51643sa"
                    id="landlordKra"
                    style={{ border: "1px solid black" }}
                    className="p-[8px] rounded-md"
                    required
                    value={landlordKraPin}
                    onChange={(e) => setLandlordKraPin(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                    onClick={handleUpdateProperty}
                  >
                    Update Property
                  </button>
                </div>
                <div>
                  <p
                    className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                    onClick={() => setShowUpdateProperty(!showUpdateProperty)}
                  >
                    Hide this section
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* <div className="bg-green-500">sasasa</div> */}

          {property?.length < 1 ? (
            <div className="flex flex-1 w-full justify-center items-center  h-[20vh]">
              <p className="text-2xl">
                Hello {user?.name} You have No Properties Yet. Create One
              </p>
            </div>
          ) : (
            <div className=" w-full">
              <h2 className="mb-[1em] text-2xl">
                You have {property?.length} properties
              </h2>

              {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing Resuls for{" "}
                  <span className="text-[#222328]">{searchText}</span>:
                </h2>
              )}

              {searchText ? (
                <>
                  {/* properties */}
                  <div className="flex flex-wrap gap-[20px] h-[65vh] overflow-y-scroll">
                    {isLoading && <Spinner message="Fetching Properties" />}

                    {searchedResults?.map((item) => (
                      <div className="unitShadow p-2 rounded-md" key={item._id}>
                        {/*  */}
                        <div>
                          <div>
                            <div
                              className="flex flex-wrap items-center gap-2 mb-1 text-2xl"
                              style={{ fontWeight: 600 }}
                            >
                              <div className="flex flex-wrap gap-[10px] justify-between items-center w-full">
                                <div className="flex items-center gap-1">
                                  <BsBuildings />
                                  <h2>{item.propertyName}</h2>
                                </div>
                                {/* <div>
                                  <h2 className="text-zinc-500 text-lg">
                                    Currently: {item.unitsNo} Units
                                  </h2>
                                </div> */}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-1">
                              <GoLocation />
                              <p>{item.propertyLocation}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <MdGpsNotFixed />
                              {!item.gpsCoordinates ? (
                                <p style={{ fontWeight: 700 }}>
                                  Coordinates: Unset
                                </p>
                              ) : (
                                <p>Coordinates: {item.gpsCoordinates} </p>
                              )}
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <img
                              src={item.propertyImg}
                              alt=""
                              className="w-[400px] h-[240px] object-cover rounded-md"
                            />
                          </div>

                          <div className="mt-8">
                            <h2
                              className="mb-4 text-xl"
                              style={{ fontWeight: 600 }}
                            >
                              Landlord Details
                            </h2>
                            <div className="flex flex-wrap items-center justify-between mb-2">
                              <div className="flex flex-wrap items-center gap-[10px]">
                                <div>
                                  {!item.landLordProfile ? (
                                    <p style={{ fontWeight: 700 }}>Unset</p>
                                  ) : (
                                    <>
                                      <img
                                        src={item.landLordProfile}
                                        alt=""
                                        className="h-[60px] w-[60px] object-cover rounded-full"
                                      />
                                    </>
                                  )}
                                </div>
                                <div>{item.landlordName}</div>
                              </div>

                              <div>Landlord KRA: {item.landlordKraPin}</div>
                            </div>
                            <div className="flex flex-wrap flex-col gap-2">
                              <div>
                                LandLord Email: {item.landlordEmailAddress}
                              </div>
                              <div>
                                Landlord Phone: {item.landlordPhoneNumber}
                              </div>
                            </div>
                            <div className="h-[4px] bg-zinc-500 mt-3 rounded-lg" />
                            <div className="mt-3">
                              <div className="flex items-center gap-[20px]">
                                <div>
                                  Created {moment(item.createdAt).fromNow()}
                                </div>
                                <div>
                                  Updated {moment(item.updatedAt).fromNow()}
                                </div>
                                <div
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setShowUpdateProperty(true);
                                    setPropertyUpdateId(item._id);
                                    setupdatePropertyName(item.propertyName);
                                    setupdatePropertyImg(item.propertyImg);
                                    setupdateUnitsNo(item.unitsNo);
                                    setupdatePropertyLocation(
                                      item.propertyLocation
                                    );
                                    setupdateGpsCoordinates(
                                      item.gpsCoordinates || ""
                                    );
                                    setupdateLandlordName(item.landlordName);
                                    setupdateLandLordProfile(
                                      item.landLordProfile || ""
                                    );
                                    setupdateLandlordEmailAddress(
                                      item.landlordEmailAddress
                                    );
                                    setupdateLandlordPhoneNumber(
                                      item.landlordPhoneNumber
                                    );
                                    setupdateLandlordKraPin(
                                      item.landlordKraPin
                                    );
                                  }}
                                >
                                  <BsPen
                                    title={`Edit ${item.propertyName}`}
                                    className="bg-[#146C94] text-white p-[5px] text-2xl rounded-md"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 ">
                            <div
                              className="flex items-center bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer gap-2 justify-center"
                              onClick={() => handleShowUnits(item.propertyName)}
                            >
                              <p>
                                <BsPen />
                              </p>
                              <p>Manage Units</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* properties */}
                  <div className="flex flex-wrap gap-[20px] h-[65vh] overflow-y-scroll">
                    {isLoading && <Spinner message="Fetching Properties" />}

                    {property?.map((item) => (
                      <div className="unitShadow p-2 rounded-md" key={item._id}>
                        {/*  */}
                        <div>
                          <div>
                            <div
                              className="flex items-center gap-2 mb-1 text-2xl"
                              style={{ fontWeight: 600 }}
                            >
                              <div className="flex flex-wrap gap-[15px] justify-between items-center w-full">
                                <div className="flex items-center gap-1">
                                  <BsBuildings />
                                  <h2>{item.propertyName}</h2>
                                </div>
                                <div className="flex items-center gap-1">
                                  <h1></h1>
                                  {/* <h2 className="text-zinc-500 text-lg">
                                    Currently: {item.unitsNo} Units
                                  </h2> */}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-1">
                              <GoLocation />
                              <p>{item.propertyLocation}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <MdGpsNotFixed />
                              {!item.gpsCoordinates ? (
                                <p style={{ fontWeight: 700 }}>
                                  Coordinates: Unset
                                </p>
                              ) : (
                                <p>Coordinates: {item.gpsCoordinates} </p>
                              )}
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <img
                              src={item.propertyImg}
                              alt=""
                              className="w-[400px] h-[240px] object-cover rounded-md"
                            />
                          </div>

                          <div className="mt-8">
                            <h2
                              className="mb-4 text-xl"
                              style={{ fontWeight: 600 }}
                            >
                              Landlord Details
                            </h2>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex  flex-wrap items-center gap-[10px]">
                                <div>
                                  {!item.landLordProfile ? (
                                    <p style={{ fontWeight: 700 }}>Unset</p>
                                  ) : (
                                    <>
                                      <img
                                        src={item.landLordProfile}
                                        alt=""
                                        className="h-[60px] w-[60px] object-cover rounded-full"
                                      />
                                    </>
                                  )}
                                </div>
                                <div>{item.landlordName}</div>
                              </div>

                              <div>Landlord KRA: {item.landlordKraPin}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <div>
                                LandLord Email: {item.landlordEmailAddress}
                              </div>
                              <div>
                                Landlord Phone: {item.landlordPhoneNumber}
                              </div>
                            </div>
                            <div className="h-[4px] bg-zinc-500 mt-3 rounded-lg" />
                            <div className="mt-3">
                              <div className="flex items-center gap-[20px]">
                                <div>
                                  Created {moment(item.createdAt).fromNow()}
                                </div>
                                <div>
                                  Updated {moment(item.updatedAt).fromNow()}
                                </div>
                                <div
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setShowUpdateProperty(true);
                                    setPropertyUpdateId(item._id);
                                    setupdatePropertyName(item.propertyName);
                                    setupdatePropertyImg(item.propertyImg);
                                    setupdateUnitsNo(item.unitsNo);
                                    setupdatePropertyLocation(
                                      item.propertyLocation
                                    );
                                    setupdateGpsCoordinates(
                                      item.gpsCoordinates || ""
                                    );
                                    setupdateLandlordName(item.landlordName);
                                    setupdateLandLordProfile(
                                      item.landLordProfile || ""
                                    );
                                    setupdateLandlordEmailAddress(
                                      item.landlordEmailAddress
                                    );
                                    setupdateLandlordPhoneNumber(
                                      item.landlordPhoneNumber
                                    );
                                    setupdateLandlordKraPin(
                                      item.landlordKraPin
                                    );
                                  }}
                                >
                                  <BsPen
                                    title={`Edit ${item.propertyName}`}
                                    className="bg-[#146C94] text-white p-[5px] text-2xl rounded-md"
                                  />
                                </div>
                              </div>
                              <div
                                onClick={() => handlePropertyDelete(item._id)}
                              >
                                <BsTrash
                                  title={`Delete ${item.propertyName}`}
                                  className="bg-red-500 text-white p-[5px] text-2xl rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 ">
                            <div
                              className="flex items-center bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer gap-2 justify-center"
                              onClick={() => handleShowUnits(item.propertyName)}
                            >
                              <p>
                                <BsPen />
                              </p>
                              <p>Manage Units</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* other stuff */}
      {showUnits && (
        <>
          {/* manage units */}
          <div className="mt-8 unitShadow p-2 rounded-md h-[60vh] overflow-y-scroll">
            {/* topbar */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl" style={{ fontWeight: 700 }}>
                  {currentunitName}'s units.{" "}
                </h2>
              </div>
              {/* search unit */}
              <div className="">
                <form className="bg-zinc-200 p-1 rounded-md">
                  <input
                    type="text"
                    placeholder="Search Unit Details"
                    className="bg-transparent p-[5px] outline-none border-none"
                    value={unitsearchText}
                    onChange={handleUnitSearchChange}
                  />
                </form>
              </div>
              <div onClick={() => setShowCreateUnit(!showCreateUnit)}>
                <p className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer">
                  Create A Unit in {currentunitName}
                </p>
              </div>
              <div onClick={() => setShowUnits(false)}>
                <p className="bg-red-500 text-white p-[10px] rounded-md cursor-pointer">
                  Hide Units in {currentunitName}
                </p>
              </div>
            </div>

            {/* create unit */}
            {showCreateUnit && (
              <div>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleCreateUnit}
                >
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
                      value={unitName}
                      onChange={(e) => setUnitName(e.target.value)}
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
                      required
                      value={unitRent}
                      onChange={(e) => setUnitRent(e.target.value)}
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
                      required
                      value={unitRentDeposit}
                      onChange={(e) => setUnitRentDeposit(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="waterDeposit"
                      style={{ fontWeight: 700 }}
                      className="text-md"
                    >
                      Water Deposit
                    </label>
                    <input
                      type="number"
                      placeholder="Enter deposit"
                      id="location"
                      style={{ border: "1px solid black" }}
                      className="p-[8px] rounded-md"
                      required
                      value={unitWaterDeposit}
                      onChange={(e) => setUnitWaterDeposit(e.target.value)}
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
                      value={unitInvestorName}
                      onChange={(e) => setUnitInvestorName(e.target.value)}
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
                      required
                      value={unitUnpaidDues}
                      onChange={(e) => setUnitUnpaidDues(e.target.value)}
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
                      required
                      value={unitWaterReading}
                      onChange={(e) => setUnitWaterReading(e.target.value)}
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
                      required
                      value={unitVacancy}
                      onChange={(e) => setUnitVacancy(e.target.value)}
                    >
                      <option value="occupied">Occupied</option>
                      <option value="vacant">Vacant</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                      onClick={handleCreateUnit}
                    >
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

            {/* update details Form  */}
            {showUpdateUnit && (
              <div>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleUpdateUnit}
                >
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
                      value={unitName}
                      onChange={(e) => setUnitName(e.target.value)}
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
                      required
                      value={unitRent}
                      onChange={(e) => setUnitRent(e.target.value)}
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
                      required
                      value={unitRentDeposit}
                      onChange={(e) => setUnitRentDeposit(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="waterDeposit"
                      style={{ fontWeight: 700 }}
                      className="text-md"
                    >
                      Water Deposit
                    </label>
                    <input
                      type="number"
                      placeholder="Enter deposit"
                      id="location"
                      style={{ border: "1px solid black" }}
                      className="p-[8px] rounded-md"
                      required
                      value={unitWaterDeposit}
                      onChange={(e) => setUnitWaterDeposit(e.target.value)}
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
                      value={unitInvestorName}
                      onChange={(e) => setUnitInvestorName(e.target.value)}
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
                      required
                      value={unitUnpaidDues}
                      onChange={(e) => setUnitUnpaidDues(e.target.value)}
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
                      required
                      value={unitWaterReading}
                      onChange={(e) => setUnitWaterReading(e.target.value)}
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
                      required
                      value={unitVacancy}
                      onChange={(e) => setUnitVacancy(e.target.value)}
                    >
                      <option value="occupied">Occupied</option>
                      <option value="vacant">Vacant</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                      onClick={handleUpdateUnit}
                    >
                      Update Unit
                    </button>
                  </div>
                  <div>
                    <p
                      className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                      onClick={() => setShowUpdateUnit(false)}
                    >
                      Hide this section
                    </p>
                  </div>
                </form>
              </div>
            )}

            {/* display mexico units */}
            <div className="unitWrapper">
              {/*  */}

              {unit.length < 1 && (
                <div className=" mt-[4em]">
                  <p className="text-3xl" style={{ fontWeight: 600 }}>
                    No Unit Currently in {currentunitName}
                  </p>
                </div>
              )}

              {unitsearchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing Resuls for{" "}
                  <span className="text-[#222328]">{unitsearchText}</span>:
                </h2>
              )}

              {unitsearchText ? (
                <>
                  {unitSearchedResults?.map((item) => (
                    <div className="unitShadow mb-2 p-2 mt-3" key={item._id}>
                      <div className="flex justify-between gap-[10px] mb-2">
                        <p>
                          Unit Name:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitName}
                          </span>
                        </p>
                        <p>
                          Investor:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitInvestorName}
                          </span>
                        </p>
                      </div>
                      <div className="mb-2">
                        <p>
                          Rent Deposit:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitRentDeposit}
                          </span>{" "}
                        </p>
                        <p>
                          Rent per month:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitRent}
                          </span>
                        </p>
                        <p>
                          Water Deposit:{" "}
                          {item.unitWaterDeposit ? (
                            <span style={{ fontWeight: 700 }}>
                              {item.unitWaterDeposit}
                            </span>
                          ) : (
                            <span style={{ fontWeight: 700 }}>Unset</span>
                          )}
                        </p>
                        <p>
                          Extra Charges:{" "}
                          <span style={{ fontWeight: 700 }}>
                            Ksh.{item.unitUnpaidDues}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Current Water Reading:{" "}
                          <span style={{ fontWeight: 700 }}>
                            Ksh.{item.unitWaterReading}
                          </span>
                        </p>
                      </div>
                      <div className="mt-4 mb-4 flex justify-between items-center">
                        <div>
                          Status:{" "}
                          <span className="bg-green-700 text-white p-[5px] rounded-md text-sm">
                            {item.unitVacancy}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            setShowUpdateUnit(true);
                            setUnitUpdateId(item._id);
                            setupdateunitName(item.unitName);
                            setupdateUnitRent(item.unitRent);
                            setupdateunitRentDeposit(item.unitRentDeposit);
                            setupdateunitWaterDeposit(item.unitWaterDeposit);
                            setupdateunitInvestorName(item.unitInvestorName);
                            setupdateunitUnpaidDues(item.unitUnpaidDues);
                            setupdateunitWaterReading(item.unitWaterReading);
                            setupdateunitVacancy(item.unitVacancy);
                          }}
                        >
                          <p>
                            <BsPen className="text-[#146C94]" />
                          </p>
                          <p>Edit {item.unitName}</p>
                        </div>
                        <div
                          className="flex items-center gap-2  bg-red-700 text-white rounded-md p-1 cursor-pointer"
                          onClick={() => handleDeleteUnit(item._id)}
                        >
                          <p>
                            <BsTrash className="" />
                          </p>
                          <p>Delete {item.unitName}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {unit?.map((item) => (
                    <div className="unitShadow mb-2 p-2 mt-3" key={item._id}>
                      <div className="flex justify-between gap-[10px] mb-2">
                        <p>
                          Unit Name:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitName}
                          </span>
                        </p>
                        <p>
                          Investor:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitInvestorName}
                          </span>
                        </p>
                      </div>
                      <div className="mb-2">
                        <p>
                          Rent Deposit:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitRentDeposit}
                          </span>{" "}
                        </p>
                        <p>
                          Rent per month:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {item.unitRent}
                          </span>
                        </p>
                        <p>
                          Water Deposit:{" "}
                          {item.unitWaterDeposit ? (
                            <span style={{ fontWeight: 700 }}>
                              {item.unitWaterDeposit}
                            </span>
                          ) : (
                            <span style={{ fontWeight: 700 }}>Unset</span>
                          )}
                        </p>
                        <p>
                          Extra Charges:{" "}
                          <span style={{ fontWeight: 700 }}>
                            Ksh.{item.unitUnpaidDues}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Current Water Reading:{" "}
                          <span style={{ fontWeight: 700 }}>
                            Ksh.{item.unitWaterReading}
                          </span>
                        </p>
                      </div>
                      <div className="mt-4 mb-4 flex justify-between items-center">
                        <div>
                          Status:{" "}
                          <span className="bg-green-700 text-white p-[5px] rounded-md text-sm">
                            {item.unitVacancy}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            setShowUpdateUnit(true);
                            setUnitUpdateId(item._id);
                            setupdateunitName(item.unitName);
                            setupdateUnitRent(item.unitRent);
                            setupdateunitRentDeposit(item.unitRentDeposit);
                            setupdateunitWaterDeposit(item.unitWaterDeposit);
                            setupdateunitInvestorName(item.unitInvestorName);
                            setupdateunitUnpaidDues(item.unitUnpaidDues);
                            setupdateunitWaterReading(item.unitWaterReading);
                            setupdateunitVacancy(item.unitVacancy);
                          }}
                        >
                          <p>
                            <BsPen className="text-[#146C94]" />
                          </p>
                          <p>Edit {item.unitName}</p>
                        </div>
                        <div
                          className="flex items-center gap-2 bg-red-700 text-white rounded-md p-1 cursor-pointer"
                          onClick={() => handleDeleteUnit(item._id)}
                        >
                          <p>
                            <BsTrash className="" />
                          </p>
                          <p>Delete {item.unitName}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Properties;
