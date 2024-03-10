import Image from "next/image";
import { MainNav } from "./main-nav";
import { Instagram } from 'lucide-react';

const Navbar =  () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center justify-between px-4">
                <MainNav />
                <div className="flex-grow flex justify-center">
                    {/* Replace "Image" with your actual <img> tag */}
                    <Image src="/navLogo.png" alt="Your Logo" width={500} height={500} className="block size-80"/>
                </div>
                <div className="flex items-center space-x-4 px-4">
                    <a href="https://www.instagram.com/crackthetcfcanada/" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
