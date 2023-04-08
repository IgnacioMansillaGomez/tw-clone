import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
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
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
