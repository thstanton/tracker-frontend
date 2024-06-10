import { isAuthenticated } from "@/lib/auth/authService";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { IoLinkOutline } from "react-icons/io5";
import UnreadCount from "./UnreadCount";
import { BiMenu } from "react-icons/bi";

interface MenuProps {
  loggedIn: boolean;
  className: string;
}

export default async function NavBar() {
  const loggedIn = isAuthenticated();

  return (
    <>
      <div className="navbar mb-3 px-6">
        <div className="navbar-start font-zen text-3xl">
          <Link href={"/"}>
            <span className="flex items-center gap-2">
              CLIKI
              <IoLinkOutline />
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden gap-2 md:flex">
          <Menu
            loggedIn={loggedIn}
            className="menu menu-horizontal items-center gap-2 p-0 font-zen"
          />
        </div>
        <div className="navbar-end md:hidden">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-circle btn-ghost text-3xl">
              <BiMenu />
            </div>
            <Menu
              loggedIn={loggedIn}
              className="menu dropdown-content menu-sm right-0 z-20 w-72 gap-2 rounded-box bg-stone-200 p-4 shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Menu({ loggedIn, className }: MenuProps) {
  return (
    <ul tabIndex={0} className={`${className}`}>
      <li>
        <Link href={"/links"}>LINKS</Link>
      </li>
      <li>
        <Link href={"/clicks"}>CLICKS {loggedIn && <UnreadCount />}</Link>
      </li>
      <li>{loggedIn && <LogOutButton />}</li>
    </ul>
  );
}
