// Book detail page: /book/[id] -> dynamic route
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function BookDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const res = await fetch(`${BASE_URL}/api/book/${id}`);
  console.log('res: ', res);
  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }
  const book = await res.json();
  console.log('book: ', book);
  return (
    <main className="mx-8 my-16 max-w-md md:max-w-prose">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        {book.volumeInfo.title}
      </h1>
      <p className="mb-4">
        {book.volumeInfo.description}
      </p>
    </main>
  );
}
