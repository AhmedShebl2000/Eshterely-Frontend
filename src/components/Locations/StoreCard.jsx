import Button from "../../UI/Button";

function StoreCard({ name, hours, address, position, setPosition }) {
  function handleClick() {
    setPosition([position.lat, position.lng]);
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-start gap-3 bg-white p-4 rounded shadow-sm border mb-4"
    >
      {/* Logo */}
      <div className="w-9 h-9 flex-shrink-0 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-semibold">
        ee
      </div>

      {/* Store Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-black">{name}</h3>
        <p className="text-sm text-gray-700">{hours}</p>
        <p className="text-sm text-blue-800 mt-1">{address}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button type="primary">Book a demo</Button>
          <Button type="secondary">Visit store page</Button>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
