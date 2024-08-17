import Form from "@/components/Form";
import ShowBooks from "@/components/ShowBooks";
import React from "react";

async function getData() {
  const req = await fetch(
    "https://json-api.uz/api/project/books_hasan/books",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await req.json();
  return data;
}

async function Contact() {
  const books = await getData();
  return (
    <div className="flex justify-between max-w-[1240px] mt-[100px] mx-auto">
      <Form />
      <ShowBooks books={books.data} />
    </div>
  );
}

export default Contact;
