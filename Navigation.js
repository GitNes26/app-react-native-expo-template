import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import { darkColor, inactiveColor } from "./GlobalsValues";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
	return (
		<HomeStackNavigator.Navigator initialRouteName='HomeScreen'>
			<HomeStackNavigator.Screen name='HomeScreen' component={HomeScreen} />
			<HomeStackNavigator.Screen name='Stack' component={StackScreen} />
		</HomeStackNavigator.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='Settings'
			screenOptions={{
				tabBarActiveTintColor: darkColor,
				tabBarInactiveTintColor: inactiveColor,
				tabBarLabelStyle: { fontSize: 12 },
			}}>
			<Tab.Screen
				name='Home'
				component={MyStack}
				options={{
					tabBarLabel: "Inicio",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name='home' size={size} color={color} />
					),
					headerShown: false,
					tabBarBadge: 10,
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					tabBarLabel: "Ajustes",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name='setting' size={size} color={color} />
					),
					// headerShown: false,
					tabBarBadge: 10,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}
