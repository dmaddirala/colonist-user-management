import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import styles from "@/app/global.styles";

const UserFilter = () => {
  return (
    <View style={styles.filterContainer}>
      {/* Country Picker */}
      <View style={styles.picker}>
        <Picker>
          <Picker.Item label="All Countries" value="All" />
        </Picker>
      </View>

      {/* Sorting Button */}
      <TouchableOpacity
        onPress={() => {/* Sorting Logic */}}
        style={styles.sortButton}
      >
        <FontAwesome5
          size={14}
          color={Colors.others.black100}
        />
        <Text style={styles.sortText}>Date</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserFilter;
