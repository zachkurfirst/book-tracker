// Book detail page: /book/[id] -> dynamic route

export default async function BookDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  console.log(id);
  const res = await fetch(`/api/book/${id}`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }
  const book = await res.json();
  return (
    <main className="mx-8 my-16 max-w-md md:max-w-prose">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        {book.items.volumeInfo.title}
      </h1>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </main>
  );
}
