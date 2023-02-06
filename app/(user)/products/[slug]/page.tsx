import { groq } from "next-sanity";
import {
  ProductHeader,
  ProductGallery,
  ProductDescription,
} from "../../../../components/frontend";
import { client } from "../../../../lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

const query = groq`
    *[_type == 'product' && slug.current == $slug][0] {
        ...,
        variants[]->,
        categories[]->,
        sizes[]
    }
`;

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await client.fetch(query, { slug });

  return (
    <>
      <ProductHeader />
      <article className="container relative flex flex-wrap px-6 pb-8 mx-auto mb-8 md:mt-8 md:pb-16 xl:pb-20 md:mb-12 xl:mb-20">
        <div className="relative w-full md:w-1/2 lg:w-7/12 xl:w-7/12 md:px-4 xl:px-6 md:product-sticky">
          <ProductGallery images={product.image} />
        </div>
        <div className="w-full pl-4 mt-4 md:pl-10 md:mt-0 md:w-1/2 lg:w-5/12 xl:w-5/12 md:pr-4 xl:pr-6">
          <ProductDescription product={product} />
        </div>
      </article>
    </>
  );
};

export default ProductPage;
