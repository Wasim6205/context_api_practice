import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserStore } from "../context/UserContext";
import { nanoid } from "nanoid";

const Form = () => {
  const { setUsersData, setToggle, isEditedUser, setIsEditedUser } =
    useContext(UserStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: isEditedUser
      ? isEditedUser
      : {
          name: "",
          email: "",
          phone: "",
          imageUrl: "",
        },
  });

  const handleAddUser = (data) => {
    if (isEditedUser) {
      setUsersData((prev) => {
        let updatedArr = prev.map((user) =>
          user.id === isEditedUser.id ? { ...data, id: isEditedUser.id } : user,
        );
        return updatedArr;
      });
      setIsEditedUser(null);
      setToggle(false);
      return;
    } else {
      setUsersData((prev) => [...prev, { ...data, id: nanoid() }]);
    }
    setToggle(false);
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-indigo-100/50">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {isEditedUser ? "Edit" : "Create"} Profile
          </h1>
          <p className="mt-2 text-sm text-gray-500">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit(handleAddUser)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              {...register("name", {
                minLength: {
                  value: 3,
                  message: "Minimum 3 character required",
                },
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              {...register("phone", {
                minLength: {
                  value: 10,
                  message: "Minimum 10 digits are required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 digits are allowed",
                },
              })}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Image URL
            </label>
            <input
              {...register("imageUrl", {
                required: "Image are reuqired",
              })}
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            {isEditedUser ? "Save" : "Create"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Please make sure your details are correct.
        </p>
      </div>
    </div>
  );
};

export default Form;
