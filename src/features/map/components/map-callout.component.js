import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
