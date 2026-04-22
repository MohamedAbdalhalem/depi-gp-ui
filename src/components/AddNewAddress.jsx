import React from "react";
import CustomInput from "./CustomInput";

export default function AddNewAddress() {
  return (
    <div className="mt-16">
      <h2 className="mb-6 font-serif text-xl font-semibold text-base-content border-b border-base-300 pb-3">
        Add New Address
      </h2>
      <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6 md:p-8 shadow-sm">
        <div className="space-y-4">
          <CustomInput id="ad-name" label="FULL NAME" type="text" />
          <CustomInput id="ad-line1" label="ADDRESS LINE 1" type="text" />
          <CustomInput
            id="ad-line2"
            label="ADDRESS LINE 2 (OPTIONAL)"
            type="text"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <CustomInput id="ad-city" label="CITY" type="text" />
            <CustomInput id="ad-postal" label="POSTAL CODE" type="text" />
          </div>

          <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm text-base-content/80">
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary rounded"
            />
            Set as default shipping address
          </label>

          <button
            type="button"
            className="btn btn-neutral w-full mt-8 rounded-xl text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
}
