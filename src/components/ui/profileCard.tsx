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
                className="bg-white rounded-4xl shadow-2xl shadow-gray-500/50 p-6 w-2/3 h-8/12 mx-auto absolute top-1/5   left-1/2 transform -translate-x-1/2">
                <div className="flex justify-between mt-5 relative">
                    <div className="flex gap-2">
                        <Users/>
                        <p>Connect</p>
                    </div>
                    <div
                        className="rounded-full bg-green-600 w-[180px] h-[180px] overflow-hidden transform translate-y-[-110px] ">
                        <Image src="/images/earth.jpg" alt="profile" width={120} height={120}
                               style={{width: "inherit", height: "inherit", objectFit: "cover"}}/>
                    </div>

                    <div className="flex gap-2">
                        <MessagesSquare/>
                        <p>Message</p>
                    </div>

                </div>
                <div className="flex justify-center items-center bg-green-600">
                    <div>
                    <div>
                        <h1 className="text-2xl font-bold mt-5">John Doe</h1>
                        <p>New York, United States</p>
                    </div>
                    <div>
                        <p className="mt-5">Web Producer - Web Specialist.</p>
                        <p>John@gmail.com</p>
                    </div>
                    <div>
                        {
                            socialDetails.map((socialDetail, index) => (
                                <div className="" key={index}>
                                    <h2>{socialDetail.count}</h2>
                                    <p>{socialDetail.label}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button>Log Out</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileCard
