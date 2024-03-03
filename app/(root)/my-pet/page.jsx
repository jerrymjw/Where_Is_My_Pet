"use client";

const USERNAME = "LLH"
const PHONE_NUMBER = "034324"
const PET_NAME = null
const PET_IMAGE = null
import React from 'react'

export default function MyPet() {

    const uploadImage = () => {
        const inputFile = document.getElementById("input-file")
        const imgView = document.getElementById("img-view")

        if (inputFile) {
            let imgLink = URL.createObjectURL(inputFile.files[0])
            console.log(imgLink)
            imgView.style.backgroundImage = `url(${imgLink})`
        }
    }


    return (
        <div className="flex flex-col">
            <div className="text-center text-xl">Profile</div>
            <div className="mt-4">
                <div>Name: {USERNAME}</div>
                <div className="mt-2">Phone: {PHONE_NUMBER}</div>
            </div>

            <div className="mt-2">
                <div className="font-bold">
                    Set up profile for your pet
                </div>
                <div>
                    {PET_NAME}
                </div>
                <div className={"w-full flex justify-center items-center mt-8"}>
                    <div id="img-view" style={{height: "371px", width: '350px', backgroundColor: "#f7f8ff"}} className={'bg-center bg-cover'}>
                        {PET_IMAGE}
                    </div>
                </div>
            </div>

            <div className="flex align-middle justify-center">
                <label for={"input-file"} style={{width: "333px", height: "68px", backgroundColor: "#5BB1CD"}}
                       className='absolute bottom-10 text-white text-2xl rounded'
                >
                    <input type={"file"} accept={"image/*"} id={"input-file"} hidden onChange={uploadImage}/>
                    <div className={"h-full flex items-center justify-center"}>
                        Add a pet
                    </div>
                </label>
            </div>
        </div>
    )
}