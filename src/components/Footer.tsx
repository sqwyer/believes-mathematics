import { useEffect } from "react";

const useScript = (url: string) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
  
        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export const Footer = () => {
    useScript("https://apis.google.com/js/platform.js")
    return (
        <div className="flex flex-row items-center justify-center p-10 border-t border-gray-200">
            <div
                className="g-ytsubscribe select-none"
                data-channelid="UCdVdpSy6QohsZAdMz9Ivb1Q"
                data-layout="full"
                data-theme="light"
                data-count="shown"
            ></div>
        </div>
    )
}