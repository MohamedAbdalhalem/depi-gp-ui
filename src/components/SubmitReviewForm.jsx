import axios from "axios";
import React from "react";

export default function SubmitReviewForm() {
  

  return (
    <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-base-300 bg-base-200/30 p-6">
      <p className="text-sm font-medium text-base-content mb-1">
        Write a review
      </p>
      <p className="text-xs text-base-content/60 mb-4">
        Only verified buyers can submit reviews.
      </p>
      <div className="flex gap-1 mb-3 text-base-content/30 cursor-pointer">
        <span className="hover:text-warning">★</span>
        <span className="hover:text-warning">★</span>
        <span className="hover:text-warning">★</span>
        <span className="hover:text-warning">★</span>
        <span className="hover:text-warning">★</span>
      </div>
      <textarea
        rows={3}
        className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-sm focus:outline-none focus:border-primary"
        placeholder="Share your experience..."
      />
      <button
        type="button"
        className="mt-4 rounded-xl bg-neutral px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-content w-full"
      >
        Submit review
      </button>
    </div>
  );
}
