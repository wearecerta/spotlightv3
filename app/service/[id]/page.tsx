"use client";

import { useParams } from "next/navigation";

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>Service Detail Page</h1>
      <p>Service ID: {id}</p>
    </div>
  );
}
