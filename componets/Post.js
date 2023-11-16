import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import Comment from "./Comment";
const Post = ({ id, title, body, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const fetchData = async (limit) => {
    setIsModalOpen(true);
    setLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMessages(json);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <Text>Id: {id}</Text>
        <Text>User Id: {userId}</Text>
      </View>
      <View style={[styles.titleContainer, styles.divider]}>
        <Text style={styles.heading}>Title: </Text>
        <Text>{title}</Text>
      </View>
      <View style={[styles.bodyContainer, styles.divider]}>
        <Text style={styles.heading}>Body: </Text>
        <Text>{body}</Text>
      </View>
      <View style={[styles.detailsContainer, styles.divider]}>
        <Button title="Show Comments" onPress={fetchData} />
      </View>
      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCloseContainer}>
            <Text style={styles.cross} onPress={() => setIsModalOpen(false)}>
              X
            </Text>
          </View>
          {/* <ScrollView> */}
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={styles.commentsContainer}>
              <FlatList
                data={messages}
                renderItem={(comment) => {
                  console.log("comment", comment.item);
                  return <Comment {...comment.item} />;
                }}
                showsVerticalScrollIndicator={false}
              />
              {/* {messages.map((comment, index) => {
                return <Comment key={index} {...comment} />;
              })} */}
            </View>
          )}
          {/* </ScrollView> */}
        </View>
      </Modal>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  divider: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  idContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsContainer: {
    justifyContent: "flex-end",
  },
  modalContainer: {
    padding: 5,
    backgroundColor: "#f5f5f5",
  },
  modalCloseContainer: {
    alignItems: "flex-end",
    padding: 10,
  },
  cross: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    width: 30,
    height: 30,
    textAlign: "center",
    borderRadius: 15,
  },
  commentsContainer: {
    padding: 10,
    marginBottom: 100,
  },
});
