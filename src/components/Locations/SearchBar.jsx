import {
  MagnifyingGlassIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersModal from "./FilterModal";

function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="p-4 border-b">
      <h2 className="text-xl font-semibold mb-1">Find a store – Eshtereely</h2>
      <p className="text-sm text-gray-600 mb-3">Search by Address or Region</p>

      <div className="flex rounded border overflow-hidden">
        <input
          type="text"
          placeholder="e.g. Egypt, Cairo"
          className="flex-1 p-2 outline-none"
        />

        {/* Icons section */}
        <div className="flex items-center space-x-2 pr-2">
          <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <MapPinIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => setShowFilters(true)}
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {showFilters && <FiltersModal onClose={() => setShowFilters(false)} />}
    </div>
  );
}

export default SearchBar;
