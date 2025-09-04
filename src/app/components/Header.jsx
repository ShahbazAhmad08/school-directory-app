import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">School Directory</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/addSchool"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Add School
              </Link>
            </li>
            <li>
              <Link
                href="/showSchools"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                View Schools
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
