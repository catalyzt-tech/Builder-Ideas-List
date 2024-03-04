"use client";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

import CloseIcon from "@/public/icon/CloseIcon";
import "./Navbar.css";

export default function DrawerNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="flex lg:hidden relative z-40"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 overflow-y-auto h-full w-screen">
          <div className="flex h-full  items-center justify-center text-center ">
            <Dialog.Panel className="w-full h-full transform overflow-hidden bg-white  text-left align-middle shadow-xl transition-all  overflow-y-auto">
              <Dialog.Title
                as="div"
                className="flex justify-between items-center px-6 h-[72px]"
              >
                <div />
                <a
                  className="text-custom-red font-rubik "
                  href="/"
                >
                  OPTIMISM
                </a>
                <div
                  className="cursor-pointer Hamburger flex"
                  onClick={onClose}
                >
                  <CloseIcon />
                </div>
              </Dialog.Title>
              <ul className="Drawer">
                <li className="DrawerNavBox">
                  <a
                    href="https://app.optimism.io/retropgf-signup"
                    target="_blank"
                    className="DrawerNav"
                  >
                    RetroPGF
                  </a>
                </li>
                <li className="DrawerNavBox">
                  <a
                    href="https://app.optimism.io/bridge/deposit"
                    target="_blank"
                    className="DrawerNav"
                  >
                    Bridge
                  </a>
                </li>
                <li className="DrawerNavBox">
                  <a
                    href="https://app.optimism.io/airdrops"
                    target="_blank"
                    className="DrawerNav"
                  >
                    Airdrop
                  </a>
                </li>
                <li className="DrawerNavBox" onClick={() => setOpen2(true)}>
                  <a href="#" className="DrawerNav">
                    More
                    <svg
                      className="ml-1 mt-1.5"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="#404454"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        width="20px"
                        height="16px"
                        d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </a>
                </li>
                <hr className="my-3 border-gray-200 m-0  w-full" />
              </ul>
            </Dialog.Panel>
          </div>
        </div>
        <Transition appear show={open2} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 z-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="textTitle"
                  >
                    More
                  </Dialog.Title>
              <li className="DrawerTitle">OPTIMISM</li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://www.optimism.io/about"
                  target="_blank"
                >
                  <span>About Optimism</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/superchain"
                  target="_blank"
                >
                  <span>Superchain</span>
                </a>
              </li>
              <li className="Line"></li>
              <li className="DrawerTitle">GOVERNANCE</li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/optimist-nft"
                  target="_blank"
                >
                  <span>Optimist NFT</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/announcement"
                  target="_blank"
                >
                  <span>OP Collective</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/retropgf"
                  target="_blank"
                >
                  <span>About RetroPGF</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://vote.optimism.io"
                  target="_blank"
                >
                  <span>Delegates</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://gov.optimism.io/"
                  target="_blank"
                >
                  <span>Forum</span>
                </a>
              </li>
              <li className="Line"></li>
              <li className="DrawerTitle">ECOSYSTEM</li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://www.optimism.io/apps/all"
                  target="_blank"
                >
                  <span>Apps</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/quests"
                  target="_blank"
                >
                  <span>Quests</span>
                </a>
              </li>
              <li className="Line"></li>
              <li className="DrawerTitle">DEVELOPERS</li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://app.optimism.io/faucet"
                  target="_blank"
                >
                  <span>Superchain Faucet</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://docs.optimism.io/"
                  target="_blank"
                >
                  <span>Documentation</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://github.com/ethereum-optimism/"
                  target="_blank"
                >
                  <span>Github</span>
                </a>
              </li>
              <li className="DrawerContent">
                <a
                  className="DrawerLink"
                  href="https://immunefi.com/bounty/optimism/"
                  target="_blank"
                >
                  <span>Bug bounty</span>
                </a>
              </li>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </Dialog>
    </>
  );
}