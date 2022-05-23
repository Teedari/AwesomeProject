import React from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/global.styles";

const CustomModal = ({isVisible=false, onHide, title, children}) => {
  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={globalStyles.h3}>{title}</Text>
            <MaterialIcons
              onPress={() => onHide()}
              name="close"
              size={20}
            />
          </View>
          <View style={styles.modalBody}>
           {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: "100%",
    marginHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: "1",
    elevation: 3,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalBody: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
export default CustomModal;
