import { isAuthenticated } from "@/lib/auth/auth.service";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { IoLinkOutline } from "react-icons/io5";

export default function NavBar() {
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
            <Link href={"/clicks"}>CLICKS</Link>
          </li>
        </ul>
        {isAuthenticated() && <LogOutButton />}
      </div>
    </div>
  );
}
