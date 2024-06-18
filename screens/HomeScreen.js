import { StatusBar } from "expo-status-bar";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { darkColor, whiteColor } from "../GlobalsValues";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>¡HomeScreen!</Text>
			<TouchableOpacity
				style={styles.button}
				onPressOut={() => navigation.navigate("Stack")}>
				<Text style={styles.textBtn}>Ir al StackScreen</Text>
			</TouchableOpacity>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		// fontFamily: Afacad,
		fontSize: 50,
		fontWeight: "bold",
		color: darkColor,
	},
	button: {
		backgroundColor: darkColor,
		width: "80%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		marginTop: 10,
	},
	textBtn: {
		color: whiteColor,
		fontWeight: "bold",
		fontSize: 16,
	},
});
