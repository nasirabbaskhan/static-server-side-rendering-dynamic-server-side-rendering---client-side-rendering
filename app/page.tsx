"use client";
import useSWR from "swr";
//-----------------------Static Side Generation without (no-cathe)-----------------------------------------

// Static Side Generation
// const getBooks = async () => {
//   try {
//     const res = await fetch("https://api.quotable.io/random?tags=technology");
//     const response = await res.json();
//     console.log("statusg", res.ok);
//     return response;
//   } catch (error: any) {
//     return { error: error.message };
//   }
// };

// export default async function Home() {
//   const books = await getBooks();
//   console.log(books);
//   if (books.error) {
//     return <p>Sorry API has some error</p>;
//   }

//   return (
//     <div>
//       <p className="text-2xl text-blue-500">Static Side Generation</p>
//       <div>content:{books.content}</div>
//     </div>
//   );
// }

//-----------------------Static Side Rendering with (no-cathe)-----------------------------------------

// Static Side Generation with (no-cathe) updated data on each refresh
// const getBooks = async () => {
//   try {
//     const res = await fetch("https://api.quotable.io/random?tags=technology", {
//       cache: "no-cache",
//     });
//     const response = await res.json();
//     console.log("statusg", res.ok);
//     return response;
//   } catch (error: any) {
//     return { error: error.message };
//   }
// };

// export default async function Home() {
//   const books = await getBooks();
//   console.log(books);
//   if (books.error) {
//     return <p>Sorry API has some error</p>;
//   }

//   return (
//     <div>
//       <p className="text-2xl text-blue-500">Static Side Renfering wih no-catche</p>
//       <div>content:{books.content}</div>
//     </div>
//   );
// }

//-----------------------Server Side Generation using (no-store)-----------------------------------------

// Static Side Generation with (no-cathe) updated data on each refresh
// const getBooks = async () => {
//   try {
//     const res = await fetch("https://api.quotable.io/random?tags=technology", {
//       cache: "no-store",
//     });
//     const response = await res.json();
//     console.log("statusg", res.ok);
//     return response;
//   } catch (error: any) {
//     return { error: error.message };
//   }
// };

// export default async function Home() {
//   const books = await getBooks();
//   console.log(books);
//   if (books.error) {
//     return <p>Sorry API has some error</p>;
//   }

//   return (
//     <div>
//       <p className="text-2xl text-blue-500">Server Side Rendering wih no-catche</p>
//       <div>content:{books.content}</div>
//     </div>
//   );
// }
//-----------------------Client Side Rendering-----------------------------------------

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: any) => {
  return fetch(url).then((res) => res.json());
};

//const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log("aneela data", data);
  console.log("aneela loading", isLoading);
  console.log("aneela error", error);

  if (error) return <div>Some Thing have error</div>;
  if (isLoading) return <div>Loading....</div>;
  return (
    <div>
      <div className="text-2xl text-blue-500">Client Side Rendering</div>
      {data.content}
    </div>
  );
}
