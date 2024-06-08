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
    <header className="sticky left-0 top-0 z-10 flex w-full max-w-8xl mx-auto items-center justify-around border-b border-slate-300 bg-slate-300/30 bg-opacity-30 p-8 backdrop-blur-3xl md:bg-inherit dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit dark:md:bg-inherit">
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
