// Search bar component can be placed on any page where we want a search bar
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/?q=${search}`);
  };

  return (
    <form
      className="max-w-8xl flex justify-between gap-4"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full flex-1 rounded-md border border-slate-300 bg-slate-100 p-2 outline-none dark:border-slate-700 dark:bg-slate-800"
        type="text"
        placeholder="Search a book or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 disabled:bg-slate-400 md:px-6 md:text-base dark:bg-slate-600 dark:disabled:bg-slate-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
