import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { FaFile, FaPen, FaPlus, FaTrash } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAttachment } from 'react-icons/gr';
import { useLocation, useParams } from 'react-router-dom';

function Header({ navbarToggle, setNavbarToggle }) {
  const location = useLocation();
  const { id } = useParams();
  let title = "Dashboard";
  let showSearch = true;

  if (location.pathname.startsWith("/inventory")) {
    title = "Inventory";
  }
  if (id) {

    title = `${title} > Sony Headphone`;
    showSearch = false;
  }
  return (
    <div>
      <div className="p-4 border-gray-300 border-b grid sm:grid-cols-2 w-full sm:justify-between items-center">
        <div className='sm:flex items-center'>
          <div className=''>
            {/* hamburger */}
            <div className='sm:hidden cursor-pointer'>
              <GiHamburgerMenu size={25} onClick={() => setNavbarToggle(!navbarToggle)} />
            </div>
          </div>
          <h1 className="text-xl  text-center">{title}</h1>
          <div className='relative sm:w-80  sm:ml-6 my-1'>
            {showSearch &&
              (
                <>
                  <CiSearch className='absolute   sm:left-8 left-2 top-2.5 text-gray-400' />
                  <input type="text" className='w-full focus:outline-none border border-gray-300 rounded-sm sm:ml-5 pl-8 p-1' placeholder="search items..." />
                </>
              )
            }



          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-end gap-2">
          {showSearch ? (
            <>
              <button className="sm:w-32 w-full px-4 py-1.5 border border-gray-300 rounded-lg flex items-center justify-center gap-2">
                <FaDownload className="text-gray-400" />
                Export
              </button>

              <button className="sm:w-36 w-full px-4 py-1.5 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2">
                <FaPlus />
                Add Items
              </button>
            </>
          ) : (
            <>
              <button className="sm:w-20 sm:h-9.5 w-full px-2 cursor-pointer border border-gray-300 sm:rounded-xl flex items-center justify-center gap-2">
                <FaPen className='h-3 w-3' />
                <span className='text-gray-500 font-medium'>
                  Edit
                </span>
              </button>
              <button className="sm:w-40 sm:h-9.5  w-full px-2 cursor-pointer border border-gray-300 sm:rounded-xl flex items-center justify-center gap-2">
                <GrAttachment className='h-3 w-3' />
                <span className='text-gray-500 font-medium'>
                  Add Attachment
                </span>
              </button>
              <button className="sm:w-23.75 sm:h-9.5  w-full px-2 cursor-pointer border border-red-300 sm:rounded-xl flex items-center justify-center gap-2">
                <FaTrash className='h-3 w-3 text-red-500' />
                <span className='text-red-500 font-medium'>
                  Delete
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header