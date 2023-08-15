import React from 'react'
import { useRouter } from 'expo-router';

import { View, Text } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import { SafeArea } from './styles/home.styles';
import { 
  DetailCard, 
  DetailCardCover, 
  DetailInfoSpace, 
  BackIcon, 
  BuyCard, 
  EditPurchase, 
  PurchaseCount, 
  Size, 
  BackButton,
  EditIcon
} from './styles/detail.card.styles';

const detail = () => {
  const router = useRouter();

  return (
    <>
    <SafeArea>
      <BackIcon> 
        <BackButton>
            <MaterialIcons 
              name="keyboard-arrow-left" 
              size={34} 
              color="black" 
              onPress={() => router.push('/home') }
            />
        </BackButton>
        <Text style={{ fontSize: 20 }}>Details</Text>
      </BackIcon>

      <DetailCard elevation={4}>
        <DetailCardCover source={{ uri: 'https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=600' }}/>
        <Card.Content>
          <Ionicons name="ios-heart-circle" size={24} color="black" />
        </Card.Content>
      </DetailCard>

      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Pizza Calzone European</Text>
      <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 16 }}>
        Prosciutto e funghi is a pizza variety  that is topped with tomato and sauce.  
        </Text>

      <DetailInfoSpace>
          <View style={{ flexDirection: 'row' }}>
              <EvilIcons name="star" size={20} color="black" />
              <Text style={{ fontWeight: 'bold' }}>4.7</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
              <FontAwesome5 name="shipping-fast" size={14} color="black" />
              <Text>Free</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
              <EvilIcons name="clock" size={20} color="black" />
              <Text>20 min</Text>
          </View>
      </DetailInfoSpace>

      
      <View style={{ flexDirection: 'row', marginTop: 20, gap: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>SIZE:</Text>
        <View style={{ gap: 4, flexDirection: 'row'}}>
          <Size><Text style={{ fontSize: 20 }}>10"</Text></Size>
        </View>
        <View style={{ gap: 4, flexDirection: 'row'}}>
          <Size><Text style={{ fontSize: 20 }}>14"</Text></Size>
        </View>
        <View style={{ gap: 4, flexDirection: 'row'}}>
          <Size><Text style={{ fontSize: 20 }}>16"</Text></Size>
        </View>
      </View>

      <BuyCard elevation={5}>
          <Card.Content>
            <PurchaseCount>
              <Text style={{ fontSize: 24 }}>$32</Text>
              <EditPurchase>
                <EditIcon>
                  <AntDesign 
                    name="minus" 
                    size={24} color="black" 
                  />
                </EditIcon>
                <Text style={{ fontSize: 20, color: 'white' }}>2</Text>
                <EditIcon>
                  <AntDesign 
                    name="plus" 
                    size={24} color="black"  
                  />              
                </EditIcon>
              </EditPurchase>
            </PurchaseCount>
            <Button 
              mode='contained' 
              onPress={() => router.push('/cart')}
              buttonColor='orange'
            >
              ADD TO CART
            </Button>
        </Card.Content>
      </BuyCard>

  </SafeArea>
</>
  )
}

export default detail
