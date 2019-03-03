import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HideScreen from './src/pages/Hide'
import RetriveScreen from './src/pages/Retrive'

const TabNavigator = createBottomTabNavigator({
  Hide: { screen: HideScreen },
  Retrive: { screen: RetriveScreen },
},
{
   defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => {
         const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Hide') {
         iconName = 'shield'; 
        } else if (routeName === 'Retrive') {
          iconName = 'briefcase';
        }

        return <Icon
             name={iconName}
             color={tintColor}
             size={24}
         />
      },
   }),
   tabBarOptions: {
     activeTintColor: 'lightblue',
     inactiveTintColor: 'gray',
   },
 }
);

export default createAppContainer(TabNavigator);
