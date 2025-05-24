import HeroSection from "../components/ProductDetails/HeroSection";
import VariantsProduct from "../components/ProductDetails/VariantsProduct";
import ProductHighlight from "../components/ProductDetails/ProductHighlight";
import Accordion from "../components/ProductDetails/Accordion";
import SignUp from "../components/ProductDetails/Signup";
import ReviewSection from "../components/ProductDetails/ReviewSection";

function ProductDetails() {
  return (
    <>
      <HeroSection />
      <VariantsProduct />
      <ProductHighlight />
      <Accordion />
      <ReviewSection />
      <SignUp />
    </>
  );
}

export async function loader({ params }) {
  const { category, productId } = params;
  const res = await fetch(
    `https://eshterely.up.railway.app/api/${category}/${productId}`
  );
  const data = await res.json();
  return data;
}

export default ProductDetails;
