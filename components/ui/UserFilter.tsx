import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import styles from "@/app/global.styles";
import { UserFilterProps } from "@/interfaces/UserFilterProps";

const UserFilter: React.FC<UserFilterProps> = ({
  countries,
  loadingCountries
}) => {
  return (
    <View style={styles.filterContainer}>
      {/* Country Picker */}
      <View style={styles.picker}>
        {loadingCountries ? (
          <ActivityIndicator size="small" color={Colors.others.blue700} />
        ) : (
          <Picker>
            {countries.map((country) => (
              <Picker.Item key={country.code} label={country.name} value={country.code} />
            ))}
          </Picker>
        )}
      </View>

      {/* Sorting Button */}
      <TouchableOpacity
        onPress={() => {/* Sorting Logic */}}
        style={styles.sortButton}
      >
        <FontAwesome5
          name={ "sort-amount-down"}
          size={14}
          color={Colors.others.black100}
        />
        <Text style={styles.sortText}>Date</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserFilter;
