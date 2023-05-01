import { useRef, useState } from "react";

export default function Form() {
  // const [bagCount, setBagCount] = useState(0);
  const nameRef = useRef(null);
  const bagCountRef = useRef<number>(0);
  const handleIncrement = () => {
    if(bagCountRef.current < 5) {

      bagCountRef.current +=  1;
    }
  };

  const handleDecrement = () => {
    if(bagCountRef.current > 0){

      bagCountRef.current -=  1;
    }
  };
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 px-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add customer
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
                
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  ref={nameRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="bag-count"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bags
              </label>
              <div className="flex flex-row mt-2">
                <button
                  className=" bg-white text-gray-300 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  onClick={handleDecrement}
                >
                  <span className="m-auto text-2xl font-thin">-</span>
                </button>
                <input
                  type="number"
                  name="bag-count"
                  id="bag-count"
                  autoComplete="bag-count"
                  className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                />
                <button
                  className="bg-white text-gray-300 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={handleIncrement}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
