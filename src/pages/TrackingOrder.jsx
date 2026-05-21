import React from "react";
import useTrackingOrder from "../hooks/useTrackingOrder";

export default function TrackingOrder() {
  const {isError,isLoading,trackingOrder} = useTrackingOrder()
  return (
    <>
      {isLoading && <OrderStatusSkeleton />}
      {isError && <OrderStatusError />}
      {!isLoading && !isError && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md shadow-xl rounded-3xl p-8 space-y-6 bg-base-100 border border-base-200">
            <h2 className="text-2xl font-bold font-serif text-base-content tracking-tight drop-shadow-sm border-b border-base-200 pb-4">
              Order Status
            </h2>

            {/* Status */}
            <div className="flex items-center justify-between border border-base-200/80 bg-base-200/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="font-semibold text-base-content/70 uppercase tracking-widest text-xs">Status</span>
              <span className="px-4 py-1.5 text-xs rounded-full bg-warning/20 text-warning font-bold tracking-wider uppercase border border-warning/30 drop-shadow-sm">
                {trackingOrder.status}
              </span>
            </div>

            {/* Shipment */}
            <div className="flex items-center justify-between border border-base-200/80 bg-base-200/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="font-semibold text-base-content/70 uppercase tracking-widest text-xs">Shipment</span>
              <span className="font-medium text-sm text-base-content">
                {trackingOrder.shipment
                  ? trackingOrder.shipment
                  : "Not shipped yet"}
              </span>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between border border-base-200/80 bg-base-200/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="font-semibold text-base-content/70 uppercase tracking-widest text-xs">Delivery</span>
              <span className="font-medium text-sm text-base-content">
                {trackingOrder.delivery
                  ? trackingOrder.delivery
                  : "No delivery info"}
              </span>
            </div>

            {/* Message */}
            <div className="bg-info/10 border border-info/20 text-info text-sm p-5 rounded-2xl font-medium shadow-sm leading-relaxed tracking-wide">
              Your order is still being processed. Please wait for a shipment
              update.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export function OrderStatusSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-6 space-y-6 animate-pulse">
        {/* Title */}
        <div className="h-6 w-40 bg-gray-200 rounded"></div>

        {/* Status */}
        <div className="flex items-center justify-between border p-4 rounded-xl">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
        </div>

        {/* Shipment */}
        <div className="flex items-center justify-between border p-4 rounded-xl">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>

        {/* Delivery */}
        <div className="flex items-center justify-between border p-4 rounded-xl">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>

        {/* Message */}
        <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
export function OrderStatusError() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md  shadow-lg rounded-2xl p-6 text-center space-y-4">
        {/* Icon */}
        <div className="text-red-500 text-4xl">⚠️</div>

        {/* Title */}
        <h2 className="text-xl font-bold ">Failed to load order</h2>

        {/* Message */}
        <p className=" text-sm">Something went wrong</p>

        {/* Button */}
        <button className="mt-4 w-full   py-2 rounded-xl hover:opacity-90 transition">
          Try Again
        </button>
      </div>
    </div>
  );
}
