import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

import { MiniFoodCard, MiniFoodCardCover, ListSpacer } from '../styles/home.styles';

export interface DetailCardProps {
    minicard: {
        photos: string[],
        name: string,
        price: number
    }
}

export const DetailInfoCard = ({ minicard = {
    photos: ['https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=600'],
    name: 'Pizza',
    price: 70,
} }) => {

    const data = [
        {
            id: '1',
            component: (
                <MiniFoodCard elevation={4}>
                    <MiniFoodCardCover source ={{ uri: minicard.photos[0] }} />
                    <Card.Content>
                    <Text style={{ fontWeight: 'bold' }}>{minicard.name}</Text>
                    <View style={{ flexDirection: 'row', gap: 40 }}>
                        <Text>Starting</Text>
                        <Text>$ {minicard.price}</Text>
                    </View>
                    </Card.Content>
                </MiniFoodCard>
            )
        },
    ]

    const renderItem = ({ item }: any) => 
        <View>
            <ListSpacer>
                {item.component}
            </ListSpacer>
        </View>


    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                style={{ marginTop: 30}}
            />
        </>
    )
}