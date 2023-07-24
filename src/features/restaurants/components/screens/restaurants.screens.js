import React, { useContext } from "react";
import styled from "styled-components/native";
import { Search } from "../../components/search.component";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StatusBar, FlatList, View } from "react-native";
import { Card, ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../spacer/spacer.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },

  keyExtractor: (item) => item.name,
  showsVerticalScrollIndicator: true,
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <StyledSafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#0000FF" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large" key={item.name}>
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </StyledSafeArea>
  );
};
