import { HiOutlineNewspaper } from "react-icons/hi";
import { MdWorkOutline,MdLogout  } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
const MenuItems = [
  {
    path: "/dashboard",
    icon: <HiOutlineNewspaper />,
    text: "Job Portal",
  },
  {
    path: "/joblisting",
    icon: <MdWorkOutline />,
    text: "Job Listing",
  },
  {
    path: "/applicationlisting",
    icon: <RiListIndefinite />,
    text: "Application Listing",
  },
  {
    path: "/",
    icon: <MdLogout />,
    text: "LogOut",
  },
];

export default MenuItems;
