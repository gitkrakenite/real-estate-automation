import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./tenants.css";
import { dummyTenant } from "../../../DummyData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTenant } from "../../../features/tenant/tenantSlice";
import moment from "moment";
import Spinner from "../../../components/Spinner";
import { toast } from "react-hot-toast";
import { getUnit } from "../../../features/units/unitSlice";
import { createTenant } from "../../../features/tenant/tenantSlice";
import axios from "../../../axios";

const Tenants = () => {
  const [showCreateTenant, setShowCreateTenant] = useState(false);
  const [updateTenant, setUpdateTenant] = useState(false);
  const [currentunitName, setCurrentUnitName] = useState("");
  const [showUnit, setShowUnits] = useState(false);
  const [loading, setLoading] = useState(false);

  const [reloadTenants, setReloadTenants] = useState(false);

  const handleUpdateTenant = (tenantName) => {
    setUpdateTenant(true);
  };

  const dispatch = useDispatch();

  const { tenant, isError, isSuccess, isLoading } = useSelector(
    (state) => state.tenant
  );

  const { property } = useSelector((state) => state.properties);
  const { unit } = useSelector((state) => state.units);

  useEffect(() => {
    if (isError) {
      toast.error("Cannot fetch Tenants");
      return;
    }
    dispatch(getTenant());
  }, [isError, isSuccess, property, reloadTenants]);

  // create tenant state
  const [tenantName, setTenantName] = useState("");
  const [tenantemailAddress, setTenantemailAddress] = useState("");
  const [tenantIdNumber, setTenantIdNumber] = useState("");
  const [tenantkraPin, setTenantkraPin] = useState("");
  const [tenantMobile, setTenantMobile] = useState("");
  const [tenantMaritalStatus, setTenantMaritalStatus] = useState("");
  const [propertyToOccupy, setPropertyToOccupy] = useState("");
  const [unitAssigned, setunitAssigned] = useState("");
  const [depositStatus, setDepositStatus] = useState("");
  const [tenantUnPaidDues, setTenantUnPaidDues] = useState("");
  const [tenantPhoto, setTenantPhoto] = useState("");

  const handleShowUnits = () => {
    // setCurrentUnitName(propertyToOccupy);
    if (!propertyToOccupy) {
      console.log("Property Name required");
      return;
    } else {
      setLoading(true);
      const propertyData = {
        assignedPropertyName: propertyToOccupy,
      };
      // console.log(propertyData);
      dispatch(getUnit(propertyData));
      setLoading(false);
      setShowUnits(true);
    }
  };

  // search tenant
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search tenant func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = tenant?.filter(
          (item) =>
            item.tenantName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.tenantMaritalStatus
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.propertyToOccupy
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.unitAssigned
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.depositStatus
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.tenantIdNumber.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  const handleClear = () => {
    setTenantName("");
    setTenantemailAddress("");
    setTenantIdNumber("");
    setTenantkraPin("");
    setTenantMobile("");
    setTenantMaritalStatus("");
    setPropertyToOccupy("");
    setunitAssigned("");
    setDepositStatus("");
    setTenantUnPaidDues("");
    setTenantPhoto("");
  };

  const handleCreateTenant = (e) => {
    e.preventDefault();
    if (
      !tenantName ||
      !tenantemailAddress ||
      !propertyToOccupy ||
      !unitAssigned ||
      !tenantMobile
    ) {
      toast.error("details missing");
      return;
    } else {
      try {
        setLoading;
        const tenantData = {
          tenantName,
          tenantemailAddress,
          tenantIdNumber,
          tenantkraPin,
          tenantMobile,
          tenantMaritalStatus,
          propertyToOccupy,
          unitAssigned,
          depositStatus,
          tenantUnPaidDues,
          tenantPhoto,
        };

        // console.log(tenantData);

        dispatch(createTenant(tenantData));
        handleClear();
        setShowCreateTenant(false);
        toast.success("Created successfully");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const [deleteTenant, setDeleteTenant] = useState("");

  useEffect(() => {
    setDeleteTenant("hidden");
  }, [deleteTenant]);

  const handleDeleteTenant = async (tenanttoDeleteId) => {
    let shouldDelete = confirm("Are you sure you want to delete ?");

    if (shouldDelete) {
      try {
        const tenantData = {
          tenantStatus: deleteTenant,
        };
        console.log(tenantData);
        console.log(tenanttoDeleteId);
        await axios.put("/tenant/" + tenanttoDeleteId, tenantData);
        toast.success("Deleted Succesfully");
        setReloadTenants(!reloadTenants);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.success("Cancelled Deletion");
    }
  };

  useEffect(() => {
    handleShowUnits();
  }, [propertyToOccupy, dispatch]);

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
                required
                value={searchText}
                onChange={handleSearchChange}
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
            <form className="flex flex-col gap-4" onSubmit={handleCreateTenant}>
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
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
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
                  required
                  value={tenantemailAddress}
                  onChange={(e) => setTenantemailAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobile"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Tenant's phone number
                </label>
                <input
                  type="text"
                  placeholder="i.e 0756 xxxxxx"
                  id="mobile"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantMobile}
                  onChange={(e) => setTenantMobile(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="idNumber"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Tenant's ID / Passport number
                </label>
                <input
                  type="text"
                  placeholder="i.e 756xxxxxx"
                  id="idNumber"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantIdNumber}
                  onChange={(e) => setTenantIdNumber(e.target.value)}
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
                  required
                  value={tenantPhoto}
                  onChange={(e) => setTenantPhoto(e.target.value)}
                />
              </div>
              {/* <div className="flex flex-col gap-2">
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
                  required
                  value={tenantMobile}
                  onChange={(e) => setTenantMobile(e.target.value)}
                />
              </div> */}
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
                  placeholder="4556777"
                  id="kra"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantkraPin}
                  onChange={(e) => setTenantkraPin(e.target.value)}
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
                  required
                  value={tenantMaritalStatus}
                  onChange={(e) => setTenantMaritalStatus(e.target.value)}
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
                  Property To Occupy
                </label>
                <select
                  name=""
                  id="property"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={propertyToOccupy}
                  onChange={(e) => setPropertyToOccupy(e.target.value)}
                >
                  <option value="">Choose</option>
                  {property?.map((item) => (
                    <>
                      <option key={item._id} value={item.propertyName}>
                        {item.propertyName}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              {loading ? (
                <Spinner message={`Fetching ${propertyToOccupy}'s units`} />
              ) : (
                <>
                  {showUnit && (
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="unit"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Unit in {propertyToOccupy} Assigned to Tenant
                      </label>
                      <select
                        name=""
                        id="unit"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                        required
                        value={unitAssigned}
                        onChange={(e) => setunitAssigned(e.target.value)}
                      >
                        <option value="">Choose</option>
                        {unit?.map((item) => (
                          <>
                            <option key={item._id} value={item.unitName}>
                              {item.unitName}
                            </option>
                          </>
                        ))}
                      </select>
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="allDeposit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Paid All Deposits
                </label>
                <select
                  name=""
                  id="allDeposit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={depositStatus}
                  onChange={(e) => setDepositStatus(e.target.value)}
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
                  Total Unpaid Dues in Ksh.
                </label>
                <input
                  type="number"
                  placeholder="i.e 0"
                  id="unpaidDues"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantUnPaidDues}
                  onChange={(e) => setTenantUnPaidDues(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                  onClick={handleCreateTenant}
                >
                  Create Tenant Now
                </button>
              </div>
              <div>
                <p
                  className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                  onClick={() => setShowCreateTenant(false)}
                >
                  Hide this section
                </p>
              </div>
            </form>
          </div>
        )}
        <h2 className="mb-[1em] text-2xl">
          You have A total Of {tenant.length} Tenants
        </h2>

        {/* update Tenant */}
        {updateTenant && (
          <div className="mb-[1em]">
            <form className="flex flex-col gap-4" onSubmit={handleCreateTenant}>
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
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
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
                  required
                  value={tenantemailAddress}
                  onChange={(e) => setTenantemailAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobile"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Tenant's phone number
                </label>
                <input
                  type="text"
                  placeholder="i.e 0756 xxxxxx"
                  id="mobile"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantMobile}
                  onChange={(e) => setTenantMobile(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="idNumber"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Tenant's ID / Passport number
                </label>
                <input
                  type="text"
                  placeholder="i.e 756xxxxxx"
                  id="idNumber"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantIdNumber}
                  onChange={(e) => setTenantIdNumber(e.target.value)}
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
                  required
                  value={tenantPhoto}
                  onChange={(e) => setTenantPhoto(e.target.value)}
                />
              </div>
              {/* <div className="flex flex-col gap-2">
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
                  required
                  value={tenantMobile}
                  onChange={(e) => setTenantMobile(e.target.value)}
                />
              </div> */}
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
                  placeholder="4556777"
                  id="kra"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantkraPin}
                  onChange={(e) => setTenantkraPin(e.target.value)}
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
                  required
                  value={tenantMaritalStatus}
                  onChange={(e) => setTenantMaritalStatus(e.target.value)}
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
                  Property To Occupy
                </label>
                <select
                  name=""
                  id="property"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={propertyToOccupy}
                  onChange={(e) => setPropertyToOccupy(e.target.value)}
                >
                  <option value="">Choose</option>
                  {property?.map((item) => (
                    <>
                      <option key={item._id} value={item.propertyName}>
                        {item.propertyName}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              {loading ? (
                <Spinner message={`Fetching ${propertyToOccupy}'s units`} />
              ) : (
                <>
                  {showUnit && (
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="unit"
                        style={{ fontWeight: 700 }}
                        className="text-md"
                      >
                        Unit in {propertyToOccupy} Assigned to Tenant
                      </label>
                      <select
                        name=""
                        id="unit"
                        style={{ border: "1px solid black" }}
                        className="p-[8px] rounded-md"
                        required
                        value={unitAssigned}
                        onChange={(e) => setunitAssigned(e.target.value)}
                      >
                        <option value="">Choose</option>
                        {unit?.map((item) => (
                          <>
                            <option key={item._id} value={item.unitName}>
                              {item.unitName}
                            </option>
                          </>
                        ))}
                      </select>
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="allDeposit"
                  style={{ fontWeight: 700 }}
                  className="text-md"
                >
                  Paid All Deposits
                </label>
                <select
                  name=""
                  id="allDeposit"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={depositStatus}
                  onChange={(e) => setDepositStatus(e.target.value)}
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
                  Total Unpaid Dues in Ksh.
                </label>
                <input
                  type="number"
                  placeholder="i.e Ksh.0"
                  id="unpaidDues"
                  style={{ border: "1px solid black" }}
                  className="p-[8px] rounded-md"
                  required
                  value={tenantUnPaidDues}
                  onChange={(e) => setTenantUnPaidDues(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer text-center w-full"
                  onClick={handleCreateTenant}
                >
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

        {searchText && (
          <h2 className="font-medium text-[#666e75] text-xl mb-3">
            Showing Resuls for{" "}
            <span className="text-[#222328]">{searchText}</span>:
          </h2>
        )}

        {/* tenant info */}
        <div className="h-[70vh] overflow-y-scroll">
          <div className="flex gap-4 flex-wrap ">
            {isLoading ? (
              <div className="flex justify-center items-center h-[50vh] w-full ">
                <Spinner message="Fetching Tenants" />
              </div>
            ) : (
              <>
                {searchText ? (
                  <>
                    {searchedResults?.map((item) => (
                      <div key={item._id} className="unitShadow p-3 rounded-md">
                        <div className="flex justify-center mb-3">
                          <img
                            src={item.tenantPhoto}
                            alt=""
                            className="w-[120px] h-[210px] object-cover rounded-full"
                          />
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Name:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {" "}
                              {item.tenantName}
                            </span>
                          </p>
                          <p>
                            Email:{" "}
                            <a href={`mailto:${item.tenantemailAddress}`}>
                              <span style={{ fontWeight: 700 }}>
                                {item.tenantemailAddress}
                              </span>
                            </a>
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Phone:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantMobile}
                            </span>{" "}
                          </p>
                          <p>
                            KRA:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantkraPin}
                            </span>{" "}
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Marital Status:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantMaritalStatus}
                            </span>{" "}
                          </p>
                        </div>
                        <div className="flex justify-between gap-4 mb-1 mt-1">
                          <p>
                            Property Assigned:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.propertyToOccupy}
                            </span>
                          </p>
                          <p>
                            Unit Assigned:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.unitAssigned}
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1 gap-3 flex-wrap">
                          <p>
                            Paid Rent Deposit:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.depositStatus}
                            </span>{" "}
                          </p>
                          <p>
                            Total Unpaid Dues:{" "}
                            <span style={{ fontWeight: 700 }}>
                              Ksh.{item.tenantUnPaidDues}
                            </span>{" "}
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>Created {moment(item.createdAt).fromNow()}</div>
                          <div>Updated {moment(item.updatedAt).fromNow()}</div>
                        </div>
                        <div className="h-[4px] bg-zinc-500 mt-3 mb-3 rounded-md" />
                        <div className="flex justify-between">
                          <button
                            className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer"
                            onClick={() => handleUpdateTenant(item.name)}
                          >
                            Update {item.tenantName.split(" ")[0]}
                          </button>
                          <button
                            className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer"
                            onClick={() => handleDeleteTenant(item._id)}
                          >
                            Delete Tenant
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {tenant?.map((item) => (
                      <div key={item._id} className="unitShadow p-3 rounded-md">
                        <div className="flex justify-center mb-3">
                          <img
                            src={item.tenantPhoto}
                            alt=""
                            className="w-[130px] h-[210px] object-cover rounded-full"
                          />
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Name:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {" "}
                              {item.tenantName}
                            </span>
                          </p>
                          <p>
                            Email:{" "}
                            <a href={`mailto:${item.tenantemailAddress}`}>
                              <span style={{ fontWeight: 700 }}>
                                {item.tenantemailAddress}
                              </span>
                            </a>
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Phone:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantMobile}
                            </span>{" "}
                          </p>
                          <p>
                            KRA:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantkraPin}
                            </span>{" "}
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1">
                          <p>
                            Marital Status:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.tenantMaritalStatus}
                            </span>{" "}
                          </p>
                        </div>
                        <div className="flex justify-between gap-4 mb-1 mt-1">
                          <p>
                            Property Assigned:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.propertyToOccupy}
                            </span>
                          </p>
                          <p>
                            Unit Assigned:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.unitAssigned}
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between mb-1 mt-1 gap-3 flex-wrap">
                          <p>
                            Paid Rent Deposit:{" "}
                            <span style={{ fontWeight: 700 }}>
                              {item.depositStatus}
                            </span>{" "}
                          </p>
                          <p>
                            Total Unpaid Dues:{" "}
                            <span style={{ fontWeight: 700 }}>
                              Ksh.{item.tenantUnPaidDues}
                            </span>{" "}
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>Created {moment(item.createdAt).fromNow()}</div>
                          <div>Updated {moment(item.updatedAt).fromNow()}</div>
                        </div>
                        <div className="h-[4px] bg-zinc-500 mt-3 mb-3 rounded-md" />
                        <div className="flex justify-between">
                          <button
                            className="bg-[#146C94] text-white p-[10px] rounded-md cursor-pointer"
                            onClick={() => handleUpdateTenant(item.name)}
                          >
                            Update {item.tenantName.split(" ")[0]}
                          </button>
                          <button
                            className="bg-red-700 text-white p-[10px] rounded-md cursor-pointer"
                            onClick={() => handleDeleteTenant(item._id)}
                          >
                            Delete Tenant
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
