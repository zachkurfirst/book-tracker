// HEADER COMPONENT
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Library", href: "/library" },
  { name: "Search", href: "/search" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full max-w-4xl items-center justify-between border-slate-300 bg-slate-300/30 px-8 py-6 backdrop-blur-3xl md:static md:border-b md:bg-inherit md:pb-8 md:pt-0 dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit dark:md:bg-inherit">
      <Link href="/">
        <span className="p-4 text-2xl md:text-4xl">📚</span>
      </Link>
      <nav>
        <ul className="flex justify-end gap-4 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.name} className="font-medium">
              {/* Use 'Link' in next.js for client-side routing */}
              <Link
                className="text-slate-600 dark:text-slate-200"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="text-sm font-medium md:text-base">
          <li>Log In</li>
        </ul>
      </nav>
    </header>
  );
}
