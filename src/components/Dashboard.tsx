import { useState } from "react";
import { RandomAvatar } from "./RandomAvatar";
import Modal from "./Modal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({children}: {children?: React.ReactNode}) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal && (<Modal closeModal={() => setOpenModal((oldValue) => !oldValue)} open={openModal}/>)}
      <div className="min-h-full">
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      key={"Dashboard"}
                      href={"#"}
                      className={classNames(
                        "bg-gray-900 text-white",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                      aria-current={"page"}
                    >
                      {"Dashboard"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div>
                    <button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {/* <RandomAvatar width='50px' height='50px'/> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <header className="bg-white shadow">
          <div className="flex flex-row justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)}>Add customer</button>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
