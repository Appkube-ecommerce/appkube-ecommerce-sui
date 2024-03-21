import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { saveOrdersList } from "@/redux/slices/orderSlice";

const OrderInfo = () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const idFromParams = searchParams.get("data");
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetchOrdersFromApi(); // Implement this function to fetch orders from your API
        dispatch(saveOrdersList(response.data.listOrders.items));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [dispatch]);

  const orders = useSelector((state) => state.ordersData.ordersList);
  console.log(orders, "coming from redux");

  const backToOrders = () => {
    router.push("/admin/orders");
  };

  const data = orders.filter((item) => item.id === idFromParams);
  console.log("filter value", data);

  return (
    <>
      <div className="p-8">
        <header className="flex gap-5">
          <ArrowLeftOutlined
            className="text-lg font-semibold"
            onClick={backToOrders}
          />
          <div className="flex gap-4 justify-center">
            <h1 className="font-bold text-xl">{data[0]?.id||idFromParams}</h1>
            <button
              style={{
                backgroundColor: "#E3E3E3",
                borderRadius: "5px",
                padding: "8px 15px 8px 15px",
              }}
            >
              Refund
            </button>
            <button
              style={{
                backgroundColor: "#E3E3E3",
                borderRadius: "5px",
                padding: "8px 15px 8px 15px",
              }}
            >
              Return
            </button>
            <button
              style={{
                backgroundColor: "#E3E3E3",
                borderRadius: "5px",
                padding: "8px 15px 8px 15px",
              }}
            >
              Edit
            </button>
          </div>
        </header>
        <div className="ml-10">{data[0]?.createdAt}</div>
      </div>
      {/* Rest of your JSX */}
    </>
  );
};

export default OrderInfo;
