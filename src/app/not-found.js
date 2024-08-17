import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div className="flex items-center">
      <h1> Page not found</h1>
      <Link className="link link-primary" href="/">Go home</Link>
    </div>
  );
}

export default notFound;
