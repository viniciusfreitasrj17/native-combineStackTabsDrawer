import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const About: React.FC = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text>This is the about screen</Text>
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

export default About;
