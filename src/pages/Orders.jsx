import { Link } from "react-router";

export default function Orders() {
  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <header className="mb-10 text-center md:text-left border-b border-base-300 pb-6">
           <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
             Account Area
           </p>
           <h1 className="font-serif text-3xl font-light text-base-content md:text-4xl">
             Order History
           </h1>
           <p className="mt-2 text-base-content/70">
             Track shipping status and manage your past purchases.
           </p>
        </header>

        <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-200/30">
          <table className="table w-full">
            <thead className="bg-base-200/50 text-base-content/70">
              <tr>
                <th className="font-semibold uppercase tracking-wider text-xs p-4">Order ID</th>
                <th className="font-semibold uppercase tracking-wider text-xs p-4">Date</th>
                <th className="font-semibold uppercase tracking-wider text-xs p-4">Total Amount</th>
                <th className="font-semibold uppercase tracking-wider text-xs p-4">Status</th>
                <th className="font-semibold uppercase tracking-wider text-xs p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-base-300 hover:bg-base-200/50 transition">
                <td className="p-4 font-medium text-base-content">
                  #ORD-10492
                </td>
                <td className="p-4 text-base-content/70 text-sm">
                  Oct 12, 2023
                </td>
                <td className="p-4 text-base-content/70 text-sm">
                  $120.00
                </td>
                <td className="p-4">
                  <span className="badge badge-success badge-sm font-semibold tracking-wide border-transparent">Delivered</span>
                </td>
                <td className="p-4 text-right">
                  <Link to="/order-details/10492" className="btn btn-xs btn-outline rounded-base text-[10px] uppercase font-bold border-base-300 hover:bg-neutral hover:text-neutral-content">
                    View Order
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-base-300 hover:bg-base-200/50 transition">
                <td className="p-4 font-medium text-base-content">
                  #ORD-10495
                </td>
                <td className="p-4 text-base-content/70 text-sm">
                  Nov 03, 2023
                </td>
                <td className="p-4 text-base-content/70 text-sm">
                  $340.00
                </td>
                <td className="p-4">
                  <span className="badge badge-warning badge-sm font-semibold tracking-wide border-transparent text-warning-content">Shipped</span>
                </td>
                <td className="p-4 text-right">
                  <Link to="/order-details/10495" className="btn btn-xs btn-outline rounded-base text-[10px] uppercase font-bold border-base-300 hover:bg-neutral hover:text-neutral-content">
                    View Order
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
