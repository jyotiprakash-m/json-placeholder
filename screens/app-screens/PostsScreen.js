import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Post from "../../componets/Post";
const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  // https://jsonplaceholder.typicode.com/posts

  const fetchData = async (limit) => {
    setLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        setLoading(false);
      });
  };

  const loadMoreData = () => {
    fetchData(limit + 10);
    setLimit(limit + 10);
  };

  useEffect(() => {
    fetchData(limit);
  }, []);
  // console.log(posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={(post) => {
          return <Post {...post.item} />;
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.loadMoreContainer}>
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text onPress={loadMoreData} style={styles.loadText}>
                Load More
              </Text>
            )}
          </View>
        }
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  loadMoreContainer: {
    marginVertical: 10,
    alignContent: "center",
    alignItems: "center",
  },
  loadText: {
    color: "blue",
  },
});
