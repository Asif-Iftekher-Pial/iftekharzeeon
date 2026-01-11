import React, { useState } from "react";
import Sidebar from "../ui/SIdebar";
import Header from "../ui/Header";
import Chips from "../ui/Chips";
import { RxCross2 } from "react-icons/rx";
import { FaGreaterThan, FaPlus } from "react-icons/fa6";
import { FaSortAmountDown } from "react-icons/fa";
import Table from "../tables/Table";
import { FaLessThan } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header Filters */}
      <div className="bg-white border-b border-gray-300 px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Filters:</span>

            <Chips
              title="Add Location"
              bgColor="#EFF6FF"
              textColor="#3B82F6"
              appendIcon={<RxCross2 className="text-[#3B82F6]" />}
            />

            <Chips
              title="In Stock"
              bgColor="#EFF6FF"
              textColor="#3B82F6"
              appendIcon={<RxCross2 className="text-[#3B82F6]" />}
            />

            <button className="flex items-center gap-1 text-sm font-medium border border-gray-300 rounded-lg px-3 py-1">
              <FaPlus />
              Add filter
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex justify-between md:justify-end items-center gap-3">
            <span className="text-sm text-gray-500">284 items</span>
            <button className="flex items-center gap-1 text-sm font-medium border border-gray-300 rounded-lg px-3 py-1">
              <FaSortAmountDown />
              Sort
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <main className="p-4">
        <Table />
      </main>
    </div>
  );
}
export default Dashboard;
