// FOOTER COMPONENT
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full max-w-4xl flex-col items-center gap-4 border-t border-slate-200 py-12 text-center text-slate-700 sm:flex-row sm:justify-between sm:gap-0 dark:border-slate-700 dark:text-slate-300">
      <small>
        &copy; 2024. All rights reserved. Coded by{" "}
        <a
          className="font-bold"
          href="https://zachkurfirst.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zach Kurfirst
        </a>
      </small>
      <div>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={90}
            height={18.5}
            priority
            title="Next.js Logo"
          />
        </a>
      </div>
    </footer>
  );
}
