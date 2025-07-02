import Image from "next/image";
import { useState, useEffect } from "react";

const ShimmerMessages = () => {
  const messages = [
    "Thinking...",
    "Loading...",
    "Please wait...",
    "Generating...",
    "Analyzing your request",
    "Building Your Website",
    "Crafting components",
    "Implementing features",
    "Optimizing performance",
    "Adding Final Touches",
    "Almost Done",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground aniimate-pulse ">
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};

export const MessageLoading = ()=>{
    return (
        <div className="flex flex-col group px-2 pb-4">
         <div className="flex items-center gap-2 pl-2 mb-2">
                <Image src={"/logo.svg"} alt="logo" width={18} height={18} className="shrink-0" />
                <span className="text-sm font-medium">W0</span>
         </div> 
         <div className="pl-8.5 flex flex-col gap-y-4">
            <ShimmerMessages />
         </div>
        </div>
    )
}