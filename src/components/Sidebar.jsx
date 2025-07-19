import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);

  const categories = [
    {
      label: "all",
      color: "bg-green-500",
      icon: "🏪",
    },
    {
      label: "men's clothing",
      color: "bg-blue-500",
      path: "/category/men's clothing",
      icon: "👔",
    },
    {
      label: "women's clothing",
      color: "bg-pink-500",
      path: "/category/women's clothing",
      icon: "👗",
    },
    {
      label: "jewelery",
      color: "bg-yellow-500",
      path: "/category/jewelery",
      icon: "💍",
    },
    {
      label: "electronics",
      color: "bg-purple-500",
      path: "/category/electronics",
      icon: "🔌",
    },
  ];

  return (
    <aside className="p-6">
      <Link
        to="/create"
        className="group flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
      >
        <span className="mr-2">➕</span>
        Add New Product
      </Link>

      <hr className="my-8 border-gray-200" />

      <div>
        <h1 className="mb-6 text-xl font-bold text-gray-800">Categories</h1>
        <ul className="space-y-4">
          {categories.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setSelectedCategory(item.label)}
                className={`flex w-full items-center rounded-lg p-3 transition-all hover:bg-gray-50 ${selectedCategory === item.label ? "bg-gray-50 ring-2 ring-blue-100" : ""}`}
              >
                <span
                  className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg ${item.color} bg-opacity-10 text-lg`}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
