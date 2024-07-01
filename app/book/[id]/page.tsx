// Book detail page: /book/[id] -> direct server-side fetch
const API_KEY = process.env.API_KEY;
import Image from "next/image";

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
      <div className="flex gap-8">
        <Image
          src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w480-h690`}
          alt={book.volumeInfo.title}
          width={400}
          height={600}
          className=""
          title={`Cover of ${book.volumeInfo.title}`}
          quality={100}
        />
        <div>
          <h1 className="mb-2 text-3xl font-bold md:text-5xl">
            {book.volumeInfo.title}
          </h1>
          <h2 className="mb-6 text-xl font-medium text-slate-600">
            {book.volumeInfo.subtitle && book.volumeInfo.subtitle}
          </h2>
          <h3 className="mb-6 text-xl font-medium text-slate-600">
            By: {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
          </h3>
        </div>
      </div>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
      />
    </main>
  );
}
