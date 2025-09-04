"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchSchools() {
      const res = await fetch("/api/schools");
      const data = await res.json();
      setSchools(data);
    }
    fetchSchools();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">Schools Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(schools) &&
          schools.map((s) => (
            <Link key={s.id} href={`/schools/${s.id}`}>
              <div className="border rounded-lg shadow-sm p-4 bg-white cursor-pointer hover:shadow-md transition">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{s.name}</h2>
                <p className="text-sm text-gray-600">
                  {s.address}, {s.city}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
