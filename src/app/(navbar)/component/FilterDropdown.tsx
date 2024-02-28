"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { TabStateType } from './Home'
import SortIcon from '@/public/icon/SortIcon'

export default function FilterDropdown({
  setState
}:{
  setState:React.Dispatch<React.SetStateAction<TabStateType>>
})  {

return (
<div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        
        <div>
          <Menu.Button className="">
          <div 
            className={` h-10
            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
            border rounded-full px-3 py-2 cursor-pointer transition-colors 
            text-slate-900 flex gap-2 self-center shrink-0}
            `}
            >
                <SortIcon/>
                <p className=" text-sm font-normal self-center">Name</p>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-4 z-50 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
             
              <h6 className="text-sm font-bold text-center text-gray-900">
                Sort By
              </h6>

              <div className="mt-4">

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Name (A-Z)
                    </button>
                  )}
                </Menu.Item>
        
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`}
                    >
                    Low to High Effort
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`}
                    >
                      High to Low Effort
                    </button>
                  )}
                </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
function EditInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

function EditActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function ArchiveInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function ArchiveActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }
  