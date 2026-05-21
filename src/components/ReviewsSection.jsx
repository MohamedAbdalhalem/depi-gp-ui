import ReviewCard from "./ReviewCard";
import SubmitReviewForm from "./SubmitReviewForm";
import ProductsLodaingScreen from "./ProductsLodaingScreen";
import useGetReviews from "../hooks/useGetReviews";

export default function ReviewsSection() {
  const {
    avarageRating,
    isError,
    isLoading,
    refetch,
    reviewCount,
    reviews,
    id,
  } = useGetReviews();
  return (
    <div className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-base-300 pt-16">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-serif font-bold text-base-content md:text-4xl tracking-tight drop-shadow-sm">
          Customer Reviews
        </h2>

        {!isLoading && (
          <div className="text-right">
            <span className="text-3xl font-bold text-base-content drop-shadow-sm">
              {avarageRating}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-base-content/60 ml-2 block mt-1">
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
            reviewId={review.review_id}
            refetch={refetch}
          />
        ))}
      </div>

      <SubmitReviewForm refetch={refetch} productId={id} />
    </div>
  );
}
