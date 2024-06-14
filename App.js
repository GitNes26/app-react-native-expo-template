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
import Afacad from "./assets/fonts/Afacad-VariableFont_wght.ttf";
import Svg, { Path } from "react-native-svg";
// import Logo from "./assets/logo-dark.png";
import Logo from "./assets/icon-dark.png";

const { width, height } = Dimensions.get("window");

export default function App() {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.containerImg}>
				<Image source={Logo} style={{ objectFit: "cover" }} />
				<Text
					style={{
						fontSize: 25,
						fontWeight: "bold",
						color: "#18191D",
					}}>
					COMU
					<Text
						style={{
							fontSize: 20,
							fontWeight: "light",
							color: "#18191D",
						}}>
						APP
					</Text>
				</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.title}>¡BIENVENIDO!</Text>
				<Text style={styles.subtitle}>Somos tu familia</Text>
				<TextInput
					placeholder='Ingresa tu correo'
					style={styles.textInput}
					keyboardType='email-address'
				/>
				<TextInput
					placeholder='Ingresa tu contraseña'
					style={styles.textInput}
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textBtn}>Iniciar Sesión</Text>
				</TouchableOpacity>
				<StatusBar style='auto' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: "#E9ECEF",
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	containerImg: {
		width: width,
		height: "40%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		// fontFamily: Afacad,
		fontSize: 50,
		fontWeight: "bold",
		color: "#18191D",
	},
	subtitle: {
		fontSize: 16,
		fontWeight: "300",
		color: "gray",
	},
	textInput: {
		width: "80%",
		height: 50,
		margin: 10,
		marginBottom: 20,
		padding: 10,
		paddingStart: 30,
		borderColor: "#18191D",
		borderRadius: 50,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: "#18191D",
		width: "80%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		marginTop: 10,
	},
	textBtn: {
		color: "#E9ECEF",
		fontWeight: "bold",
		fontSize: 16,
	},
});
