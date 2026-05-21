import React from "react";
import { Link } from "react-router";

export default function OrderCard({
  orderId,
  orderRef,
  status,
  subtotal,
  tax,
  shipping,
  total,
  createdAt,
  amount,
  paymentStatus,
}) {
  return (
    <div className="border border-base-200 rounded-3xl p-6 bg-base-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 shadow-sm mb-10 group">
      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* LEFT */}
        <div>
          <p className="font-bold text-base-content text-lg tracking-tight">Order #{orderId}</p>
          <p className="text-xs text-base-content/50 uppercase tracking-widest font-semibold mt-1">
            {orderRef.slice(0, 15)}
          </p>
        </div>

        {/* STATUS */}
        <span className="badge badge-warning badge-sm capitalize tracking-wider font-bold shadow-sm">
          {status}
        </span>
      </div>

      {/* MIDDLE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm bg-base-200/30 p-4 rounded-2xl border border-base-200/50">
        <div>
          <p className="text-base-content/50 text-xs tracking-widest uppercase font-semibold mb-1">Date</p>
          <p className="font-medium text-base-content/80">{new Date(createdAt).toLocaleDateString()}</p>
        </div>

        <div>
          <p className="text-base-content/50 text-xs tracking-widest uppercase font-semibold mb-1">Total</p>
          <p className="font-bold text-base-content text-lg">${total}</p>
        </div>

        <div>
          <p className="text-base-content/50 text-xs tracking-widest uppercase font-semibold mb-1">Payment</p>
          <p className="font-medium">${amount}</p>
          <span className="text-xs text-warning font-bold tracking-wider uppercase mt-1 block">{paymentStatus}</span>
        </div>

        <div>
          <p className="text-base-content/50 text-xs tracking-widest uppercase font-semibold mb-1">Shipping</p>
          <p className="font-medium text-base-content/80">${shipping}</p>
        </div>
      </div>

      {/* BREAKDOWN */}
      <div className="mt-5 text-xs text-base-content/60 border-t border-base-200/60 pt-4 flex flex-wrap gap-6 font-medium">
        <span>Subtotal: ${subtotal}</span>
        <span>Tax: ${tax}</span>
      </div>

      {/* ACTION */}
      <div className="mt-5 flex justify-end">
        <Link
          to={`/orders/${orderId}`}
          className="btn btn-sm rounded-full bg-base-200 text-base-content hover:bg-neutral hover:text-neutral-content transition-all shadow-sm group-hover:shadow-md px-6 font-bold tracking-wider uppercase"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
