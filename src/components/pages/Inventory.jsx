import React from 'react'
import Chips from '../ui/Chips'
import { BiPlus } from 'react-icons/bi'
import { FaCalendar, FaDollarSign, FaLocationDot } from 'react-icons/fa6'

function Inventory() {
  return (
    <>
      <div className="m-4 ml-6 p-2 rounded-2xl space-y-3 bg-gray-50">
        <h1 className='text-3xl font-semibold'>Sony Headphone</h1>
        <Chips title="Electronics" bgColor="#DBEAFE" textColor="#1D4ED8" rounded='rounded-full' />
        <Chips title="Electronics" bgColor="#DCFCE7" textColor="#15803D" rounded='rounded-full' />

        {/* cards */}
        <div className='grid sm:grid-cols-2 grid-cols-1  gap-2  '>
          {/* card 1 */}
          <div className=' bg-white rounded-xl border border-gray-200 p-4 mr-6'>
            <div className='sm:h-130.5 h-80 w-full relative bg-[#F1F5F9] rounded-lg flex items-center justify-center'>
              {/* thumbnail */}
              <div className='flex absolute -bottom-20 m-0 space-x-4 z-100 '>
                <div className='w-[113.5px] h-[113.5px]   bg-transparent flex  border border-blue-500 rounded-lg'></div>
                <div className='w-[113.5px] h-[113.5px]   bg-transparent flex  border border-gray-200 rounded-lg'></div>
                <div className='w-[113.5px] h-[113.5px]   bg-transparent flex  border border-gray-200 rounded-lg'></div>
                <div className=' bg-[#E2E8F0] w-[117.5px] h-[117.5px]  flex  border border-gray-200 rounded-lg'>
                  <BiPlus className='m-auto text-3xl text-gray-400' />
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className='sm:mt-0 mt-20' >
            <div className=' overflow-y-scroll flex flex-col w-556px h-[579.5px] bg-white rounded-xl border border-gray-200'>
              <div>
                <h2 className='text-2xl font-semibold p-6'>Key Details</h2>
              </div>

              <span className='space-x-4 ml-6 text-gray-500'>Location</span>
              <div className='flex items-center ml-5 '>
                <FaLocationDot className="mr-2 text-blue-500" />
                <span className='text-gray-500'>Living Room</span>
              </div>
              <span className='space-x-4 ml-6 mt-4 text-gray-500'>Labels</span>
              <div className='flex ml-5 mt-2'>
                <Chips title="Electronics" bgColor="#DBEAFE" textColor="#1D4ED8" rounded='rounded-full' />
                <Chips title="Fragile" bgColor="#FEE2E2" textColor="#B91C1C" rounded='rounded-full' />
              </div>
              <div className='flex flex-col mt-4 ml-6 space-x-4'>
                <span className='text-gray-500'>Quantity</span>
                <span className='font-semibold'>1</span>
              </div>
              <span className='space-x-4 ml-6 text-gray-500'>Purchase Date</span>
              <div className='flex items-center ml-5 mt-3'>
                <FaCalendar className="mr-2 text-gray-400" />
                <span>1 march, 2024</span>
              </div>

              <span className='space-x-4 ml-6 mt-4 text-gray-500'>Purchase Price</span>
              <div className='flex items-center ml-5 mt-2'>
                <FaDollarSign className="text-xl" />
                <span className='font-bold text-xl'>456</span>
              </div>

              <span className='space-x-4 mt-4 ml-6 text-gray-500'>Warranty</span>
              <div className='flex items-center ml-5 mt-3'>
                <Chips title="Active until march 15 , 2027" bgColor="#DCFCE7" textColor="#15803D" rounded='rounded-full' />

              </div>

              <span className='space-x-4 mt-4 ml-6 '>Notes</span>
              <div className='flex items-center ml-5 mt-3'>
                <p className='text-[#475569]'>Purchased from Best Buy with extended warranty. Includes carrying case,
                  charging cable, and audio cable. Serial number: 1234567890.</p>
              </div>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 sm:mt-12 rounded-xl  bg-white border border-gray-200  mt-5'>
          {/* tabs */}

          <div className='flex text-gray-600 '>
            <button className='px-4 py-3 border-t-0 cursor-pointer hover:bg-blue-100 transition-all duration-200 border-l-0 border-r-0 border-b border-blue-800 bg-white '>Detail</button>
            <button className='px-4 py-2 border-t-0 cursor-pointer hover:bg-blue-100 transition-all duration-200 border-l-0 border-r-0  bg-white'>Attachments <span className='ml-2'>3</span></button>
            <button className='px-4 py-2 border-t-0 cursor-pointer hover:bg-blue-100 transition-all duration-200 border-l-0 border-r-0  bg-white '>Activity</button>
          </div>
          <div className='grid sm:grid-cols-2 grid-cols-1 m-5'>
            <div className='sm:mr-10'>
              <h1 className='text-[20px] font-semibold'>Product Information</h1>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Brand</span>
                </div>
                <div>
                  <span className='font-semibold'>Sony</span>
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Model</span>
                </div>
                <div>
                  <span className='font-semibold'>WH-1000XM4</span>
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Color</span>
                </div>
                <div>
                  <span className='font-semibold'>Black</span>
                </div>
              </div>
            </div>
            <div className='mt-10 sm:mt-0'>
              <h1 className='text-[20px] font-semibold sm:mr-10'>Additional Details</h1>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Serial Number</span>
                </div>
                <div>
                  <span className='font-semibold'>1234567890</span>
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Purchase From</span>
                </div>
                <div>
                  <span className='font-semibold'>Best Buy</span>
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <span className='text-gray-500'>Last Updated</span>
                </div>
                <div>
                  <span className='font-semibold'>Today, 10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory