import { MainNav } from "./main-nav";
import { redirect } from "next/navigation";

const Navbar =  () => {
    

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">

                </div>
            </div>
        </div>
    );
}

export default Navbar;