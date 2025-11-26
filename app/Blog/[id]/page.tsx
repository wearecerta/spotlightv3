"use client";

import { useParams } from "next/navigation";

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
}
