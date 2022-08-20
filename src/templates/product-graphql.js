import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  query ($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
      image {
        childImageSharp {
          fluid(maxWidth: 550, maxHeight: 340, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const Product = ({ data }) => {
  const product = data.productsJson;

  return (
    <div>
      <h1>{product.title}</h1>
      <GatsbyImage
        src={product.image.childImageSharp.gatsbyImageData}
        alt={product.title}
        style={{ float: 'left', marginRight: '1rem' }}
      />
      <p>{product.price}</p>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  );
};

export default Product;
