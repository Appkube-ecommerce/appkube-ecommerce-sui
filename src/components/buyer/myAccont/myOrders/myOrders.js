import React from "react";
import Link from "next/link";

const MyOrdersPage = () => {
  return (
    <div className=" p-4 mt-6">
      <div className="flex gap-4 mb-2 border-b border-gray-200">
        <h1 className="font-semibold text-xl mb-1">My Orders</h1>
      </div>
      <div className="">
        <p className="font-semibold text-center mt-6">
          You havenot placed any order yet,
          <Link href="/" className="text-blue-500 hover:underline ml-1">
            Start Shopping!
          </Link>
        </p>
      </div>
    </div>
<<<<<<< HEAD
    <div className="">
    <p className="font-semibold text-center mt-6">
    You haven&apos;t placed any order yet,
<Link href="/" className="text-blue-500 hover:underline ml-1">
 Start Shopping!
</Link>
</p>
              </div></div>
  )
}
=======
  );
};
>>>>>>> 4bde426f34b4a4b4503490f90824700a3ed41e30

export default MyOrdersPage;
