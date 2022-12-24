import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner} from '../components'

const index = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    {/* <HeroBanner/> */}
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
      {/* {['product_1','Product_2'].map((product) => product)} */}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}