import React from 'react'
import { FaEllipsisVertical, FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Chips from '../ui/Chips';
import { useNavigate } from "react-router-dom";
const tableData = [
    {
        orderId: "#1234",
        product: "Apple Watch",
        model: "UHDG6745",
        location: ['garage', 'Tool Cabinets'],
        qty: "1",
        labels: ['Power Tools', 'Warranty'],
        date: "2 days ago",
    },
    {
        orderId: "#1235",
        product: "Samsung Galaxy S21",
        model: "SGS21-256",
        location: 'living room',
        qty: "1",
        labels: ['Electronics', 'Warranty'],
        date: "2 days ago",
    },
    {
        orderId: "#1236",
        product: "Sony WH-1000XM4",
        model: "WH1000XM4",
        location: ['garage', 'Tool Cabinets'],
        qty: "1",
        labels: ['Appliances', 'Electronics'],
        date: "2 days ago",
    },
    {
        orderId: "#1237",
        product: "Apple Watch",
        model: "UHDG6745",
        location: ['Home Exterior', 'Garden Shed'],
        qty: "1",
        labels: ['Outdoor', 'Seasonal'],
        date: "2 days ago",
    },
    {
        orderId: "#1238",
        product: "Dell XPS 13",
        model: "XPS13-9310",
        location: ['kitchen', 'Pantry'],
        qty: "1",
        labels: ['Electronics', 'Warranty', 'High value'],
        date: "2 days ago",
    }

];
const getStatusColorByStatus = (label) => {
    switch (label) {
        case "Power Tools":
            return "#DBEAFE";
        case "Electronics":
            return "#F3E8FF";
        case "Warranty":
            return "#DCFCE7";
        case "High value":
            return "#FEE2E2";
        case "Outdoor":
            return "#CCFBF1";
        case "Seasonal":
            return "#FEF9C3";
        default:
            return "#FFEDD5";
    }
};
const getTextColorByStatus = (label) => {
    switch (label) {
        case "Power Tools":
            return "#1D4ED8";
        case "Electronics":
            return "#7E22CE";
        case "Warranty":
            return "#15803D";
        case "High value":
            return "#EF4444";
        case "Outdoor":
            return "#0F766E";
        case "Seasonal":
            return "#A16207";
        default:
            return "#EF4444";
    }
};
function Table() {
    const navigate = useNavigate();
    return (
        <>

            <div className=" bg-white border border-b-0 border-gray-300 rounded-t-lg overflow-x-auto ">
                <table className="min-w-250 w-full">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-300">
                            {/* checkbox */}
                            <th className="p-4">
                                <input type="checkbox" />
                            </th>
                            <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                                Items
                            </th>
                            <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                                Location
                            </th>
                            <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                                Labels
                            </th>
                            <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                                Quantity
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-slate-600 hidden md:table-cell">
                                Updated
                            </th>
                            <th className="text-left  p-4 text-sm font-semibold text-slate-600 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="border-b border-slate-200/50  hover:bg-slate-50/50  transition-colors"
                                >
                                    {/* checkbox */}
                                    <td className="p-4 text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-4 sm:flex flex-row items-center">
                                        <div>
                                            <img src="https://picsum.photos/id/237/200/300" className="w-10 h-10 rounded-lg mr-2 shrink-0" alt="" srcset="" />
                                        </div>
                                        <div onClick={() => navigate(`/inventory/${index+1}`)} className='flex flex-col cursor-pointer'>
                                            <span className="text-sm font-medium text-blue">
                                                {item.product}
                                            </span>
                                            <span className="text-xs text-slate-500 ">
                                                Model:
                                            </span>
                                            <span className="text-xs text-slate-500 ">
                                                {item.model}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4">

                                        <div className="text-sm text-slate-700 flex flex-wrap gap-1">
                                            {Array.isArray(item.location) ? item.location.join('  > ') : item.location}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {item.labels.map((label, idx) => (
                                            <div className="m-1 inline-block">
                                                <Chips key={idx} title={label} bgColor={getStatusColorByStatus(label)} textColor={getTextColorByStatus(label)} />
                                            </div>
                                        ))}
                                    </td>
                                    <td className="p-4">
                                        <span className="text-bold text-sm text-slate-700 ">
                                            {item.qty}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm text-slate-700 ">
                                            {item.date}
                                        </span>
                                    </td>

                                    <td className="p-4 text-right">
                                        <FaEllipsisVertical className="w-4 h-4 text-slate-500 hover:text-slate-700  cursor-pointer" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
            <div className="bg-white border border-t-0 border-gray-300 rounded-b-lg px-4 py-3">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <span className="text-sm text-gray-500">
                        Showing <b>5</b> of <b>{tableData.length}</b> items
                    </span>

                    <div className="flex items-center gap-2 flex-wrap">
                        <button className="border cursor-pointer text-gray-500 border-gray-300 rounded-lg p-2"><FaLessThan /></button>
                        <button className="bg-blue-500 text-white rounded px-3 py-1">1</button>
                        <button className="cursor-pointer text-gray-500 border border-gray-300 rounded-lg px-3 py-1">2</button>
                        <button className="cursor-pointer text-gray-500 border border-gray-300 rounded-lg px-3 py-1">3</button>
                        <button className="cursor-pointer text-gray-500 border border-gray-300 rounded-lg px-3 py-1">...</button>
                        <button className="cursor-pointer text-gray-500 border border-gray-300 rounded-lg px-3 py-1">31</button>
                        <button className="cursor-pointer text-gray-500 border border-gray-300 rounded-lg p-2"><FaGreaterThan /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table