import { Link } from "react-router";
import useOrderDetials from "../hooks/useOrderDetials";

export default function OrderDetials() {
  const { isError, isLoading, orderDetails } = useOrderDetials();
  return (
    <>
      {isLoading && <OrderDetailsSkeleton />}
      {isError && <OrderDetailsError />}
      {!isLoading && !isError && (
        <section className="bg-base-100 min-h-screen py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            {/* Back link */}
            <Link
              to="/orders"
              className="text-sm font-semibold text-base-content/60 hover:text-primary transition underline underline-offset-4"
            >
              ← Back to Orders
            </Link>

            {/* Header */}
            <header className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-base-300 pb-6 mb-8">
              <div>
                <h1 className="font-serif text-4xl font-light text-base-content tracking-tight drop-shadow-sm">
                  Order #{orderDetails?.order_id}
                </h1>
                <p className="mt-2 text-sm text-base-content/70">
                  Placed on {new Date(orderDetails?.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="badge badge-success badge-lg font-semibold tracking-wide border-transparent">
                  {orderDetails?.status}
                </span>
              </div>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Left column – Order items */}
              <div className="md:col-span-2 space-y-6">
                <div className="rounded-3xl border border-base-200 bg-base-100 shadow-sm hover:shadow-md transition-all">
                  <table className="w-full text-left divide-y divide-base-200/20">
                    <thead className="bg-base-200/50 text-base-content/70 border-b border-base-300">
                      <tr>
                        <th className="p-4 text-xs uppercase">Item</th>
                        <th className="p-4 text-xs text-right uppercase">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails?.items?.map((item) => (
                        <tr key={item.order_item_id} className="border-b hover:bg-base-200/30 transition-colors">
                          <td className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded bg-base-300 border shrink-0" />
                            <div>
                              <Link
                                to={`/products/${item.variant?.product?.product_id}`}
                                className="font-medium text-base-content"
                              >
                                {item.variant?.product?.product_name}
                              </Link>
                              <p className="text-xs opacity-60">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </td>
                          <td className="p-4 text-right font-medium text-base-content">
                            ${item.price_at_purchase}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Payment Summary */}
                <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-serif text-lg mb-4 border-b pb-2 text-base-content">
                    Payment Summary
                  </h3>
                  <ul className="space-y-3 text-sm text-base-content/80">
                    <li className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">${orderDetails?.subtotal}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">${orderDetails?.shipping}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tax</span>
                      <span className="font-medium">${orderDetails?.tax}</span>
                    </li>
                    <li className="flex justify-between border-t pt-3 font-semibold text-base-content">
                      <span>Total</span>
                      <span>${orderDetails?.total}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right column – Payment info */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-serif text-lg mb-4 border-b pb-2 text-base-content">
                    Payment Info
                  </h3>
                  <div className="space-y-4 text-sm text-base-content/80">
                    <div>
                      <p className="text-xs uppercase opacity-60">Status</p>
                      <p className="font-medium">{orderDetails?.payment?.status}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase opacity-60">Amount</p>
                      <p className="font-medium">${orderDetails?.payment?.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase opacity-60">Payment ID</p>
                      <p className="font-medium break-all">{orderDetails?.payment?.payment_id}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="track"
                  className="btn btn-primary w-full rounded-full text-base-100 hover:bg-primary/90 transition"
                >
                  Track Your Package
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function OrderDetailsSkeleton() {
  return (
    <section className="bg-base-100 min-h-screen py-12 animate-pulse">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-base-300 pb-6 mb-8">
          <div className="space-y-4">
            <div className="h-6 w-48 bg-base-300 rounded" />
            <div className="h-4 w-32 bg-base-300 rounded" />
          </div>
          <div className="badge badge-success badge-lg w-24 h-6 bg-base-300 rounded" />
        </div>

        {/* Order items table */}
        <div className="rounded-3xl border border-base-200 bg-base-100 p-6">
          <div className="h-4 w-1/2 bg-base-300 rounded mb-4" />
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-base-300 rounded">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-base-200 rounded" />
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-base-300 rounded" />
                    <div className="h-3 w-20 bg-base-300 rounded" />
                  </div>
                </div>
                <div className="h-4 w-16 bg-base-300 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary & Info skeletons */}
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-3xl border border-base-200 bg-base-100 p-6" />
            <div className="rounded-3xl border border-base-200 bg-base-100 p-6" />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-base-200 bg-base-100 p-6" />
            <div className="h-12 w-full bg-base-300 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderDetailsError() {
  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold mb-2">Failed to load order</h2>
        <p className="text-sm text-base-content/70 mb-6">
          Something went wrong while fetching order details.
        </p>
        <button className="btn btn-primary mt-4">Try Again</button>
      </div>
    </section>
  );
}
