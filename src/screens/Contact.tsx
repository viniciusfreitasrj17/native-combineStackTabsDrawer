import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Contact: React.FC = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text>This is the contact screen</Text>
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

export default Contact;
