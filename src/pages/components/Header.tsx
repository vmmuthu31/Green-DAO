import Link from "next/link";
import React from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";
import { Dialog } from '@headlessui/react'
import {AiOutlineBars} from "react-icons/ai"
import {HiXMark} from 'react-icons/hi2'
import { useState } from 'react'

const Header = () => {
  const darkMode = useDarkMode(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { address, isConnected } = useAccount();
  // if (isConnected) {
  //   console.log(address);
  // }
  const navigation = [
    { name: 'Create an badge', href: '/Editor' },
    { name: 'Approve Loans', href: '/ApproveLoan' },
    { name: 'Received Loans', href: '/receivedapplications' },
   
  ]
  const navigation2 = [
    { name: 'My Badges', href: '/Badges' },
    { name: 'Applyloan', href: '/ApplyLoan' },
    { name: 'Verify Loan', href: '/VerifyLoan' },
    { name: 'Learn', href: '/Learn' },
   
  ]

  return (
   
      <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-16 w-auto"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhENUilxHHUTQharTQgs7IPU6cFMSv_h6KHSD82Wk6NjuzvW8Id97Z0TkZcgghsncWqSADiECjYlOJLpVOhVuDi0DWnrVLpqZOGHKlpS8c_or-RuHJ6fFot0yW8t4-EKvCIX10U7rCF9tvmltMCkayNSnxFrJbP-6lHMtJFIkAN9286YfBCi1nPU2DD/s320/Doc1%20(2).png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
       
        <div className="hidden lg:flex lg:gap-x-12 ">
        {address == "0x3907bAdE047531158c97c8C51b95c72a51E5e37e" ? <>
        {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg mt-2 text-white font-semibold leading-6 ">
              {item.name}
            </Link>
          ))}</>:<>
           {navigation2.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg mt-2 text-white font-semibold leading-6 ">
              {item.name}
            </Link>
          ))}</>}
        <ConnectButton />
        </div>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhENUilxHHUTQharTQgs7IPU6cFMSv_h6KHSD82Wk6NjuzvW8Id97Z0TkZcgghsncWqSADiECjYlOJLpVOhVuDi0DWnrVLpqZOGHKlpS8c_or-RuHJ6fFot0yW8t4-EKvCIX10U7rCF9tvmltMCkayNSnxFrJbP-6lHMtJFIkAN9286YfBCi1nPU2DD/s320/Doc1%20(2).png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {address == "0x3907bAdE047531158c97c8C51b95c72a51E5e37e" ? <>
        {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg mt-2 text-white font-semibold leading-6 ">
              {item.name}
            </Link>
          ))}</>:<>
           {navigation2.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg mt-2 text-white font-semibold leading-6 ">
              {item.name}
            </Link>
          ))}</>}
        <ConnectButton />
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;