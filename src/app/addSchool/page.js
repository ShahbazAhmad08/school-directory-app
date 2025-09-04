"use client";

import { useForm } from "react-hook-form";

export default function AddSchoolPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    // text fields
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);

    // file field (only first file)
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    const res = await fetch("/api/schools", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      reset();
      alert("School added successfully!");
    } else {
      const err = await res.json();
      alert("Error: " + err.error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register("name", { required: true })}
          placeholder="School Name"
          className="w-full border p-2 rounded"
        />
        {errors.name && <span className="text-red-500">Name required</span>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("city", { required: true })}
          placeholder="City"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("state", { required: true })}
          placeholder="State"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })}
          placeholder="Contact"
          className="w-full border p-2 rounded"
        />
        {errors.contact && (
          <span className="text-red-500">Enter 10-digit number</span>
        )}

        <input
          type="email"
          {...register("email_id", { required: true })}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email_id && (
          <span className="text-red-500">Valid email required</span>
        )}

        <input
          type="file"
          {...register("image", { required: true })}
          accept="image/*"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add School
        </button>
      </form>
    </div>
  );
}
