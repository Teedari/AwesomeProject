import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import CustomModal from "../components/Modal";
import Tile from "../components/Tile";
import globalStyles from "../styles/global.styles";
import { reviews as data } from "../utils/data.utils";
import { MaterialIcons } from "@expo/vector-icons";
import CreateReviewForm from "../components/forms/create_review_form";
const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState(data)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addReview = (title, content, rating) => {
    const ID = reviews[reviews.length - 1]?.key ? reviews[reviews.length - 1]?.key + 1 : 1
    setReviews((prev, next) => ([
      ...prev, {key: ID, title, content, rating}
    ]))
    setIsModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      {/* MODAL */}
      <CustomModal
        title="Create Review"
        isVisible={isModalOpen}
        onHide={() => setIsModalOpen(false)}>
        <CreateReviewForm onSubmitHandler={addReview} />
      </CustomModal>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Tile
            text={item.title}
            onPress={() => navigation.navigate("ReviewDetails", item)}
          />
        )}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setIsModalOpen((prev, next) => !prev)}>
        <View style={styles.floatActionButton}>
          <MaterialIcons name="add" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatActionButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#00B6FF",
  },
});

export default Home;
