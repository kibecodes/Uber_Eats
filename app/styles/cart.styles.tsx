import { styled } from 'styled-components';
import { Card } from 'react-native-paper';
import { TextInput, View } from 'react-native';


export const CartCard = styled(Card)`
    padding: 8px;
    background-color: white;
    margin-top: -200px;
`

export const AddressText = styled(TextInput)`
    height: 50px;
    width: 100%;
    background-color: lightgray;
    margin-top: 10px;
    border-radius: 20px;
    text-align: center;
    font-size: 16px;
`

export const Order = styled(View)`
    padding: 8px;
    background-color: white;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Price = styled(View)`
    align-items: center;
    flex-direction: row;
    gap: 4px;
`
export const BackIcon = styled(View)`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 16px;
    margin-top: 32px;
    padding: 16px; 
`
export const BackButton = styled(View)`
    height: 40px;
    width: 40px;
    background-color: lightgray;
    border-radius: 20px;
    align-items: center;
    display: flex;
`

export const EditCart = styled(View)`
    height: 120px;
    flex-direction: row;
    margin-left: 16px;
    margin-right: 16px;
    gap: 10px;
    
`

export const EditCard = styled(View)`
    height: 120px;
    width: 120px;
    margin-bottom: 16px;
    margin-left: 0px;
    border-radius: 30px;
    padding: 8px;
    flex-direction: column;
    background-color: rgb(68, 80, 105);
`

export const EditCartPurchase = styled(View)`
    flex-direction: row; 
    padding: 4px; 
    border-radius: 24px; 
    gap: 20px; 
    align-items: center; 
`