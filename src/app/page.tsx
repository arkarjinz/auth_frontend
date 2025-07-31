import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {LogInCard} from "@/components/LogInCard";
import {ToggleMode} from "@/components/ToggleMode";

export default function Home() {
  return (
    <>
      {/*<Input/>*/}
        <div className="w-screen h-screen flex  items-center justify-center">
            <div>
                <ToggleMode/>
                <LogInCard/>
            </div>


        </div>

    </>
  );
}
