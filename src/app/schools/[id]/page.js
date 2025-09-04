"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SchoolDetailPage() {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  useEffect(() => {
    async function fetchSchool() {
      const res = await fetch(`/api/schools/${id}`);
      const data = await res.json();
      setSchool(data);
    }
    fetchSchool();
  }, [id]);

  if (!school) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-400">
      <img
        src={school?.image}
        alt={school?.name}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="text-4xl font-bold mt-4 text-gray-200">{school.name}</h1>
      <p className="mt-2 text-gray-300">
        {school?.address}, {school.city}
      </p>
      <p className="mt-4 text-lg  text-white font-sans">
        {school?.description ||
          "Our school is dedicated to nurturing young minds with a balanced focus on academics, co-curricular activities, and character development. We strive to create a safe and inspiring environment where students can achieve their full potential"}
      </p>
    </div>
  );
}
