import {View, Text, StyleSheet} from 'react-native';

export const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Data Found</Text>
    </View>
);

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    emptyText: {
        fontSize: 16,
        fontWeight: "500",
        color: "rgb(123, 130, 136)",
    },
});
