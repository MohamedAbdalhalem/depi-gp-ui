import CustomInput from "../components/CustomInput";
import AddNewAddress from "../components/AddNewAddress";
import AddressCard from "../components/AddressCard";
import { useState } from "react";
import axios from "axios";
import { use } from "react";
import { AuthContext } from "./../store/AuthContext";
import { useQuery } from "@tanstack/react-query";

export default function Addresses() {
  const { token } = use(AuthContext);
  const [showAddNewAddresse, setShowAddNewAddresse] = useState(false);
  function handleShowForm() {
    setShowAddNewAddresse((prevState) => !prevState);
  }

  function getAllAddresses() {
    return axios.get(
      `https://depi-s-gp-backend-production.up.railway.app/api/addresses`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: [`getAllAddresses`, token],
    queryFn: getAllAddresses,
  });

  const addresses = data?.data?.data;
  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-base-300 pb-6">
          <div>
            <h1 className="font-serif text-3xl font-light text-base-content md:text-4xl">
              Saved Addresses
            </h1>
            <p className="mt-2 text-base-content/70">
              Manage where we ship your orders.
            </p>
          </div>
        </header>

        <div className="space-y-6">
          {/* DEFAULT ADDRESS CARD */}
          {isLoading && <AddressesSkeleton />}
          {isError && <AddressesError />}
          {!isLoading &&
            !isError &&
            addresses.map((address) => (
              <AddressCard
                key={address.address_id}
                city={address.city}
                country={address.country}
                isDefault={address.is_default}
                phone={address.phone}
                state={address.state}
                streetAddress={address.street_address}
                zipCode={address.zip_code}
              />
            ))}
          {/* ADD ADDRESS PLACEHOLDER BUTTON */}
          {addresses?.length < 5 && (
            <div
              onClick={handleShowForm}
              className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm flex items-center justify-center border-dashed cursor-pointer hover:bg-base-200/50 transition"
            >
              <p className="text-sm font-medium text-base-content/70 flex items-center gap-2">
                <span className="text-lg">+</span> Add New Address
              </p>
            </div>
          )}
        </div>

        {/* ADD ADDRESS FORM SECTION */}
        {showAddNewAddresse && <AddNewAddress />}
      </div>
    </section>
  );
}
function AddressesSkeleton() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-200/50 p-6 shadow-sm animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Left */}
        <div className="space-y-3 w-full">
          <div className="h-5 w-20 bg-base-300 rounded-full"></div>
          <div className="h-5 w-40 bg-base-300 rounded"></div>
          <div className="h-4 w-64 bg-base-300 rounded"></div>
          <div className="h-4 w-48 bg-base-300 rounded"></div>
        </div>

        {/* Right buttons */}
        <div className="flex gap-4 sm:flex-col sm:gap-2">
          <div className="h-4 w-10 bg-base-300 rounded"></div>
          <div className="h-4 w-14 bg-base-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
function AddressesError() {
  return (
    <div className="rounded-2xl border border-error/30 bg-error/10 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Left */}
        <div>
          <span className="badge badge-error badge-sm tracking-wide uppercase font-semibold mb-3">
            Error
          </span>

          <p className="font-medium text-error text-lg mb-1">
            Something went wrong
          </p>

          <p className="text-sm text-error/80">Failed to load address</p>
        </div>

        {/* Actions */}
        <div className="flex gap-4 sm:flex-col sm:gap-2 text-xs font-semibold uppercase tracking-wider">
          <button className="text-error hover:text-error/70 transition underline underline-offset-4">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
