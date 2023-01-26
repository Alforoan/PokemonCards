import React from "react";
import styled from "styled-components";
function Card({
  id,
  name,
  images: { large: image },
  cardmarket: {
    prices: { averageSellPrice: price },
  },
}) {
  return (
    <Wrapper>
      <main className="card-container">
        <div>
          <h3 className="pokemon-name">{name}</h3>
          <img className="pokemon-image" src={image} alt={name} />
        </div>
        <footer>
          <p>${price}</p>
        </footer>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .pokemon-image {
    width: 300px;
    height: 400px;
  }
  .pokemon-name {
    text-align: center;
  }
  padding-right: 1rem;
  padding-left: 1rem;
`;

export default Card;
