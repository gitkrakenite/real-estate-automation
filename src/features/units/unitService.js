import axios from "../../axios";

// get all units
const getunits = async (propertyData, token) => {
  console.log(propertyData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    "http://localhost:5000/api/v1/unit/fetchunits",
    propertyData,
    config
  );
  return response.data;
};

// create unit
const createUnit = async (unitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/unit", unitData, config);
  return response.data;
};

const unitService = {
  getunits,
  createUnit,
};

export default unitService;
