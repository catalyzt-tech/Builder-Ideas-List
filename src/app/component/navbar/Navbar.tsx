"use client"
import React, { useState } from "react";
import DrawerNav from "./DrawerNav";
import "./Navbar.css";

const Navbar = () => {
  const [open , setOpen] = useState(false)

  return (
    <>
    <div className="flex items-center justify-between px-6 h-[72px]">
      <div>
        <a className="text-custom-red font-rubik " href="/bridge/deposit">
          OPTIMISM
        </a>
      </div>

      <div className="hidden lg:flex space-x-8 pr-2 items-center text-custom font-rubik">
        <ul className="flex gap-8">
          <a href="https://app.optimism.io/retropgf-signup" target="_blank">
            <li className="NavMenu">
              <div>RetroPGF</div>
            </li>
          </a>

          <a href="https://app.optimism.io/bridge/deposit" target="_blank">
            <li className="NavMenu">
              <div>Bridge</div>
            </li>
          </a>

          <a href="https://app.optimism.io/airdrops" target="_blank">
            <li className="NavMenu">
              <div>Airdrop</div>
            </li>
          </a>

          <li>
            <a className="NavMenu flex items-center gap-1" href="#">
              More
              <div className="mt-[0.5px]">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
            <ul className="Dropdown overflow-y-scroll">
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

      <div className="flex lg:hidden Hamburger cursor-pointer" onClick={()=>setOpen(true)}>
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

      <div className="lg:hidden">
        <svg
          width="45px"
          height="45px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
            fill=" #E0E0E0"
          />
          <path
            d="M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
            fill="#424242"
          />
          <path
            d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12Z"
            fill="#424242"
          />
          <path
            d="M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16Z"
            fill="#424242"
          />
        </svg>
      </div>
    </div>
    <DrawerNav
    open={open}
    onClose={()=>setOpen(false)}
    ></DrawerNav>

    
    </>
  );
};
export default Navbar;