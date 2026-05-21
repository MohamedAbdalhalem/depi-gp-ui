import { memo, useContext, useRef } from "react";
import ReactStars from "react-stars";
import { AuthContext } from "./../store/AuthContext";
import ConfirmModal from './ConfirmModal';
import axios from "axios";
import apiUrl from "../lib/apiUrl";

export default memo(function ReviewCard({
  name,
  customerId,
  rating,
  comment,
  createdAt,
  reviewId,
  refetch
}) {
  const { savedCustomerId,token } = useContext(AuthContext);
  const isOwner = customerId === savedCustomerId;
  const ref = useRef()
  function startDeleteReview(){
    ref.current.showModal()
  }
  async function handleDeleteReview() {
    await axios.delete(`${apiUrl}reviews/${reviewId}`,{
      headers : {
        Authorization: `Bearer ${token}`,
      }
    }).then(()=>refetch())
  }
  return (
    <>
    <ConfirmModal ref={ref} onRemove={handleDeleteReview} />
    <div className="relative rounded-3xl border border-base-200 bg-base-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* OWN BADGE */}
      {isOwner && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
          own
        </span>
      )}

      {/* USER */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-sm">
          {name[0]}
        </div>

        <div>
          <p className="font-bold text-base-content tracking-tight">{name}</p>
          <p className="text-xs text-base-content/60 font-medium">{createdAt}</p>
        </div>
      </div>

      {/* RATING */}
      <div className="drop-shadow-sm">
        <ReactStars
          count={5}
          size={22}
          color2={"#ffd700"}
          value={rating}
          edit={false}
        />
      </div>

      {/* COMMENT */}
      <p className="text-sm leading-relaxed text-base-content/80 font-light italic">"{comment}"</p>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-2 border-t border-base-200/50 pt-4">
        <span className="text-success flex items-center gap-1.5 text-xs font-bold tracking-wide">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Verified Purchase
        </span>

        {/* DELETE BUTTON */}
        {isOwner && (
          <button
          onClick={startDeleteReview} 
          className="text-xs px-4 py-1.5 rounded-lg font-bold tracking-wider uppercase bg-error/10 text-error hover:bg-error hover:text-white transition-all duration-300">
            Delete
          </button>
        )}
      </div>
    </div>
    </>
  );
});
