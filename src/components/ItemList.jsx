import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the items:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Items List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center"
          >
            <img
              src={item.avatar}
              alt={item.first_name}
              className="rounded-full w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold">
              {item.first_name} {item.last_name}
            </h3>
            <p className="text-sm text-gray-600">{item.email}</p>
            <p className="text-sm text-gray-600">Gender: {item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
