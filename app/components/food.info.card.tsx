import React from 'react';
import { View, Text } from 'react-native';

import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { CardInfo, InfoSpace } from '../styles/home.styles';

export interface CardProps {
    card: {
        name: string,
        dish: string,
        rating: number,
        delivery: string,
        time: number
    }
}

export const FoodInfoCard = ({ card = {
    name: 'Rose Garden Restaurant',
    dish: 'Burger - Chiken - Richie - Wings',
    rating: 4.7,
    delivery: 'Free',
    time: 20
} }: CardProps) => {
   
        
    return (
        <>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{card.name}</Text>

            <CardInfo>
                <Text>{card.dish}</Text>
                <InfoSpace>
                    <View style={{ flexDirection: 'row' }}>
                        <EvilIcons name="star" size={20} color="black" />
                        <Text style={{ fontWeight: 'bold' }}>{card.rating}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <FontAwesome5 name="shipping-fast" size={14} color="black" />
                        <Text>{card.delivery}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <EvilIcons name="clock" size={20} color="black" />
                        <Text>{card.time} min</Text>
                    </View>
                </InfoSpace>
            </CardInfo>
        </>
    )
}