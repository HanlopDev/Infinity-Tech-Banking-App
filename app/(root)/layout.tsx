import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {'firstname': "Adrian", "lastname": "JSM"};

  return (
    <main className="flex h-full w-full font-inter"> 
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' alt="menu icon" width={30} height={30}/>
            <div className="">
              <MobileNav user={loggedIn}/>
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}
