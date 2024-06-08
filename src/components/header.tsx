// HEADER COMPONENT

// Client component
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Library", href: "/library" },
  { name: "Search", href: "/search" },
];

export default function Header() {
  // hook for navigation active states
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full max-w-4xl items-center justify-between border-slate-300 bg-slate-300/30 px-8 py-6 backdrop-blur-3xl md:static md:border-b md:bg-inherit md:pb-8 md:pt-0 dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit dark:md:bg-inherit">
      <Link href="/">
        <span className="p-4 text-2xl md:text-4xl">📚</span>
      </Link>
      <nav>
        <ul className="flex justify-end gap-4 text-sm md:text-base">
          {navItems.map((link) => (
            <li key={link.name} className="font-medium">
              {/* Use 'Link' in next.js for client-side routing */}
              <Link
                className={`${pathname === link.href ? "text-slate-950 underline underline-offset-8 dark:text-slate-50" : "text-slate-500 dark:text-slate-200"}`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 md:px-6 md:text-base dark:bg-slate-400">
        Log In
      </button>
    </header>
  );
}
