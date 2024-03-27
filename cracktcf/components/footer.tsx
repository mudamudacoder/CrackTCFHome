import { Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t py-20">
            <div className="mx-auto py-10">
                <p className="text-center text-s text-black">
                    &copy; 2024 Crack the TCF Canada Inc. All rights reserved.
                </p>
                <p className="text-center text-s text-black">
                    <Phone className="inline-block" size={16} /> Phone: +1(877-513-1563)
                    <span className="mx-2">|</span>
                    <Mail className="inline-block" size={16} /> Email: info@crackthetcfcanada.com
                </p>
            </div>
        </footer>
    )
};

export default Footer;
