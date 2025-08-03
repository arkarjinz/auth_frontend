import React from 'react'
import Image from "next/image";
import ProfileCard from "@/components/ui/profileCard";

function Page() {
    return (
        <>
          <div className="w-screen h-screen relative overflow-hidden">
               <div className="w-full h-5/12  bg-[url(/images/bg.svg)] bg-cover bg-center bg-no-repeat">
               </div>
              <div className="px-10 md:px-0">
                  <ProfileCard/>
              </div>

          </div>
        </>
    )
}

export default Page
