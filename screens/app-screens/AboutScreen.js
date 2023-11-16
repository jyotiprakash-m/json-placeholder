import { useEffect, useRef } from "react";
import { View, Text, BackHandler, StyleSheet } from "react-native";
import WebView from "react-native-webview";
const AboutScreen = () => {
  const webViewRef = useRef(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };
  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: "https://jsonplaceholder.typicode.com" }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
});
