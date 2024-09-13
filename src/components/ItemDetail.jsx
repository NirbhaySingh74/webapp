import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShimmerDetail from "./ShimmerDetail";
const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/items/${id}`)
      .then((response) => {
        setItem(response.data); // Set the item details in state
      })
      .catch((error) => {
        console.error("Error fetching the item:", error);
      });
  }, [id]);

  if (!item) {
    return <ShimmerDetail />; // Show shimmer effect while loading
  }

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center">
        <img
          src={item.avatar}
          alt={item.first_name}
          className="rounded-full w-40 h-40 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-4">
          {item.first_name} {item.last_name}
        </h3>
        <p className="text-lg text-gray-600 mb-2">{item.email}</p>
        <p className="text-lg text-gray-600 mb-2">Gender: {item.gender}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
