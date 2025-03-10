import { FlatList, View, Text } from "react-native";
import styles from "@/app/global.styles";
import { UserListProps } from "@/interfaces/UserListProps";
import { ListEmptyComponent } from "./ListEmptyComponent";

const UserList: React.FC<UserListProps> = ({ users, loading }) => {

  return (
    <>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        style={styles.userContainer}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.userCard, styles.cardShadow]}>
            <Text>{item.userName}</Text>
          </View>
        )}
        ListEmptyComponent={loading ? <View /> : <ListEmptyComponent />}
      />
    </>
  );
};

export default UserList;
