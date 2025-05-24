import { useState } from "react";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { filterStores } from "../../redux/features/locations/locationStoresSlice";

function FiltersModal({ onClose }) {
  const [governorate, setGovernorate] = useState("");
  const governorates = useSelector((state) => state.stores.governorates);
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(filterStores(governorate));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] bg-opacity-40 bg-[#4444] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-3 text-gray-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Distance UI — for future use */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Distance (mi/km)</label>
          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> 25 miles
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> 50 miles
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> 100 miles
            </label>
          </div>
        </div>

        {/* Governorate Selector */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Egypt Governorates</label>
          <select
            className="w-full border p-2 rounded"
            value={governorate}
            onChange={(e) => setGovernorate(e.target.value)}
          >
            <option value="">Select...</option>
            {governorates.map((governorate) => (
              <option value={governorate}>{governorate}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-4">
          <Button
            type="secondary"
            onClick={() => {
              setGovernorate("");
              handleApply();
            }}
          >
            Reset
          </Button>
          <Button type="primary" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FiltersModal;
