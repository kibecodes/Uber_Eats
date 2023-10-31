import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, Button } from 'react-native-paper'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { CartCard, AddressText, Order, Price,EditCard, EditCart, EditCartPurchase } from '../(cart)/cart.styles'

import { router } from 'expo-router';
import { BackIcon, BackButton } from '../(cart)/cart.styles';
import { EditIcon } from '../(details)/detail.card.styles';

const cart = () => {
  return (
    <>
        <View style={{ backgroundColor: '#252B48', height: "100%" }}>

            <BackIcon> 
                <BackButton>
                    <MaterialIcons 
                    name="keyboard-arrow-left" 
                    size={34} 
                    color="black" 
                    onPress={() => router.push('/screens/detail') }
                    />
                </BackButton>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Cart</Text>
                    <Text style={{ color: 'orange', textDecorationLine: 'underline', fontWeight: '700' }}>EDIT ITEMS</Text>
                </View>
            </BackIcon>

            <EditCart>
                <EditCard>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'}}
                    />
                </EditCard>

                <View style={{ 
                    flexDirection: 'column', 
                    padding: 4, 
                    gap: 4, 
                    marginTop: 16,
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Pizza Calzone European</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>$64</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>14"</Text>
                    <EditCartPurchase>
                        <EditIcon>
                            <AntDesign 
                            name="minus" 
                            size={16} color="black" 
                            />
                        </EditIcon>
                        <Text style={{ fontSize: 16, color: 'white' }}>2</Text>
                        <EditIcon>
                            <AntDesign 
                            name="plus" 
                            size={16} color="black"  
                            />              
                        </EditIcon>
                    </EditCartPurchase>
                    </View>
                </View>
            </EditCart>
            

        </View>

        <CartCard elevation={5}>
            <Card.Content>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text>DELIVERY ADDRESS</Text>
                    <Text style={{ color: 'orange', textDecorationLine: 'underline' }}>EDIT</Text>
                </View>

                <AddressText>
                    2118 Thornridge Cir. Syracuse
                </AddressText>
                <Order>
                    <Price>
                        <Text>TOTAL:</Text>
                        <Text style={{ fontSize: 24 }}>$96</Text> 
                    </Price>
                    <View style={{flexDirection: 'row', gap: 0, alignItems: 'center'}}>
                        <Text style={{ color: 'orange', fontSize: 14 }}>Breakdown</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="grey" />
                    </View>
                </Order>

                <Button
                    mode='contained'
                    onPress={()=> console.log('Pressed')}
                    buttonColor='orange'
                >
                    PLACE ORDER
                </Button>
            </Card.Content>
        </CartCard>
    </>
  )
}

export default cart