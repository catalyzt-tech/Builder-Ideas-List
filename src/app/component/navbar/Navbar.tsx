'use client'
import React, { useState } from 'react'
import DrawerNav from './DrawerNav'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menu = [
    { name: 'RetroPGF', link: 'https://app.optimism.io/retropgf-signup' },
    { name: 'Bridge', link: 'https://app.optimism.io/bridge/deposit' },
    { name: 'Airdrop', link: 'https://app.optimism.io/airdrops' },
  ]
  return (
    <>
      <div className="bg-white sticky top-0 z-20 shadow-md flex items-center lg:justify-start justify-between px-6 h-16">
        <div className="mr-12">
          <Link className="text-custom-red font-rubik !font-semibold" href="/">
            OPTIMISM
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8 pr-2 items-center text-custom ">
          <ul className="flex gap-8 !font-inter   ">
            {menu.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <li className="NavMenu !font-medium">
                  <ul>{item.name}</ul>
                </li>
              </a>
            ))}
            <li>
              <a
                className="NavMenu flex items-center gap-1 !font-medium"
                href="#"
              >
                More
                <div className="mt-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>

              <ul className="Dropdown overflow-y-auto max-h-90vh">
                <li className="Title">OPTIMISM</li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://www.optimism.io/about"
                    target="_blank"
                  >
                    <span>About Optimism</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/superchain"
                    target="_blank"
                  >
                    <span>Superchain</span>
                  </a>
                </li>
                <li className="Line"></li>
                <li className="Title">GOVERNANCE</li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/optimist-nft"
                    target="_blank"
                  >
                    <span>Optimist NFT</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/announcement"
                    target="_blank"
                  >
                    <span>OP Collective</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/retropgf"
                    target="_blank"
                  >
                    <span>About RetroPGF</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://vote.optimism.io"
                    target="_blank"
                  >
                    <span>Delegates</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://gov.optimism.io/"
                    target="_blank"
                  >
                    <span>Forum</span>
                  </a>
                </li>
                <li className="Line"></li>
                <li className="Title">ECOSYSTEM</li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://www.optimism.io/apps/all"
                    target="_blank"
                  >
                    <span>Apps</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/quests"
                    target="_blank"
                  >
                    <span>Quests</span>
                  </a>
                </li>
                <li className="Line"></li>
                <li className="Title">DEVELOPERS</li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://app.optimism.io/faucet"
                    target="_blank"
                  >
                    <span>Superchain Faucet</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://docs.optimism.io/"
                    target="_blank"
                  >
                    <span>Documentation</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://github.com/ethereum-optimism/"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                </li>
                <li className="Content">
                  <a
                    className="Link"
                    href="https://immunefi.com/bounty/optimism/"
                    target="_blank"
                  >
                    <span>Bug bounty</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          className="flex lg:hidden Hamburger cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <a href="#">
            <svg
              fill="#424242"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
            </svg>
          </a>
        </div>
      </div>

          

      <DrawerNav open={open} onClose={() => setOpen(false)}></DrawerNav>
    </>
  )
}
export default Navbar