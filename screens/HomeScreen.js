import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./app-screens/PostsScreen";
import CreatePostScreen from "./app-screens/CreatePostScreen";
import AboutScreen from "./app-screens/AboutScreen";
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={require("../assets/post.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={require("../assets/create.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                source={require("../assets/about.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
