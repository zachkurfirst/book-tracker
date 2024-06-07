// FOOTER COMPONENT
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-4 sm:gap-0 sm:flex-row w-full items-center sm:justify-between text-center lg:w-full lg:max-w-5xl text-slate-700 dark:text-slate-300 border-t pt-12">
      <small>
        &copy; 2024. All rights reserved. Coded by{" "}
        <a
          className="font-bold"
          href="https://zachkurfirst.com/"
          target="_blank"
          rel="noopener noreferrer">
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
          />
        </a>
      </div>
    </footer>
  );
}
