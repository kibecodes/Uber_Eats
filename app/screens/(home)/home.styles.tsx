import { Card, Searchbar } from "react-native-paper";
import { styled } from "styled-components";
import { View, SafeAreaView, StatusBar } from "react-native";


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
    background-color: white;
    padding: 16px;
`
console.log(StatusBar.currentHeight);

export const FoodCard = styled(Card)`
    background-color: white;
`

export const FoodCardCover = styled(Card.Cover)`
    padding: 16px;
    background-color: white;
`

export const MiniFoodCard = styled(Card)`
    padding: 8px;
    height: auto;
    background-color: white;
`
export const MiniFoodCardCover = styled(Card.Cover)`
    height: 120px;
    background-color: white;
`
export const SearchBar = styled(Searchbar)`
    margin-top: 10px;
    margin-bottom: 10px;
`
export const Username = styled(View)`
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    gap: 4px;
`
export const Header = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
`

export const CardInfo = styled(View)`
    flex-direction: column;
    gap: 8px;
`

export const InfoSpace = styled(View)`
    flex-direction: row;
    gap: 32px;
`

export const ListSpacer = styled(View)`
    padding: 12px;
`