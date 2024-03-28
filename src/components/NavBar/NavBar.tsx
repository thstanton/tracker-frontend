import { isAuthenticated } from "@/lib/auth/auth.service";
import Link from "next/link";
import LogOutButton from "./LogOutButton";

export default function NavBar() {
  return (
    <div className="navbar px-6 mb-3">
      <div className="navbar-start font-zen text-2xl">TRACKER</div>
      <div className="navbar-end gap-2">
        <ul className="menu menu-horizontal p-0 gap-2 font-zen">
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
