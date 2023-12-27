import React, { useState } from "react";

const AddProductSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {isDropdownOpen && (
        <div className="bg-gray-950 bg-opacity-30 absolute inset-0 z-40"></div>
      )}

      <div className="mt-8 ml-20 mx-auto rounded-md absolute  top-0 w-[500px] z-50">
        <button
          onClick={toggleDropdown}
          className="border ml-4 mt-2 px-2 py-2 rounded-full hover:bg-gray-100 hover:shadow-md"
        >
          Add Product
        </button>

        {isDropdownOpen && (
          <div className="mt-24 p-4 mr-4 rounded-md shadow-md border bg-gray-50">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  className="mt-1 p-2 w-full outline-none rounded-md border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="mt-1 p-2 w-full outline-none rounded-md border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Stock
                </label>
                <input
                  type="text"
                  name="stock"
                  className="mt-1 p-2 w-full outline-none rounded-md border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Cost Price
                </label>
                <input
                  type="text"
                  name="costPrice"
                  className="mt-1 p-2 w-full outline-none rounded-md border"
                />
              </div>
              <button
                type="submit"
                className="px-2 py-2 rounded-full border shadow-sm hover:bg-gray-100"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductSection;
