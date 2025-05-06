import { useContext, useEffect, useState } from "react";
import getUsers from "./Users";
import { useParams } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";

const UserDetails = () => {
  const { id } = useParams();

  const { webTheme, setWebTheme } = useContext(ThemeContext);

  const [allUser, setAllUser] = useState([]);
  const usersDetails = async () => {
    const details = await getUsers();

    setAllUser([...details?.users]);
  };

  useEffect(() => {
    usersDetails();
  }, [id]);

  const userDetail = allUser.find((data) => data.id == id);

  if (!userDetail) {
    return (
      <div
        className={`h-[80vh] flex items-center justify-center ${
          webTheme === "dark" ? "bg-gray-700" : "bg-white"
        }`}
      >
        <p
          className={`text-xl font-semibold ${
            webTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          User not found
        </p>
      </div>
    );
  }

  const { image, firstName, lastName, email, username, phone, company } =
    userDetail;

  const { department, title } = company;
  return (
    <div
      className={`h-[80vh] flex items-center justify-center ${
        webTheme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div
        className={`border-4 p-5 max-w-xs text-center rounded-md ${
          webTheme === "dark"
            ? "border-white shadow-lg shadow-gray-300/40"
            : "border-black shadow-lg shadow-gray-700/40"
        }`}
      >
        <h2
          className={`text-lg font-semibold mb-4 ${
            webTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          User Details
        </h2>
        <img
          src={image}
          alt="User Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <ul
          className={`list-none p-0 space-y-2 ${
            webTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <li>
            <strong>Name:</strong> {firstName} {lastName}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Username:</strong> {username}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Department:</strong> {department || "N/A"}
          </li>
          <li>
            <strong>Title:</strong> {title || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
