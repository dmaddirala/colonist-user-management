import { FlatList, View, Text, ActivityIndicator, ViewToken, TouchableOpacity } from "react-native";
import styles from "@/app/global.styles";
import { UserListProps } from "@/interfaces/UserListProps";
import { ListEmptyComponent } from "./ListEmptyComponent";
import { useCallback, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { Colors } from "@/constants/Colors";

const UserList: React.FC<UserListProps> = ({ users, loading, loadMoreUsers }) => {

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const lastItem = users[users.length - 1];
        if (lastItem && viewableItems.some((item) => item.item.id === lastItem.id)) {
          loadMoreUsers();
        }
      }
    },
    [users, loadMoreUsers]
  );

  return (
    <>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        style={styles.userContainer}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.userCard, styles.cardShadow]}>
            <View style={styles.userRow}>
              <LinearGradient colors={[Colors.others.blue400, Colors.others.purple300]} style={styles.userLine} />
              <LinearGradient
                colors={[Colors.others.blue50, Colors.others.purple100]}
                style={styles.userIconContainer}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
              >
                <Feather name="user" size={24} color={Colors.others.blue600} />
              </LinearGradient>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>@{item.userName}</Text>
                <View style={styles.metaData}>
                  <View style={styles.countryContainer}>
                    <Text style={styles.country}>{item.country}</Text>
                  </View>
                  <Feather name="calendar" size={12} color={Colors.others.gray300} />
                  <Text style={styles.date}>{format(new Date(item.createdAt), "MM/dd/yyyy")}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={loading ? <View /> : <ListEmptyComponent />}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color={Colors.others.blue700} /> : null}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
      />
    </>
  );
};

export default UserList;
