import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";

export default async function HomeLayout({
    children,
    params
}:{
    children: React.ReactNode;
    params: { storeId: string}
}){

    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
};