import React from "react";
import { SafeAreaView, Button, Text, StyleSheet } from "react-native";

// @ts-ignore
const Home: React.FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
