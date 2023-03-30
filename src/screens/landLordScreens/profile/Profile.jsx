import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  const { user } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user]);

  return (
    <div>
      <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
