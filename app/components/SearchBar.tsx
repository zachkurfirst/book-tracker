// FRONTEND CLIENT
//Search bar component where we pass search query to backend
"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // console.log(query);

  // runs when user submits search query
  const handleSubmit = async (e) => {
    e.preventDefault();
    // pass search query to the backend
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    console.log("query:", query);
    console.log("data:", data);
    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    console.log("data.items:", data.items);
    setResults(data.items);
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition-all hover:bg-green-700 disabled:bg-slate-400 md:px-6 md:text-base dark:bg-slate-600 dark:disabled:bg-slate-400"
        disabled={!query}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
