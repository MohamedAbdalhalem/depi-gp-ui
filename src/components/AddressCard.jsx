import { memo, useRef } from "react";
import ConfirmModal from "./ConfirmModal";
import EditModal from "./EditModal";
export default memo(function AddressCard({
  id,
  isDefault,
  phone,
  streetAddress,
  city,
  state,
  zipCode,
  country,
  onDelete,
  onUpdate
}) {
  const deleteRef = useRef();
  const editRef = useRef();
  function startDelete() {
    deleteRef.current.showModal();
  }
  function startEdit() {
    editRef.current.showModal();
  }
  async function finishDelete() {
    await onDelete(id);
  }
  async function finishEdit(updatedAddress) {
    await onUpdate(updatedAddress,id);
  }
  return (
    <>
      <ConfirmModal ref={deleteRef} onRemove={finishDelete} />
      <EditModal
        ref={editRef}
        defaultCity={city}
        defaultState={state}
        defaultStreetAddress={streetAddress}
        defaultZipCode={zipCode}
        onEdit={finishEdit}
      />
      <div className={`rounded-3xl border ${isDefault ? 'border-primary shadow-primary/10' : 'border-base-200'} bg-base-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
        {/* Subtle background glow for default */}
        {isDefault && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors"></div>}
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 z-10">
          {/* Left */}
          <div>
            {isDefault && (
              <span className="badge badge-primary badge-sm tracking-widest uppercase font-bold mb-4 shadow-sm">
                Default
              </span>
            )}

            <p className="font-bold text-base-content text-xl mb-2 tracking-tight">
              {phone}
            </p>

            <p className="text-sm leading-relaxed text-base-content/70 font-medium">
              {streetAddress} <br />
              {city}, {state} {zipCode} <br />
              <span className="text-base-content/50 uppercase tracking-widest text-xs mt-1 block">{country}</span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 sm:flex-col sm:gap-3 text-xs font-bold uppercase tracking-wider bg-base-200/50 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
            <button
              type="button"
              onClick={startEdit}
              className="text-primary hover:text-primary/70 transition-colors cursor-pointer flex items-center gap-1"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={startDelete}
              className="text-error hover:text-error/70 transition-colors cursor-pointer flex items-center gap-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
