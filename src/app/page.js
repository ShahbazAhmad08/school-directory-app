import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl  text-gray-300 leading-tight mb-4 font-semibold">
          Welcome to the School Directory
        </h1>
        <p className="text-xl text-gray-50 mb-8 font-serif">
          Your centralized platform to manage and discover schools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/addSchool"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
          >
            Add a New School
          </Link>
          <Link
            href="/showSchools"
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 text-lg font-semibold"
          >
            View All Schools
          </Link>
        </div>
      </div>
    </div>
  );
}
