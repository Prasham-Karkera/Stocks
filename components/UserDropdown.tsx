'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
// import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router = useRouter();
    
    const handleSignOut = () => {
        router.push("/sign-in")
    }

    const user = {name: 'Prasham', email:'prashamkarkera@gmail.com'};

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild >
            {/* <Button variant={'ghost'} className="flex items-centergap-3 text-gray-4 hover: text-yellow-500">  */}
            <div className="flex items-center gap-3 text-gray-4 hover: text-yellow-500">
                <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                    {user.name[0]}
                </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start"> 
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
                </div>
            {/* </Button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel>
                <div className="flex raltive items-center gap-3 py-2 ">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                        {user.name[0]}
                    </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col "> 
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500"> 
                            {user.email}
                        </span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus: bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                LogOut
            </DropdownMenuItem>
            <DropdownMenuSeparator className="sm:hidden"/>
            <nav className="sm:hidden">
                <NavItems/>
            </nav>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown