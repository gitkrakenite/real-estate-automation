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

  // update tenant state
  const [updateTenantName, setupdateTenantName] = useState("");
  const [updateTenantemailAddress, setupdateTenantemailAddress] = useState("");
  const [updateTenantIdNumber, setupdateTenantIdNumber] = useState("");
  const [updateTenantkraPin, setupdateTenantkraPin] = useState("");
  const [updateTenantMobile, setupdateTenantMobile] = useState("");
  const [updateTenantMaritalStatus, setupdateTenantMaritalStatus] =
    useState("");
  const [updatePropertyToOccupy, setupdatePropertyToOccupy] = useState("");
  const [updateunitAssigned, setupdateunitAssigned] = useState("");
  const [updatedepositStatus, setupdateDepositStatus] = useState("");
  const [updateTenantUnPaidDues, setupdateTenantUnPaidDues] = useState("");
  const [updateTenantPhoto, setupdateTenantPhoto] = useState("");
  const [deleteTenant, setDeleteTenant] = useState("");
  const [tenantUpdateId, setTenantUpdateId] = useState("");

  useEffect(() => {
    setTenantName(updateTenantName);
    setTenantemailAddress(updateTenantemailAddress);
    setTenantIdNumber(updateTenantIdNumber);
    setTenantkraPin(updateTenantkraPin);
    setTenantMobile(updateTenantMobile);
    setTenantMaritalStatus(updateTenantMaritalStatus);
    setPropertyToOccupy(updatePropertyToOccupy);
    setunitAssigned(updateunitAssigned);
    setDepositStatus(updatedepositStatus);
    setTenantUnPaidDues(updateTenantUnPaidDues);
    setTenantPhoto(updateTenantPhoto);
  }, [updateTenantName, updateTenantkraPin, updateTenantUnPaidDues]);

  useEffect(() => {
    setDeleteTenant("hidden");
  }, [deleteTenant]);

  // const handleUpdateTenant = (tenantName) => {

  // };

  // setUpdateTenant(true);

  const handleUpdateTenant = async (e) => {
    e.preventDefault();
    try {
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
      await axios.put("/tenant/" + tenantUpdateId, tenantData);
      setReloadTenants(!reloadTenants);
      toast.success("Updated Succesfully");

      setUpdateTenant(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDeleteTenant = async (tenanttoDeleteId) => {
    let shouldDelete = confirm("Tenant will be removed from property ?");

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

  //   pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tenant.slice(firstIndex, lastIndex);
  const searchedrecords = searchedResults?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(tenant.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
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
            <form className="flex flex-col gap-4" onSubmit={handleUpdateTenant}>
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
                  onClick={handleUpdateTenant}
                >
                  Update {tenantName}
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
        <div className="">
          <div className="flex gap-4 flex-wrap ">
            {isLoading ? (
              <div className="flex justify-center items-center h-[50vh] w-full ">
                <Spinner message="Fetching Tenants" />
              </div>
            ) : (
              <>
                {searchText ? (
                  <>
                    <table className="react-table">
                      <thead>
                        <th>TENANT NAME</th>
                        <th>TENANT PHONE</th>
                        <th>PROPERTY NAME</th>
                        <th>UNIT NAME</th>
                        <th>OCCUPATION DATE</th>
                        <th>UNPAID DUES</th>
                        <th>EDIT</th>
                      </thead>
                      <tbody>
                        {searchedrecords?.map((item) => (
                          <tr key={item._id}>
                            <td>{item.tenantName}</td>
                            <td>{item.tenantMobile}</td>
                            <td>{item.propertyToOccupy}</td>
                            <td>{item.unitAssigned}</td>
                            <td>{moment(item.createdAt).fromNow()}</td>
                            <td>{item.tenantUnPaidDues}</td>
                            <td>
                              <p
                                className="text-[#146C94] cursor-pointer"
                                // onClick={() => {
                                //   setUpdateTenant(true);
                                //   setTenantUpdateId(item._id);
                                //   setupdateTenantName(item.tenantName);
                                //   setupdateTenantemailAddress(
                                //     item.tenantemailAddress
                                //   );
                                //   setupdateTenantIdNumber(item.tenantIdNumber);
                                //   setupdateTenantkraPin(item.tenantkraPin);
                                //   setupdateTenantMobile(item.tenantMobile);
                                //   setupdateTenantMaritalStatus(
                                //     item.tenantMaritalStatus
                                //   );
                                //   setupdatePropertyToOccupy(item.propertyToOccupy);
                                //   setupdateunitAssigned(item.unitAssigned);
                                //   setupdateDepositStatus(item.depositStatus);
                                //   setupdateTenantUnPaidDues(item.tenantUnPaidDues);
                                //   setupdateTenantPhoto(item.tenantPhoto);
                                // }}
                              >
                                Edit {item.tenantName.split(" ")[0]}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <table className="react-table">
                      <thead>
                        <th>TENANT NAME</th>
                        <th>TENANT PHONE</th>
                        <th>PROPERTY NAME</th>
                        <th>UNIT NAME</th>
                        <th>OCCUPATION DATE</th>
                        <th>UNPAID DUES</th>
                        <th>EDIT</th>
                      </thead>
                      <tbody>
                        {records?.map((item) => (
                          <tr key={item._id}>
                            <td>{item.tenantName}</td>
                            <td>{item.tenantMobile}</td>
                            <td>{item.propertyToOccupy}</td>
                            <td>{item.unitAssigned}</td>
                            <td>{moment(item.createdAt).fromNow()}</td>
                            <td>{item.tenantUnPaidDues}</td>
                            <td>
                              <p
                                className="text-[#146C94] cursor-pointer"
                                onClick={() => {
                                  setUpdateTenant(true);
                                  setTenantUpdateId(item._id);
                                  setupdateTenantName(item.tenantName);
                                  setupdateTenantemailAddress(
                                    item.tenantemailAddress
                                  );
                                  setupdateTenantIdNumber(item.tenantIdNumber);
                                  setupdateTenantkraPin(item.tenantkraPin);
                                  setupdateTenantMobile(item.tenantMobile);
                                  setupdateTenantMaritalStatus(
                                    item.tenantMaritalStatus
                                  );
                                  setupdatePropertyToOccupy(
                                    item.propertyToOccupy
                                  );
                                  setupdateunitAssigned(item.unitAssigned);
                                  setupdateDepositStatus(item.depositStatus);
                                  setupdateTenantUnPaidDues(
                                    item.tenantUnPaidDues
                                  );
                                  setupdateTenantPhoto(item.tenantPhoto);
                                }}
                              >
                                Edit {item.tenantName.split(" ")[0]}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </>
            )}
          </div>
          {/*  */}
          {/* nav numbers */}
          <nav className="flex justify-end">
            <ul className="flex gap-[2em] mt-[10px] px-[5px] py-[10px] items-center">
              <li>
                <a href="#" onClick={prevPage}>
                  Prev
                </a>
              </li>

              {/* map */}

              {numbers.map((item, index) => (
                <li
                  key={index}
                  className={`normal-nav ${
                    currentPage === item && "active-nav"
                  }`}
                >
                  <a href="#" onClick={() => changeCurrentPage(item)}>
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <a href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
