import { Star } from "lucide-react";
import Button from "../../UI/Button";

const reviews = [
  {
    id: 1,
    name: "Youssef",
    rating: 5,
    comment: "Amazing product! Great quality and fast delivery.",
    date: "May 22, 2025",
  },
  {
    id: 2,
    name: "Mohammed",
    rating: 4,
    comment: "Good value for the price. Will buy again.",
    date: "May 20, 2025",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <div className="max-w-2xl mx-auto m-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 place-self-center-safe">
        Customer Reviews
      </h2>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-t pt-4">
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium">{review.name}</p>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Write a review button */}
      <div className="mt-6 text-center">
        <Button type="primary">Write a Review</Button>
      </div>
    </div>
  );
}
