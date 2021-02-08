import React, { Component } from "react";
import { Header } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";

const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 40, fontWeight: "bold" },
      }}
      backgroundColor="rgb(225, 185, 135)"
    />
  );
};

export default MyHeader;
