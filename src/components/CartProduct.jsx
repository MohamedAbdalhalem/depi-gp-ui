import React, { memo , useRef } from "react";
import { use } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router";
import useUpdateQuantity from "../hooks/useUpdateQuantity";
import ConfirmModal from "./ConfirmModal";

export default memo(function CartProduct({
  id,
  image,
  name,
  size,
  quantity,
  productTotalPrice,
  stock,
  variantId,
}) {
  const { handleRemoveProductFromCart } = use(CartContext);
  const {
    downQuantityAction,
    downQuantityPending,
    upQuantityAction,
    upQuantityPending,
    optimisticValue
  } = useUpdateQuantity(id, quantity, stock);
  const productId = variantId % 2 === 0 ? variantId / 2 : (variantId + 1) / 2;
  const modalRef = useRef()

  async function confrimRemoveProductFromCart(){
    await handleRemoveProductFromCart(id)
    modalRef.current.close()
  }
  function startDeleteItem(){
    modalRef.current.showModal()
  }
  return (
    <>
      <ConfirmModal ref={modalRef} onRemove={confrimRemoveProductFromCart} />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center bg-base-100 hover:bg-base-200/50 transition-all duration-300 border border-base-200/60 shadow-sm hover:shadow-md mb-5 rounded-3xl group">
        <Link
          to={`/products/${productId}`}
          className="h-28 w-full shrink-0 overflow-hidden rounded-2xl bg-base-200 sm:h-24 sm:w-24 border border-base-200 group-hover:shadow-sm transition-all"
        >
          <img src={image} alt={name} className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </Link>

        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-xl font-bold text-base-content tracking-tight drop-shadow-sm">
            {name}
          </h2>

          <p className="mt-1 text-sm text-base-content/70 font-medium tracking-wide">Variant: {size}</p>

          <form className="mt-3 flex border border-base-200/80 rounded-xl w-fit items-center bg-base-200/30 overflow-hidden shadow-sm">
            <button
              formAction={downQuantityAction}
              disabled={upQuantityPending || downQuantityPending}
              className="px-4 py-1.5 md:py-2 bg-base-200/50 hover:bg-base-300 text-base-content/70 hover:text-base-content transition-colors font-bold disabled:opacity-50 cursor-pointer"
            >
              -
            </button>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="quantity" value={quantity} />
            <span className="text-xs uppercase tracking-widest text-base-content px-4 font-bold">
              Qty {optimisticValue}
            </span>

            <button
              formAction={upQuantityAction}
              disabled={upQuantityPending || downQuantityPending}
              className="px-4 py-1.5 md:py-2 bg-base-200/50 hover:bg-base-300 text-base-content/70 hover:text-base-content transition-colors font-bold disabled:opacity-50 cursor-pointer"
            >
              +
            </button>
          </form>
        </div>

        <div className="text-right sm:text-right flex justify-between sm:block mt-4 sm:mt-0">
          <p className="font-bold tabular-nums text-base-content text-xl drop-shadow-sm">
            ${productTotalPrice}
          </p>

          <button
            type="button"
            className="mt-2 text-xs font-semibold tracking-wider text-error/80 uppercase hover:text-error transition-colors cursor-pointer"
            onClick={startDeleteItem}
          >
            Remove item
          </button>
        </div>
      </div>
    </>
  );
});
