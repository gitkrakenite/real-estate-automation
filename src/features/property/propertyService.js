import axios from "../../axios";

// get all properties
const getProperties = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/property", config);
  return response.data;
};

// create property
const createProperty = async (propertyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/property", propertyData, config);
  return response.data;
};

const postService = {
  getProperties,
  createProperty,
};

export default postService;
