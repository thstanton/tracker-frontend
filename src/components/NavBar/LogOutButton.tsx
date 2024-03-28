"use client";

import { handleLogout } from "./actions";

export default function LogOutButton() {
  return (
    <button className="font-zen btn btn-outline" onClick={() => handleLogout()}>
      LOG OUT
    </button>
  );
}
