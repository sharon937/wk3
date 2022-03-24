import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, TouchableOpacity ,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import  Homescreen from "../screens/Homescreen";
import  Detailscreen from "../screens/Detailscreen";
import Wishlistscreen from '../screens/Wishlistscreen';
import Mybookscreen from '../screens/Mybookscreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={Homestack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarIconStyle:{
            marginTop:8
          },
          tabBarLableStyle:{
            marginButtom:5
          }
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={Wishlistscreen} 
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
          tabBarIconStyle:{
            marginTop:8
          },
          tabBarLableStyle:{
            marginButtom:5
          }
        }}
      />
      <Tab.Screen 
        name="My books" 
        component={Mybookscreen}
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
          tabBarIconStyle:{
            marginTop:8
          },
          tabBarLableStyle:{
            marginButtom:5
          }
        }}
      />
    </Tab.Navigator>
  );
}

const Homestack = () => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
      setToggle(!toggle);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title:"",
          headerShadowVisible:false,
          headerRight: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'magnify'} 
                color={'black'} 
                size={25}
                onPress={ () => {alert("Search")}} 
            />
            </Pressable>          
          ),
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'menu'} 
                color={'black'} 
                size={25}
                onPress={ () => {alert("Drawer")}} 
            />
            </Pressable>          
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detailscreen}
        options={({ navigation }) => ({ 
          headerShadowVisible:false,
          title:"",
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={'black'} 
                size={25}
                onPress={ () => {navigation.goBack();}} 
            />
            </Pressable>          
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleFunction()}>
                <Text>{toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
                </Text>
            </TouchableOpacity>
        ),
        })}
      />
    </Stack.Navigator>
  );
};



export default Navigation;