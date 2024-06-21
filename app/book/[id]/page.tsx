// Book detail page: /book/[id] -> direct server-side fetch
// import { removeHtmlTags } from "@/utils/sanitizeHtml";
const API_KEY = process.env.API_KEY;

export default async function BookDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }
  const book = await res.json();
  return (
    <main className="mx-8 my-16 max-w-md md:max-w-prose">
      <h1 className="mb-2 text-3xl font-bold md:text-5xl">
        {book.volumeInfo.title}
      </h1>
      <h2 className="text-slate-600 text-xl font-medium mb-6">{book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</h2>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
      />
    </main>
  );
}
