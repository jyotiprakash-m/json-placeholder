import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  //   const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: "jp@gmail.com",
    password: "password",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (name, text) => {
    setInputs((prev) => ({ ...prev, [name]: text }));
  };
  const formValidate = () => {
    let errors = {};
    if (!inputs.email) errors.email = "Email is required";
    if (!inputs.password) errors.password = "Password is required";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onLogin = () => {
    console.log("inputs", inputs);
    if (formValidate()) {
      if (inputs.email == "jp@gmail.com" && inputs.password == "password") {
        setInputs({
          email: "",
          password: "",
        });
        navigation.navigate("Home");
      } else {
        Alert.alert("Invalid credentials");
      }
    }
    console.log(errors);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView style={styles.formContainer}>
        <View style={[styles.logoContainer, styles.dividerContainer]}>
          <Image
            style={styles.image}
            source={require("../assets/jsonImg.png")}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.emailContainer, styles.dividerContainer]}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={inputs.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          {errors?.email && <Text style={styles.error}>{errors?.email}</Text>}
        </View>
        <View style={[styles.passwordContainer, styles.dividerContainer]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            onChangeText={(text) => handleInputChange("password", text)}
            secureTextEntry
          />
          {errors?.password && (
            <Text style={styles.error}>{errors?.password}</Text>
          )}
        </View>
        <View style={[styles.submitContainer, styles.dividerContainer]}>
          <Button title="Sign In" onPress={onLogin} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    alignItems: "center",
  },
  dividerContainer: {
    marginVertical: 5,
  },
  formContainer: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 100,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  error: {
    color: "red",
  },
});
