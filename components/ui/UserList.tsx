import React, { useRef, useCallback, useState } from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  ViewToken,
  Modal,
  TextInput,
} from "react-native";
import { format } from "date-fns";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import styles from "@/app/global.styles";
import Toast from "react-native-toast-message";
import { UserListProps } from "@/interfaces/UserListProps";
import { ListEmptyComponent } from "./ListEmptyComponent";

const UserList: React.FC<UserListProps> = ({ users, loading, loadMoreUsers }) => {
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState<{ [key: string]: string }>({});
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const openNoteModal = useCallback((userId: string) => {
    setCurrentUser(userId);
    setNote(notes[userId] || "");
    setModalVisible(true);
  }, [notes]);

  const saveNote = useCallback(() => {
    if (!currentUser) return;

    if (!note.trim() && !notes[currentUser]) {
      Toast.show({
        type: "error",
        text1: "Invalid Note",
        text2: "Note cannot be empty.",
        position: "top",
      });
      return;
    }

    setNotes((prev) => ({ ...prev, [currentUser]: note }));

    Toast.show({
      type: "success",
      text1: "Note Saved",
      text2: "Your note has been added successfully.",
      position: "top",
    });

    setModalVisible(false);
    setCurrentUser(null);
    setNote("");
  }, [note, notes, currentUser]);

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
              <TouchableOpacity onPress={() => openNoteModal(item.id)} style={styles.note}>
                <MaterialCommunityIcons name="comment-processing-outline" size={18} color={Colors.others.gray300} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={loading ? <View /> : <ListEmptyComponent />}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color={Colors.others.blue700} /> : null}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Note</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your note here..."
              value={note}
              onChangeText={setNote}
              multiline
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={[Colors.others.blue50, Colors.others.purple100]}
                style={styles.userIconContainer}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
              >
                <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
  );
};

export default UserList;
