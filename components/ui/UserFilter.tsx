import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import styles from "@/app/global.styles";
import { SortOrder } from "@/constants/SortOrder";
import { UserFilterProps } from "@/interfaces/UserFilterProps";

const UserFilter: React.FC<UserFilterProps> = ({
  countryFilter,
  setCountryFilter,
  order,
  setOrder,
  countries,
  loadingCountries,
}) => {
  return (
    <View style={styles.filterContainer}>
      {/* Country Picker */}
      <View style={styles.picker}>
        {loadingCountries ? (
          <ActivityIndicator size="small" color={Colors.others.blue700} />
        ) : (
          <Picker selectedValue={countryFilter} onValueChange={setCountryFilter}>
            {countries.map((country) => (
              <Picker.Item key={country.code} label={country.name} value={country.code} />
            ))}
          </Picker>
        )}
      </View>

      {/* Sorting Button */}
      <TouchableOpacity
        onPress={() =>
          setOrder(order === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending)
        }
        style={styles.sortButton}
      >
        <FontAwesome5
          name={order === SortOrder.Ascending ? "sort-amount-up-alt" : "sort-amount-down"}
          size={14}
          color={Colors.others.black100}
        />
        <Text style={styles.sortText}>Date</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserFilter;
