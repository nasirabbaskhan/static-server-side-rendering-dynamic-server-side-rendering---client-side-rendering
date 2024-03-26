//-----------------------Static Side Rendering with (no-cathe)-----------------------------------------

// Static Side Generation with (no-cathe) updated data on each refresh
const getBooks = async () => {
  try {
    const res = await fetch("https://api.quotable.io/random?tags=technology", {
      cache: "no-store",
    });
    const response = await res.json();

    return response;
  } catch (error: any) {
    return { error: error.message };
  }
};

export default async function Home() {
  const books = await getBooks();

  if (books.error) {
    return <p>Sorry API has some error</p>;
  }

  return (
    <div>
      <p className="text-2xl text-blue-500">
        Static Side Renfering wih no-catche
      </p>
      <div>content:{books.content}</div>
    </div>
  );
}
