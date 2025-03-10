// Button.styles.js
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.others.white,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.others.gray200,
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  userContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.others.gray100,
  },
  picker: {
    flex: 1,
    marginRight: 12,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.others.gray200,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.others.gray200,
  },
  sortText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.others.black100,
  },
});

export default styles;