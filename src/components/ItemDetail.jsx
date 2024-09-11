import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShimmerDetail from "./ShimmerDetail";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://amplify-webapp-dev-7e83a-deployment.s3.ap-south-1.amazonaws.com/items.json"
      )
      .then((response) => {
        const items = response.data;
        const selectedItem = items.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the items:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ShimmerDetail />;
  }

  if (!item) {
    return <div>Item not found</div>;
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
