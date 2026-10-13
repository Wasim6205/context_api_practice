import { useContext } from "react";
import { UserStore } from "../context/UserContext";

const UserCard = ({user}) => {

    const {deleteUser,setIsEditedUser,setToggle} = useContext(UserStore)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Card Header */}
        <div className="h-28 bg-gradient-to-r from-indigo-500 to-purple-600" />

        {/* Profile Image */}
        <div className="-mt-14 flex justify-center">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* User Details */}
        <div className="px-6 pb-7 pt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>

          <p className="mt-1 text-sm font-medium text-indigo-500">
            User Profile
          </p>

          <div className="mt-6 space-y-3 text-left">
            {/* Email */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="truncate text-sm font-medium text-gray-700">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">Phone Number</p>
                <p className="text-sm font-medium text-gray-700">
                  {user.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex gap-3">
  <button
  onClick={() => {
    setIsEditedUser(user)
    setToggle((prev) => !prev)
  }}
    type="button"
    className="flex-1 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 active:scale-95"
  >
    Edit
  </button>

  <button
  onClick={() => deleteUser(user.id)}
    type="button"
    className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white shadow-md shadow-red-200 transition hover:bg-red-600 active:scale-95"
  >
    Delete
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
