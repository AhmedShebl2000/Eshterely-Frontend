import { useSelector } from "react-redux";
import StoreCard from "./StoreCard";

const StoreList = ({ setPosition }) => {
  const stores = useSelector((state) => state.stores);

  return (
    <div className="overflow-y-auto p-4 flex-1 bg-gray-50">
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          name={store.name}
          hours={store.hours}
          address={store.address}
          position={store.position}
          setPosition={setPosition}
        />
      ))}
    </div>
  );
};

export default StoreList;
