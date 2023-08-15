import { styled } from "styled-components";
import { Card } from "react-native-paper";
import { View } from "react-native";


export const DetailCard = styled(Card)`
    background-color: white;
    margin-bottom: 16px;
`

export const DetailCardCover = styled(Card.Cover)`
    padding: 16px;
    background-color: white;
`

export const DetailInfoSpace = styled(View)`
    flex-direction: row;
    gap: 32px;
`

export const BackIcon = styled(View)`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 16px;
`
export const BackButton = styled(View)`
    height: 40px;
    width: 40px;
    background-color: lightgray;
    border-radius: 20px;
    align-items: center;
    justify-content: center;   
`

export const BuyCard = styled(Card)`
    margin-top: 50px;
    background-color: white;
    padding: 8px;
    margin-bottom: 0;
`

export const PurchaseCount = styled(View)`
    flex-direction: row; 
    justify-content: space-between;
    padding-bottom: 16px;
    align-items: center;
`

export const EditPurchase = styled(View)`
    flex-direction: row; 
    padding: 8px; 
    background-color: darkcyan; 
    border-radius: 24px; 
    gap: 16px; 
    align-items: center; 
`

export const EditIcon = styled(View)`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: lightgray;
    align-items: center;
    justify-content: center;
`

export const Size = styled(View)`
    height: 50px;
    width: 50px;
    background-color: lightgray;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`