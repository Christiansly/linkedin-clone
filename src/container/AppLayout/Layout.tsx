import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = ({ children }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.main}>{children}</ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  header: {
    height: "7%",
  },
  footer: {
    height: "7%",
  },
  main: { height: "85%", borderWidth: 1 },
});
