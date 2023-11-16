import { View, Text, StyleSheet } from "react-native";
const Comment = ({ body, email, id, name, postId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Id: {id}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Post Id: {postId}</Text>
        <Text style={styles.headerText}>User Name:</Text>
        <Text>{name}</Text>
        <Text style={styles.headerText}>Body:</Text>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  headerText: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18,
  },
});
