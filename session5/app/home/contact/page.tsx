"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function page() {
  const pathName = usePathname();
  return (
    <div>
      Đây là trang liên hệ
     
    </div>
  );
}
