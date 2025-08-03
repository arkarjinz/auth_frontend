import React from 'react'
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

function Page() {
    return (
        <>
          <div className="w-screen h-screen relative overflow-hidden">
               <div className="w-full h-5/12  bg-[url(/images/bg.svg)] bg-cover bg-center bg-no-repeat">
               </div>
                  <ProfileCard/>
          </div>
        </>
    )
}

export default Page
