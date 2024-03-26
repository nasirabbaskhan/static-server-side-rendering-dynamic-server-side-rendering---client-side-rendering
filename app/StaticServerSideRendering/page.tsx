// Static Side Generation
const getBooks = async () => {
  try {
    const res = await fetch("https://api.quotable.io/random?tags=technology");
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
      <p className="text-2xl text-blue-500">Static Side Generation</p>
      <div>content:{books.content}</div>
    </div>
  );
}
