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

const { width, height } = Dimensions.get("window");

export default function StackScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>¡StackScreen!</Text>
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
		color: "#18191D",
	},
});
