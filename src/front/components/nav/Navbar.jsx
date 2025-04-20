"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  { name: "ខ្មែរក្រហម", description: "", href: "/cotage1", icon: ChartPieIcon },
  { name: "កំណាព្យ", description: "", href: "/cotage1", icon: CursorArrowRaysIcon },
  { name: "ពន្យល់ចំណេះដឹង", description: "", href: "/cotage1", icon: FingerPrintIcon },
  { name: "ពន្យល់", description: "", href: "/cotage1", icon: SquaresPlusIcon },
  { name: "នយោបាយ", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "សេដ្ធកិច្ច", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "សង្គម", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "វិទ្យុ", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "កីឡាជាតិ", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "សុខភាព", description: "", href: "/cotage1", icon: ArrowPathIcon },
  { name: "ពីនេះពីនោះ", description: "", href: "/cotage1", icon: ArrowPathIcon },
];

const internationalNews = [
  { name: "Covid 19", href: "/cotage2" },
  { name: "នយោបាយ", href: "/cotage2" },
  { name: "សិល្បៈ", href: "/cotage2" },
  { name: "សេដ្ធកិច្ច", href: "/cotage2" },
  { name: "សង្គមវប្បធម៏", href: "/cotage2" },
  { name: "សង្គម", href: "/cotage2" },
  { name: "FIFA", href: "/cotage2" },
  { name: "កីឡាអន្តរជាតិ", href: "/cotage2 " },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex flex-row justify-center items-center space-x-2 -mt-2  gap-x-16">
        <img
          src="https://thmeythmey.com/img/logo_thmeythmey.png"
          alt=""
          className="w-[100px] h-auto"
        />
        <img
          src="https://image.thmeythmey.com/advertising/449/Untitled-2.gif"
          alt=""
          className="w-[750px]  h-auto"
        />
      </div>

      <nav className="border-b-[3px] border-blue-500 mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Navbar Items */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* First Dropdown - National News */}
          <Popover className="relative">
            <div className="flex items-center gap-x-1">
              {/* Standalone link for navigation */}
              <a href="/" className="text-sm font-semibold text-gray-900">
                ព័ត៌មានជាតិ
              </a>

              {/* Dropdown button (only opens the dropdown) */}
              <PopoverButton className="p-1">
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-6 flex-none text-gray-400"
                />
              </PopoverButton>
            </div>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-0">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-1 rounded-lg p-2 text-sm/6 hover:bg-gray-50"
                  >
                    <a
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      - {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Second Dropdown - International News */}
          <Popover className="relative">
            <div className="flex items-center gap-x-1">
              {/* Make "ព័ត៌មានអន្តរជាតិ" a standalone link */}
              <a href="/info1" className="text-sm font-semibold text-gray-900">
                ព័ត៌មានអន្តរជាតិ
              </a>

              {/* Dropdown button to open the panel */}
              <PopoverButton className="p-1">
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>
            </div>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {internationalNews.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-1 rounded-lg p-2 text-sm/6 hover:bg-gray-50"
                  >
                    <a
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      - {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/info2" target="_black" rel="noopener noreferrer" className="text-sm/6 font-semibold text-gray-900">
            អត្ថបទពាណិជ្ជកម្ម
          </a>
          <a href="/info3" target="_black" rel="noopener noreferrer" className="text-sm/6 font-semibold text-gray-900">
            បទយកការណ៏
          </a>

          <div className="flex flex-row items-center gap-x-2">
            <img
              src="https://thmeythmey.com/img/rfi_logo.png"
              alt=""
              className="w-10 h-auto"
            />
            <img
              src="https://thmeythmey.com/img/logo-cam.png"
              alt=""
              className="w-10 h-auto"
            />
            <img
              src="https://thmeythmey.com/img/logo-512.png"
              alt=""
              className="w-10 h-auto"
            />
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gold-500 transition duration-200" />
          </div>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
