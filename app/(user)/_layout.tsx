import { View } from "react-native";
import UserFilter from "@/components/ui/UserFilter";
import styles from "../global.styles";
const Users = () => {

  return (
    <View style={styles.container}>
      <UserFilter/>
    </View>
  );
};

export default Users;
