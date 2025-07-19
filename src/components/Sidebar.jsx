import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="p-6">
      <Link
        to="/create"
        className="block rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
      >
        Add New Product
      </Link>

      <hr className="my-6 border-gray-200" />

      <div>
        <h1 className="mb-4 text-xl font-bold text-gray-800">Categories</h1>
        <ul className="space-y-3">
          {[
            { label: "Men's Clothing", color: "bg-green-500" },
            { label: "Women's Clothing", color: "bg-rose-500" },
            { label: "Kids Collection", color: "bg-orange-500" },
            { label: "Accessories", color: "bg-blue-500" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center rounded-md p-2 transition hover:bg-gray-100"
            >
              <span className={`mr-3 h-3 w-3 rounded-full ${item.color}`}></span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


export default Sidebar;
