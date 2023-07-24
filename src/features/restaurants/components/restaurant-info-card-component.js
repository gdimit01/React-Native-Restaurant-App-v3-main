import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "./spacer/spacer.component";
import { Text } from "./typography/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Norm Diner",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
    ],

    address = "100 fakestreet",
    isOpenNow = true,
    rating = 4,
    business_status = "OPERATIONAL",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={`star_${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {business_status === "CLOSED_TEMPORARILY" ? (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            ) : !isOpenNow ? (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            ) : (
              <SvgXml xml={open} width={20} height={20} />
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
