import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setDelta] = useState(0);

  const { viewport } = location;
  useEffect(() => {
    const northeastLat = viewport?.northeast?.lat;
    const southwestLat = viewport?.southeast?.lat;

    if (northeastLat && southwestLat) {
      const latDelta = northeastLat - southwestLat;
      setDelta(latDelta);
    }
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map>
        {restaurants.map((restaurants) => {
          return null;
        })}
      </Map>
    </>
  );
};
