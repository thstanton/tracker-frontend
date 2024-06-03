"use client";
import { getUnreadCount } from "@/lib/api/apiService";
import { useEffect, useState } from "react";

export default function UnreadCount() {
  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    async function unreadCount() {
      const count = await getUnreadCount();
      setUnreadCount(count);
    }
    unreadCount();
  }, []);

  if (unreadCount) {
    return <span className="badge badge-neutral">{unreadCount}</span>;
  } else {
    return null;
  }
}
