import { Link, useParams } from "react-router";

export default function OrderDetail() {
  const { id } = useParams();
  
  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Link to="/orders" className="text-sm font-semibold text-base-content/60 hover:text-primary transition underline underline-offset-4">
          ← Back to Orders
        </Link>
        
        <header className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-base-300 pb-6 mb-8">
          <div>
            <h1 className="font-serif text-3xl font-light text-base-content">
              Order #{id || "10492"}
            </h1>
            <p className="mt-2 text-sm text-base-content/70">
              Placed on Oct 12, 2023
            </p>
          </div>
          <div className="text-left md:text-right">
             <span className="badge badge-success badge-lg font-semibold tracking-wide border-transparent">Delivered</span>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
           <div className="md:col-span-2 space-y-6">
              {/* ORDER ITEMS */}
              <div className="rounded-2xl border border-base-300 bg-base-200/30 overflow-hidden">
                <table className="table w-full text-left">
                  <thead className="bg-base-200/50 text-base-content/70 border-b border-base-300">
                    <tr>
                      <th className="font-semibold uppercase tracking-wider text-xs p-4">Item</th>
                      <th className="font-semibold uppercase tracking-wider text-xs p-4 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-base-300 hover:bg-base-200/50">
                      <td className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-base-300 border border-base-300 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-base-content">Concentré de Nuit</p>
                          <p className="text-xs text-base-content/60 mt-1">Qty: 1</p>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-medium text-base-content text-right align-middle">
                        $120.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* PAYMENT SUMMARY */}
              <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6">
                 <h3 className="font-serif text-lg font-medium text-base-content mb-4 border-b border-base-300 pb-2">Payment Summary</h3>
                 <ul className="space-y-3 text-sm text-base-content/70">
                   <li className="flex justify-between"><span>Subtotal</span> <span className="text-base-content font-medium">$120.00</span></li>
                   <li className="flex justify-between"><span>Shipping</span> <span className="text-base-content font-medium">$12.00</span></li>
                   <li className="flex justify-between border-t border-base-300 pt-3 text-base-content font-semibold text-base mt-2">
                     <span>Total</span> <span>$132.00</span>
                   </li>
                 </ul>
              </div>
           </div>
           
           <div className="space-y-6">
              {/* SHIPPING TRACKING */}
              <div className="rounded-2xl border border-primary bg-base-200/50 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-medium text-base-content mb-4 border-b border-primary/20 pb-2">Shipping Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">Status</p>
                    <p className="text-sm font-medium text-base-content">Package Delivered</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">Carrier</p>
                    <p className="text-sm font-medium text-base-content">LUMIÈRE Logistics</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">Tracking Number</p>
                    <p className="text-sm font-semibold text-info underline cursor-pointer">TRK9876543</p>
                  </div>
                </div>
              </div>

              {/* SHIPPING ADDRESS */}
              <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-medium text-base-content mb-4 border-b border-base-300 pb-2">Delivery Address</h3>
                <p className="font-medium text-base-content text-sm mb-1">Alex Dupont</p>
                <p className="text-sm leading-relaxed text-base-content/70">
                  12 Rue de la Paix <br /> 75002 Paris, France
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
