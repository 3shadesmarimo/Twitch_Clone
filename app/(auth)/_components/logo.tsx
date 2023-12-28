import Image from "next/image";
import {Poppins } from "next/font/google";
import {cn} from "@/lib/utils";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800",],

});

export const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='bg-white rounded-full p-1'>
            

                <Image
                    src="/spooky.svg"
                    alt="Twitch_Clone"
                    height={80}
                    width={80}
                />

            </div>
            <div className='flex flex-col items-center'>
                <p className={cn(
                    "text-xl font-semibold", font.className
                )}>
                    Twitch Clone
                </p>
                <p className={cn("text-sm text-muted-foreground", font.className)}>
                    Let&apos;'s Play
                </p>
            </div>
        </div>
    );
};