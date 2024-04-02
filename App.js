import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Comanda from './app/comanda';
import Login from './app/login';
import Pedido from './app/pedido';
import Produtos from './app/produtos';

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comanda" component={Comanda} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Pedido" component={Pedido} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}

const Stack = createNativeStackNavigator();