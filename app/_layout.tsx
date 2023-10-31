import { Stack } from "expo-router";

export default () => {
    return <Stack screenOptions={{
        headerTitle: 'Uber Eats',
        headerTitleStyle: {
            fontWeight: '700',
            fontSize: 24
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor:'#039BE5',
        },
        headerTintColor: '#FD8D14'
    }}>
        <Stack.Screen
            name="home"
            options={{
                headerTitle: 'HomePage',
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 20
                },
            }}
        />
        <Stack.Screen
            name="detail"
            options={{
                headerTitle: 'Order Details',
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 20
                },
            }}
        />
        <Stack.Screen
            name="cart"
            options={{
                headerTitle: 'Cart',
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 20
                },
            }}
        />

    </Stack>
}

