import React from 'react'
import Image from "next/image";
import ProfileCard from "@/components/ui/profileCard";

function Page() {
    return (
        <>
          <div className="w-screen h-screen relative overflow-hidden">
               <div className="w-full h-5/12  bg-linear-to-r from-sky-500 to-indigo-500">
               </div>
            <ProfileCard/>
          </div>
        </>
    )
}

export default Page
