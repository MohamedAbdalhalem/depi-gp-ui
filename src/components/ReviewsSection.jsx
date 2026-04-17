import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import SubmitReviewForm from "./SubmitReviewForm";
import { useParams } from "react-router";
import axios from "axios";
import ProductsLodaingScreen from "./ProductsLodaingScreen";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const reviewCount = reviews?.length;
  let totalRating = 0;
  if (reviews) {
    for (const review of reviews) {
      totalRating +=  review.rating
    }
  }
  const avarageRating = totalRating === 0 ? totalRating :  totalRating / reviewCount
  function handleGetReviews() {
    setIsLoading(true);
    axios
      .get(
        `https://depi-s-gp-backend-production.up.railway.app/api/products/${id}/reviews`,
      )
      .then((data) => {
        setReviews(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    handleGetReviews();
  }, []);
  return (
    <div className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-base-300 pt-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-light text-base-content md:text-2xl">
          Customer Reviews
        </h2>
        
        {!isLoading && (
          <div className="text-right">
            <span className="text-2xl font-semibold text-base-content">
              {avarageRating}
            </span>
            <span className="text-sm text-base-content/60 ml-2 block">
              Based on {reviewCount} reviews
            </span>
          </div>
        )}
      </div>
      {isLoading && <ProductsLodaingScreen />}
      <div className="grid gap-6 md:grid-cols-3">
        {reviews?.map((review) => (
          <ReviewCard
            key={review.review_id}
            name={review.customer.first_name + " " + review.customer.last_name}
            customerId={review.customer_id}
            rating={review.rating}
            comment={review.comment}
            createdAt={review.reated_at}
          />
        ))}
      </div>

      <SubmitReviewForm />
    </div>
  );
}
