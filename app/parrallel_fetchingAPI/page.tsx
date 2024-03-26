import { promises } from "dns";
import React from "react";

async function getFiction() {
  const response = await fetch(
    "http://localhost:3001/api/getdata?type=fiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
}

async function getNonfiction() {
  const response = await fetch(
    "http://localhost:3001/api/getdata?type=nonfiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
}
export default async function Parralel() {
  const fictionBook = getFiction();
  const nonfictionBook = getNonfiction();
  // const [fiction, nonfiction]= await promise.all([
  //     fictionBook,
  //     nonfictionBook
  // ])
  return (
    <div>
      <h1>Fiction Book</h1>
      {fictionBook}
      <h1>Non Fiction Book</h1>
      {nonfictionBook}
    </div>
  );
}
