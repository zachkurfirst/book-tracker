// Search page: /search
const API_KEY = process.env.API_KEY;
import SearchBar from "../components/SearchBar";

// const fetchData = async (e) => {
//   e.preventDefault();
//   console.log(API_KEY);
//   console.log(`fetching data with query: ${search}`);
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=2&key=${API_KEY}`,
//   );
//   const data = await res.json();
//   if (!res.ok) {
//     throw new Error(data.message || "Something went wrong");
//   }
//   console.log(data);
//   return data;
// };

export default function Search() {
  return (
    <main className="mx-8 my-16 max-w-md md:max-w-prose">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Search</h1>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <SearchBar />
    </main>
  );
}
