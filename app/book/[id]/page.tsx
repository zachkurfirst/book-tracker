// Book detail page: /book/[id] -> direct server-side fetch
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
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        {book.volumeInfo.title}
      </h1>
      <p className="mb-4">{book.volumeInfo.description}</p>
    </main>
  );
}
