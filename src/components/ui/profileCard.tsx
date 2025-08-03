import React from 'react'
import Image from "next/image";
import {MessagesSquare, Users} from "lucide-react";

function ProfileCard() {
    const socialDetails = [
        {
            count: 65,
            label: "Friends"
        },
        {
            count: 43,
            label: "Photos"
        },
        {
            count: 21,
            label: "Comments"
        }
    ]

    return (
        <>
            <div
                className="bg-white rounded-4xl shadow-2xl shadow-gray-500/50 p-6 w-full md:w-3/5 h-fit  mx-auto absolute top-1/5   left-1/2 transform -translate-x-1/2">
                <div className="flex justify-between mt-5 relative">
                    <div className="flex gap-2">
                        <Users/>
                        <p>Connect</p>
                    </div>
                    <div
                        className="rounded-full bg-green-600 w-[130px] h-[130px] md:w-[180px] md:h-[180px] overflow-hidden absolute inset-0 top-[-110px]  mx-auto">
                        <Image src="/images/earth.jpg" alt="profile" width={120} height={120}
                               style={{width: "inherit", height: "inherit", objectFit: "cover"}}/>
                    </div>

                    <div className="flex gap-2">
                        <MessagesSquare/>
                        <p>Message</p>
                    </div>

                </div>
                <div className="flex justify-center items-center  mt-15">
                    <div className="text-center">
                    <div>
                        <h1 className="text-2xl font-bold mt-5">John Doe</h1>
                        <p>New York, United States</p>
                    </div>
                    <div>
                        <p className="mt-5">Web Producer - Web Specialist.</p>
                        <p>John@gmail.com</p>
                    </div>
                    <div className="mb-5 flex justify-between gap-3 mt-5">
                        {
                            socialDetails.map((socialDetail, index) => (
                                <div className="" key={index}>
                                    <h2 className="font-semibold text-xl">{socialDetail.count}</h2>
                                    <p>{socialDetail.label}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button className="bg-linear-to-r text-sm text-white text-shadow-md from-cyan-500 to-blue-500 py-2 px-6 rounded-full mb-6">Log Out</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileCard
