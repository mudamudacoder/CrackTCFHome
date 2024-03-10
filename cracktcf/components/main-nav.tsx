"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>)
{
    const pathname = usePathname();
    const params = useParams();

    const routes = [
    {
        href: `/`,
        label: 'Home',
        active: pathname === `/`,
    },
    {
        href: `/about`,
        label: 'About Us',
        active: pathname === `/about`,
    },
    {
        href: `/book`,
        label: 'Book a Class',
        active: pathname === `/book`,
    },
    {
        href: `https://moodle.crackthetcfcanada.com/`,
        label: 'Moodle',
        active: pathname === `/moodle`,
        target: '_blank'
    },
    
    
];
    return (
        <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {
                routes.map((route)=>(
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn("text-sm font-medium transition-colors hover:text-orange-800 hover:scale-110",
                        route.active ? "text-orange-800" : "text-muted-foreground"
                    
                    )}>
                        {route.label}
                    </Link>
                )
                            )            }

        </nav>
    )
};