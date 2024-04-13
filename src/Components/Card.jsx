import React from "react";
import Carousel from "./Carousel";
import { MainTitle, StyledCard, SubTitle, Title, VerifiedIcon } from "./style";
// @ts-ignore
import verified from "../Images/verified-active.svg";

const Card = ({ lands }) => {
  const formatArea = (acres, guntas) => {
    const formattedAcres = acres === 0.0 ? "" : `${Math.floor(acres)} acres`;
    const formattedGrunts =
      guntas === 0.0 ? "" : `${Math.floor(guntas)} grunts`;
    return `${formattedAcres} ${formattedGrunts} • `;
  };
  const formatPrice = (price_per_acre, totalPrice) => {
    const crores = Math.floor(totalPrice / 100); // Extract crores
    const lakhs = Math.round((totalPrice % 100) * 100) / 100; // Extract lakhs
    var price;
    if (crores === 0) {
      price = `${lakhs} lakhs`;
    } else if (lakhs === 0) {
      price = `${crores} crores`;
    } else {
      price = `${totalPrice / 100} crores`;
    }
    if (price_per_acre === totalPrice) {
      return ` ₹ ${price} for full property`;
    } else {
      return `₹ ${price} per acre`;
    }
  };
  return (
    <StyledCard>
      <Carousel
        images={
          lands.land_media.length === 0
            ? [
                {
                  image: "https://plainbackground.com/plain1024/abaaa5.png",
                },
              ]
            : lands.land_media
        }
      />
      <Title>
        <MainTitle>
          {`${lands.village_name}, ${lands.mandal_name} `}
          <VerifiedIcon>
            <img src={verified} alt="verified" style={{ height: "18px" }} />
          </VerifiedIcon>
        </MainTitle>
        <div>{`${lands.district_name}(dt)`}</div>
      </Title>
      <SubTitle>
        <div className="area">
          {formatArea(
            lands.total_land_size_in_acres.acres,
            lands.total_land_size_in_acres.guntas
          )}
        </div>
        <div className="price">
          {formatPrice(lands.price_per_acre, lands.total_price)}
        </div>
      </SubTitle>
    </StyledCard>
  );
};

export default Card;
