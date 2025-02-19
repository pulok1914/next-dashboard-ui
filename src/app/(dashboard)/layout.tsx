import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            {/* left */}
            <div className="w-[14%] p-4">
                <Link className="flex justify-center items-center gap-2 lg:justify-start" href="/">
                    <Image src="/logo.png" alt="logo" width={32} height={32}/> 
                    <span className="hidden lg:block">School</span>
                </Link>
                <Menu />
            </div>
            {/* right */}
            <div className="w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                {children}
            </div>
        </div>
    );
  }