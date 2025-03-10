import { View } from "react-native";
import UserFilter from "@/components/ui/UserFilter";
import styles from "../global.styles";
import { useCountries } from "@/hooks/useCountries";
import { usePaginatedUsers } from "@/hooks/usePaginatedUsers";
import { SortOrder } from "@/constants/SortOrder";

const Users = () => {

  const {
    users,
    loading,
    loadMoreUsers,
    order,
    setOrder,
    countryFilter,
    setCountryFilter,
  } = usePaginatedUsers();
  const { countries, loading: loadingCountries } = useCountries();

  return (
    <View style={styles.container}>
      <UserFilter
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        order={order as SortOrder}
        setOrder={setOrder}
        countries={countries}
        loadingCountries={loadingCountries}
      />
    </View>
  );
};

export default Users;
