"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("Missing");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="h-10 start">Home</h1>
      <div className="flex items-center justify-center gap-1">
        <button
          className={`w-30 px-3 py-1 rounded-md ${
            category === "Missing" ? "bg-zinc-400" : "bg-white"
          }`}
          onClick={() => setCategory("Missing")}
        >
          Pet Missing
        </button>
        <button
          className={`w-30 px-3 py-1 rounded-md ${
            category === "Spotted" ? "bg-zinc-400" : "bg-white"
          }`}
          onClick={() => setCategory("Spotted")}
        >
          Pet Missing
        </button>
      </div>

      <div
        id="forum"
        className="flex flex-col items-center justify-center w-full gap-y-4"
      >
        {category === "Missing" ? (
          <>
            <div className="grid w-full grid-cols-[1fr,7fr] grid-rows-1">
              <img
                src="assets/Archive/human1.jpg"
                alt="profile"
                className="w-10 h-10"
              />
              <div className="grid grid-rows-[auto,auto,auto,1fr]">
                <h4 className="font-bold">Alice</h4>
                <p>My pet gone missing</p>
                <p>Clayton</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/wheresmypet-13f2b.appspot.com/o/black.JPG?alt=media&token=da2ed650-07cd-460d-87ff-dc03bfb693ab"
                  alt="pets"
                  className="max-w-[320px]"
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-[1fr,7fr] grid-rows-1">
              <img
                src="assets/Archive/human2.jpeg"
                alt="profile"
                className="w-10 h-10"
              />
              <div className="grid grid-rows-[auto,auto,auto,1fr]">
                <h4 className="font-bold">Bob</h4>
                <p>Anyone seen my cat?</p>
                <p>Clayton</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/wheresmypet-13f2b.appspot.com/o/black2.JPG?alt=media&token=83c4bf79-d3f7-4350-a838-0ab5adf42a03"
                  alt="pets"
                  className="max-w-[320px]"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid w-full grid-cols-[1fr,7fr] grid-rows-1">
              <img
                src="assets/Archive/human3.jpeg"
                alt="profile"
                className="w-10 h-10"
              />
              <div className="grid grid-rows-[auto,auto,auto,1fr]">
                <h4 className="font-bold">Charlie</h4>
                <p>My pet gone missing</p>
                <p>Clayton</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/wheresmypet-13f2b.appspot.com/o/black3.JPG?alt=media&token=02bb9318-21e6-4045-bfc4-4b7742b10fc4"
                  alt="pets"
                  className="max-w-[320px]"
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-[1fr,7fr] grid-rows-1">
              <img
                src="assets/Archive/human4.jpeg"
                alt="profile"
                className="w-10 h-10"
              />
              <div className="grid grid-rows-[auto,auto,auto,1fr]">
                <h4 className="font-bold">David</h4>
                <p>Anyone seen my cat?</p>
                <p>Clayton</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/wheresmypet-13f2b.appspot.com/o/black4.JPG?alt=media&token=35a0f58e-a495-4962-8e7b-d08e92c1bae1"
                  alt="pets"
                  className="max-w-[320px]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
