const Product = ({ params }: { params: { handle: string } }) => {
  return (
    <>
      <h2>Product page</h2>
      <p>{params.handle}</p>
    </>
  );
};

export default Product;

/**
 * This component is responsible for-
 *
 * TODO: Updates
 *
 */
