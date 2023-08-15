import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

import { 
    FoodCard, 
    FoodCardCover, 
    Header,  
    SearchBar, 
    Username,
    SafeArea
} from './styles/home.styles';
import { CardProps, FoodInfoCard } from './components/food.info.card';
import { DetailInfoCard, DetailCardProps } from './components/detail.info.card';

//** Flatlist static data */

const home = ( {card}: CardProps, {minicard}: DetailCardProps ) => {
    const router = useRouter();
    
  return (
      <>
      <SafeArea>
            <Header>
                <Ionicons name="menu-outline" size={24} color='black' />
                    <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
                        <Text style={{color: 'orange', fontSize: 14}}>DELIVER TO</Text>
                        <Text>Halal Lab Office</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: "flex-end", flex: 1 }}>
                        <Entypo name="shopping-bag" size={24} color="black" />
                    </View>
            </Header>
            <Username>
                <Text>Hey Halal</Text><Text style={{ fontWeight: 'bold' }}>Good Morning !</Text>
            </Username>
            <SearchBar
                placeholder='Search dishes, restaurants'
                value=''
            />

            <DetailInfoCard minicard={minicard}/>

            <TouchableOpacity
                onPress={() => router.push('/detail')}
            >
            <FoodCard elevation={5}>    
                <FoodCardCover source={{ uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'}} />
                <Card.Content>
                    <FoodInfoCard card={card}/>
                </Card.Content>
            </FoodCard>
            </TouchableOpacity>
    </SafeArea> 
    </>
  )
}

export default home
