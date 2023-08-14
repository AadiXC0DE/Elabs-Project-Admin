"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import background from "../../public/background.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col items-center justify-center mb-5">
          <Image src={logo} width={156} height={156} className="mb-2" />
          <div className="flex items-center">
            <h2 className="text-4xl font-semibold text-gray-900 text-center">
              PROJECT SUBMIT
            </h2>
          </div>
        </div>

        <Link legacyBehavior href="/login">
          <a className="block w-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-xl py-3 text-center text-white font-bold mt-4">
            Submit Project
          </a>
        </Link>
      </div>
    </div>
  );
}
