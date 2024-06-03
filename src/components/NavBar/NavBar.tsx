import { isAuthenticated } from "@/lib/auth/authService";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { IoLinkOutline } from "react-icons/io5";
import UnreadCount from "./UnreadCount";

export default async function NavBar() {
  const loggedIn = isAuthenticated();

  return (
    <div className="navbar mb-3 px-6">
      <div className="navbar-start font-zen text-3xl">
        <Link href={"/"}>
          <span className="flex items-center gap-2">
            CLIKI
            <IoLinkOutline />
          </span>
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <ul className="menu menu-horizontal gap-2 p-0 font-zen">
          <li>
            <Link href={"/links"}>LINKS</Link>
          </li>
          <li>
            <Link href={"/clicks"}>CLICKS {loggedIn && <UnreadCount />}</Link>
          </li>
        </ul>
        {loggedIn && <LogOutButton />}
      </div>
    </div>
  );
}
