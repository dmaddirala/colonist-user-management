// Button.styles.js
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.others.white,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
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
  userIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginLeft: 8,
    borderRadius: 12,
    backgroundColor: Colors.others.blue100,
  },
  userCard: {
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: Colors.others.white,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  userInfo: {
    paddingVertical: 16,
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.others.black100,
  },
  userLine: {
    width: 4,
    height: "100%",
  },
  note: {
    marginLeft: 'auto',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  metaData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  countryContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: Colors.others.blue100,
    borderRadius: 10,
    marginRight: 8,
  },
  country: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.others.blue700,
  },
  date: {
    fontSize: 11,
    fontWeight: "500",
    marginLeft: 4,
    color: Colors.others.gray300,
  },
  cardShadow: {
    overflow: "hidden",
    shadowColor: Colors.others.black100,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  listContent: {
    paddingBottom: 60
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.others.black100,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.others.gray200,
    borderRadius: 8,
    padding: 10,
    minHeight: 80,
    textAlignVertical: "top",
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  saveButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.others.blue600,
  },
  cancelText: {
    color: Colors.others.gray300,
  }
});

export default styles;