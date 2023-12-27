import React from 'react';

const Orders = ({ name, product, createdAt, qrt, status, imageUrl }) => (
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="w-full h-full rounded-full" src={imageUrl} alt="" />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{product}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{createdAt}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{qrt}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span
        className={`relative inline-block px-3 py-1 font-semibold text-${status.color}-900 leading-tight`}
      >
        <span
          aria-hidden
          className={`absolute inset-0 bg-${status.color}-200 opacity-50 rounded-full`}
        ></span>
        <span className="relative">{status.label}</span>
      </span>
    </td>
  </tr>
);

export default Orders;
