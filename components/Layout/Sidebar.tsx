import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import { signOut } from "next-auth/react";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import useCurrentUser from "@/hooks/useCurrentUser";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notificacions",
      href: "/Notificacions",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
      auth: true,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end ">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((element) => (
            <SidebarItem
              key={element.href}
              href={element.href}
              label={element.label}
              icon={element.icon}
              auth={element.auth}
            />
          ))}
          {currentUser! && (
            <SidebarItem
              label={"Logout"}
              href={""}
              icon={BiLogOut}
              onClick={() => signOut}
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
