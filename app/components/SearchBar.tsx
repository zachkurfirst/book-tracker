// FRONTEND CLIENT
//Search bar component where we pass search query to backend
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  type Book = {
    id: string;
    volumeInfo: {
      imageLinks: {
        thumbnail: string;
      };
      title: string;
      authors: string[];
    };
  };

  const [results, setResults] = useState<Book[]>([]);

  // runs when user submits search query
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // pass search query to the backend
    const res = await fetch(`/api/search?q=${query}`);
    console.log("query:", query);
    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }
    const data = await res.json();
    console.log("data:", data);
    console.log("data.items:", data.items);
    setResults(data.items);
  };

  return (
    <div className="flex flex-col">
      <form
        className="max-w-8xl flex justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full flex-1 rounded-md border border-slate-300 bg-slate-100 p-2 outline-none dark:border-slate-700 dark:bg-slate-800"
          type="text"
          placeholder="Search for a book or author..."
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
      <div className="">
        {results ? (
          results.map((book) => (
            <div key={book.id} className="my-8 flex gap-4">
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                width={100}
                height={150}
                className="h-auto w-24"
                title={`Cover of ${book.volumeInfo.title}`}
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-xl font-bold">{book.volumeInfo.title}</h3>
                <p>
                  {book.volumeInfo.authors &&
                    book.volumeInfo.authors.join(", ")}
                </p>
                <Link
                  href={`/book/${book.id}`}
                  className="flex w-min justify-between gap-2 rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition-all hover:bg-green-700"
                >
                  More <ArrowRightIcon className="w-4" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="my-4 text-red-500">
            No results found! Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
