import React from 'react';
import Orders from './orders';



const ProductsOrder = () => {
  const orders = [
    {
      name: 'Vera Carpenter',
      product: 'iphone',
      createdAt: 'Jan 21, 2020',
      qrt: '43',
      status: { label: 'Activo', color: 'green' },
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=...',
    },
    {
        name: 'Vera Carpenter',
        product: 'iphone',
        createdAt: 'Jan 21, 2020',
        qrt: '43',
        status: { label: 'Activo', color: 'green' },
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=...',
      },
      {
        name: 'Vera Carpenter',
        product: 'iphone',
        createdAt: 'Jan 21, 2020',
        qrt: '43',
        status: { label: 'Activo', color: 'green' },
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=...',
      },
    // Add more product entries as needed
  ];

  return (
    <div className="bg-white p-8 rounded-md w-full">
    <div className="flex items-center justify-between pb-6">
      <div>
        <h2 className="text-gray-600 font-semibold">Products Order</h2>
        <span className="text-xs">All products item</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex bg-gray-50 items-center p-2 rounded-md ml-5">
         
          <input
            className="bg-gray-50 outline-none ml-3 block "
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-8">
         
          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
            Create
          </button>
        </div>
      </div>
    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Products
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                QRT
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Orders key={index} {...order} />
            ))}
          </tbody>
        </table>
      
      </div>
    </div>
  </div>
  );
};

export default ProductsOrder;
