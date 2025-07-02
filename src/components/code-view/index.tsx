import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-typescript";
import "prismajs/components/prism-jsx";
import "prismajs/components/prism-python";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescrit";
import "./code-theme.css";


interface Props{
    code:string;
    lang:string;
}


export const CodeView=({
    code,
    lang
}:Props)=>{

    useEffect(()=>{
        Prism.highlightAll();
    },[code])

    return(
        <pre className="p-2 bg-transparent border-none rouned-none m-0 text-xs">
            <code className={`language-${lang}`}>
                {code}
            </code>
        </pre>
    )
}