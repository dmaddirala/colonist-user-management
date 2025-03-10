import { View } from "react-native";
import UserFilter from "@/components/ui/UserFilter";
import styles from "../global.styles";
import { useCountries } from "@/hooks/useCountries";

const Users = () => {

  const { countries, loading: loadingCountries } = useCountries();

  return (
    <View style={styles.container}>
      <UserFilter 
        countries={countries}
        loadingCountries={loadingCountries}/>
    </View>
  );
};

export default Users;
