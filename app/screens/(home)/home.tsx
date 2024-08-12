import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { FlatList } from 'react-native';

import { 
    FoodCard, 
    FoodCardCover, 
    Header,  
    SearchBar, 
    Username,
    SafeArea,
    ListSpacer
} from '../(home)/home.styles';
import { CardProps, FoodInfoCard } from '../(home)/food.info.card';
import { DetailInfoCard, DetailCardProps } from '../(details)/detail.info.card';


const home = ( {card}: CardProps, {minicard}: DetailCardProps ) => {
    const router = useRouter();

    const data = [
        {
            id: '1',
            component : (
                    <>
                   
                    <DetailInfoCard minicard={minicard}/>


                    <TouchableOpacity
                        onPress={() => router.push('/screens/detail')}
                    >
                        <FoodCard elevation={5}>    
                            <FoodCardCover source={{ uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'}} />
                            <Card.Content>
                                <FoodInfoCard card={card}/>
                            </Card.Content>
                        </FoodCard>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/screens/detail')}
                    >
                        <FoodCard elevation={5}>    
                            <FoodCardCover source={{ uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'}} />
                            <Card.Content>
                                <FoodInfoCard card={card}/>
                            </Card.Content>
                        </FoodCard>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/screens/detail')}
                    >
                        <FoodCard elevation={5}>    
                            <FoodCardCover source={{ uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'}} />
                            <Card.Content>
                                <FoodInfoCard card={card}/>
                            </Card.Content>
                        </FoodCard>
                    </TouchableOpacity>
                    
                </>

            )
        }
    ]

    const renderItem = ({ item }: any) => (
        <View>
            <ListSpacer>
                {item.component}
            </ListSpacer>
        </View>
    )
    
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

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 0 }}
            />
        </SafeArea> 
    </>
  )
}

export default home
