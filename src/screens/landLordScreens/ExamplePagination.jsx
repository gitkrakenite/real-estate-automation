import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTenant } from "../../features/tenant/tenantSlice";
import moment from "moment";
import "./example.css";

const ExamplePagination = () => {
  const { tenant, isError, isSuccess, isLoading } = useSelector(
    (state) => state.tenant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error("Cannot fetch Tenants");
      return;
    }
    dispatch(getTenant());
  }, [isError, isSuccess]);

  //   pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tenant.slice(firstIndex, lastIndex);
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
      <p className="mb-5">View All Tenants</p>
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
              className={`normal-nav ${currentPage === item && "active-nav"}`}
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
  );
};

export default ExamplePagination;
