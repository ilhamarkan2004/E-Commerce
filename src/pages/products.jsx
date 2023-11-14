import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Ges",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          temporibus ducimus eveniet, possimus magnam similique iure perferendis
          facilis, esse animi fuga et, unde culpa beatae dolor quos quo
          repellendus repudiandae.`,
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: "Rp 5.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-green-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
