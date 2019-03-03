import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToAbout = () => {
      Actions.about()
   }
   const goToLogin = () => {
    Actions.Login()
 }
   return (
    <view>
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
            <Text>This is HOME!</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style = {{ margin: 128 }} onPress = {goToLogin}>
            <Text>This is Login!</Text>
        </TouchableOpacity> */}
    </view>

   )
}
export default Home