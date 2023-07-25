import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component"; // Ensure the path is correct

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
