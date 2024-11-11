"use client"

import ConnectForm from "@/components/ConnectForm";
import connectScreen from "@/components/ConnectScreen";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-main-blue to-main-purple h-screen w-screen backdrop-opacity-5 p-40 bg-opacity-10">
         <div className="rounded-3xl border-2h-full w-full bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
            <ConnectForm/>
         </div>
     </div>
  );
}
