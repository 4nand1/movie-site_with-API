// src/app/_components/Header.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

import { Default } from "./Default";
import { DataTransfer } from "./genres";

export function Header() {
  return (
    <header className="h-[64px] flex items-center justify-between px-10 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <img src="/Vector.png" alt="logo icon" />
        <img src="/Movie Z.png" alt="MovieZ" />
      </div>

      <div className="flex flex-1 items-center gap-3 max-w-[600px] mx-8">
        <NavigationMenu className="h-9 bg-white rounded-md border border-[#E4E4E7]">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium">
              Genres
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border border-[#E4E4E7] rounded-lg w-[557px] h-[333px] bg-white px-5 py-4">
              <div className="flex flex-col gap-1">
                <p className="text-[24px] text-[#09090B] leading-6 font-semibold">
                  Genres
                </p>
                <p className="text-[16px] text-[#09090B] leading-6">
                  See lists of movies by genre
                </p>
              </div>
              <div className="mt-4 w-full border-b border-[#E4E4E7]" />
              <div className="w-full flex flex-wrap gap-4 mt-5">
                {DataTransfer.map((item, index) => (
                  <Default key={index} name={item.name} />
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <div className="flex flex-1 items-center gap-2 border rounded px-2 py-1 bg-white">
          <Search className="w-4 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full text-sm border-none shadow-none focus-visible:ring-0"
          />
        </div>
      </div>

      <Button className="w-8 h-8 rounded bg-gray-200 p-0">
        <img src="/Vector (2).png" alt="mode" />
      </Button>
    </header>
  );
}
