import React from "react";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeArea } from "../../../../components/utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
