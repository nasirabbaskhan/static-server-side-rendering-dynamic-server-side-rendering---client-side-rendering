"use client";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: any) => {
  return fetch(url).then((res) => res.json());
};

//const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Some Thing have error</div>;
  if (isLoading) return <div>Loading....</div>;
  return (
    <div>
      <div className="text-2xl text-blue-500">Client Side Rendering</div>
      {data.content}
    </div>
  );
}
