import React from "react";

export default function Ccard() {
  return (
    <div className="flex justify-center p-4 pb-6 rounded-3xl">
      <div className="w-96 h-48 m-auto bg-gradient-to-r from-black to-red-950 rounded-3xl text-white shadow-2xl transition-transform transform hover:scale-110">
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-bold tracking-widest ">Jhon Smith</p>
              <p className="font-medium tracking-more-wider">
            •••• •••• •••• 7632
            </p>
            </div>
            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div className="pt-6 pr-6">
            <div>
              <p className="font-normal text-xs">Your Balance</p>
              <span className="font-bold text-xl">$9,500</span>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
