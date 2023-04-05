import axios from "../../axios";

// get all my tenants
const getTenant = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/tenant", config);
  return response.data;
};

// create tenant
const createTenant = async (tenantData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/tenant", tenantData, config);
  return response.data;
};

const tenantService = {
  getTenant,
  createTenant,
};

export default tenantService;
