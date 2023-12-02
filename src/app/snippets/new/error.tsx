'use client'
interface ErrorPagePops{
    error: Error,
    reset:()=>void;
}
export default function ErrorPage({error}:ErrorPagePops){
return (<><div>{error.message}</div></>)
}