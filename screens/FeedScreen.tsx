import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const FeedScreen = ({ navigation }) => {
  const data = [
    {
      id: "1",
      title: "Image 1",
      image: "https://tinyjpg.com/images/social/website.jpg",
    },
    {
      id: "2",
      title: "Image 2",
      image:
        "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
    },
    {
      id: "3",
      title: "Image 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg",
    },
    {
      id: "4",
      title: "Image 4",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    },
    {
      id: "5",
      title: "Image 5",
      image:
        "https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/character-illustration-v2.jpg",
    },
    {
      id: "6",
      title: "Image 6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
    },
    {
      id: "7",
      title: "Image 7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbQnIZzgPvyK0vMGjxray0fKaeOpxszT7tQ&usqp=CAU",
    },
    {
      id: "8",
      title: "Image 8",
      image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg",
    },

    // Add more images
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ImageDetail", { item })}
      style={styles.touchableOpacity}
    >
      <View style={styles.gridItem}>
      <SharedElement id={`image-${item.id}`}>
        <Image source={{ uri: item.image }} style={styles.image} />
        </SharedElement>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: "100%",
   },
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  touchableOpacity: {
    flex: 1,
    width: "100%",
  },
  gridItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "grey",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});

export default FeedScreen;
