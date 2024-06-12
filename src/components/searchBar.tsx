// Search bar component can be placed on any page where we want a search bar
const API_KEY = process.env.API_KEY;
import { useSearchParams } from "next/navigation";

async function fetchData() {
  console.log(API_KEY);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=test&maxResults=2&key=${API_KEY}`,
  );
  const data = await response.json();
  console.log(data);
  return <div>searchBar</div>;
}

export default function SearchBar() {
  fetchData();
  return (
    <div className="max-w-8xl flex justify-center gap-4">
      <input
        className="w-full rounded-md border border-slate-300 bg-slate-100 p-2 dark:border-slate-700 dark:bg-slate-800"
        type="text"
        placeholder="Search a book or author..."
        onChange={(e) => console.log(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}
