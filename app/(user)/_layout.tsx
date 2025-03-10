import { View } from "react-native";
import { usePaginatedUsers } from "@/hooks/usePaginatedUsers";
import { useCountries } from "@/hooks/useCountries";
import UserFilter from "@/components/ui/UserFilter";
import UserList from "@/components/ui/UserList";
import { SortOrder } from "@/constants/SortOrder";
import styles from "../global.styles";

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
      <UserList users={users} loading={loading} loadMoreUsers={loadMoreUsers} />
    </View>
  );
};

export default Users;
