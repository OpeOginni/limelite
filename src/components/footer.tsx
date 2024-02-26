import { X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col lg:max-w-[700px] max-w-[500px]">
        <div>
          <p className="text-center lg:text-3xl md:text-3xl text-xl">
            Like What You See?
          </p>
          <p className="text-center lg:text-3xl md:text-3xl text-xl text-amber-600">
            Book An Appointment With Us
          </p>
        </div>

        <div className="md:text-sm text-xs text-center py-6 px-3">
          <button className="text-sm font-bold py-2 px-4 bg-amber-500 rounded-lg">
            Book Now!
          </button>
        </div>
      </div>

      <div className="mx-auto w-full flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              width={0}
              height={0}
            />
          </a>
        </div>

        <div className="flex lg:gap-x-12 gap-x-6  border-1 rounded-md">
          <div>
            <X />
          </div>
          <div>
            <X />
          </div>
          <div>
            <X />
          </div>
          <div>
            <X />
          </div>
        </div>
      </div>
    </footer>
  );
}
