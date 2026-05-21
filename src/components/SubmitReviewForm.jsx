import axios from "axios";
import React, { useRef } from "react";
import { useActionState } from "react";
import ReactStars from "react-stars";
import apiUrl from "./../lib/apiUrl";
import { use } from "react";
import { AuthContext } from "../store/AuthContext";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useAddReview from "../hooks/useAddReview";

export default function SubmitReviewForm({ refetch, productId }) {
  const {formAction,pending,ratingRef} = useAddReview(refetch,productId)
  return (
    <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm transition-all hover:shadow-md">
      <p className="text-xl font-bold text-base-content mb-1 tracking-tight drop-shadow-sm">
        Write a review
      </p>
      <p className="text-xs text-base-content/60 mb-6 font-semibold uppercase tracking-widest">
        Only verified buyers can submit reviews.
      </p>
      <div className="flex gap-1 mb-4 text-base-content/30 cursor-pointer drop-shadow-sm">
        <ReactStars
          count={5}
          size={28}
          color2={"#ffd700"}
          value={1}
          half={false}
          ref={ratingRef}
        />
      </div>
      <form action={formAction}>
        <textarea
          rows={3}
          className="w-full rounded-2xl border border-base-200/80 bg-base-100 px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all duration-300"
          placeholder="Share your experience..."
          name="comment"
        />
        <button
          type="submit"
          className="btn btn-neutral mt-4 w-full rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          disabled={pending}
        >
          {pending ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}
