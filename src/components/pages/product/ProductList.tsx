import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import NavbarComponent from "../../common/NavbarComponent";
import Product from "./component/Product";
import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// interface IProduct {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   imgSrc: string;
//   isNew: boolean;
//   isOnSale: boolean;
// }

// export const products: IProduct[] = [
//   {
//     id: 1,
//     name: "omege 3",
//     price: 2000,
//     quantity: 10,
//     imgSrc: require("../../../img/jpg/product-1.jpg"),
//     isNew: false,
//     isOnSale: false,
//   },
//   {
//     id: 2,
//     name: "Rolex",
//     price: 2100,
//     quantity: 40,
//     imgSrc: require("../../../img/jpg/product-1.jpg"),
//     isNew: true,
//     isOnSale: false,
//   },
//   {
//     id: 3,
//     name: "Gucci",
//     price: 1990,
//     quantity: 0,
//     imgSrc: require("../../../img/jpg/product-1.jpg"),
//     isNew: false,
//     isOnSale: false,
//   },
//   {
//     id: 4,
//     name: "Piaget",
//     price: 1200,
//     quantity: 70,
//     imgSrc: require("../../../img/jpg/product-1.jpg"),
//     isNew: false,
//     isOnSale: false,
//   },
//   {
//     id: 5,
//     name: "Tissot",
//     price: 1500,
//     quantity: 100,
//     imgSrc: require("../../../img/jpg/product-1.jpg"),
//     isNew: true,
//     isOnSale: false,
//   },
// ];

export interface IProd {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const ProductList = () => {
  const [productsDataList, setProductDataList] = useState<IProd[]>();
  console.log("productsDataList", productsDataList);

  const ProductContainerRef = useRef<HTMLDivElement>(null);
  const targetItemRef = useRef<HTMLDivElement>(null);
  const prevTextCountRef = useRef<number>(0);
  console.log("targetItemRef", targetItemRef, ProductContainerRef);

  async function fetchProducts() {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=8&page=1"
    );
    return response.data;
  }

  // const {
  //   data: productsData,
  //   isFetching,
  //   isFetchingNextPage: isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  // } = useInfiniteQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  //   refetchOnWindowFocus: false,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage) => {
  //     const hasNextPage = lastPage?.page * lastPage?.perPage < lastPage.total;
  //     return hasNextPage ? lastPage?.page + 1 : null;
  //   },
  // });

  const { data: productsData, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  });
  // console.log("hasNextPage", hasNextPage);

  // console.log("datap", productsData?.pages);

  //Initial & futher data population
  // useLayoutEffect(() => {
  //   if (productsData) {
  //     handleVolunteerListInfinite();
  //   }
  // }, [productsData]);
  console.log("productsData", productsData);

  // function handleVolunteerListInfinite() {
  //   if (!productsData?.pages?.length) return;

  //   const tempVolunteerList = [];
  //   for (let obj of productsData?.pages) {
  //     const tempItemArray = obj;
  //     if (tempItemArray?.length) {
  //       tempVolunteerList.push(...tempItemArray);
  //     }
  //   }
  //   // console.log("temo", tempVolunteerList);

  //   setProductDataList(tempVolunteerList);
  // }

  //Intersection observer for inifinite scroll
  // useEffect(() => {
  //   const options = {
  //     root: ProductContainerRef.current,
  //     rootMargin: "0px",
  //     threshold: 0.75,
  //   };
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     if (entries?.[0]?.isIntersecting && !isFetching && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   }, options);

  //   if (targetItemRef.current) observer.observe(targetItemRef.current);

  //   return () => observer.disconnect();
  // }, [productsDataList?.length]);

  console.log("ProductContainerRef", ProductContainerRef);

  return (
    <>
      {isFetching ? (
        <div className="loadingCenter">Loading...</div>
      ) : (
        <div className="products-container" ref={ProductContainerRef}>
          {!!productsData?.length &&
            productsData.map((product: IProd, index: number) => (
              <div
                className="product"
                ref={index === productsData?.length - 1 ? targetItemRef : null}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-name">{product.title}</div>
                <div className="product-price">{product.price}</div>
                <button
                  type="button"
                  // onClick={() => {
                  //   addToCart(product);
                  // }}
                >
                  AddtoCart
                </button>
              </div>
            ))}
        </div>
      )}
      {isFetching && <>Loading</>}
    </>
  );
};
export default ProductList;
