// HOME PAGE: /

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Header
        </p>
      </div>

      <div className="text-5xl">Body</div>

      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row w-full items-center sm:justify-between text-center lg:w-full lg:max-w-5xl">
        <div>
          <a
            className="p-8 lg:p-0"
            href="https://zachkurfirst.com/"
            target="_blank"
            rel="noopener noreferrer">
            Coded by <span className="font-bold">Zach Kurfirst</span>
          </a>
        </div>
        <div>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer">
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
      </div>
    </main>
  );
}
