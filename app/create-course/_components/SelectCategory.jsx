import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5">Select the course category</h2>
      <div className="grid grid-cols-3 gap-10  ">
        {CategoryList.map((item, index) => (
          <div key={item.id}
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-gray-800 cursor-pointer ${
              userCourseInput?.category == item.name &&
              "border-primary bg-gray-700"
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} rel={"category"} alt="category" width={50} height={50} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
