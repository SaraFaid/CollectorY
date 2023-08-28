import { View, Text, ImageBackground } from "react-native";
import styles from "../styling/style";
import LikeButton from "../buttons/LikeButton";
import { useState } from "react";

type PostCardProps = {
  index: number;
  author: string;
  content: string;
  cardName: string;
  path: any;

};

const PostCard = ({ index, author, content, cardName, path }: PostCardProps) => {

  const [liked, setLiked] = useState<boolean>(false);

  const onPressLike = () => {
    setLiked(!liked);
  };


  return (
    <View style={styles.post} key={index.toString() + author}>
      <Text style={styles.postAuthor}>{author}</Text>
      <Text style={styles.postContent}>{content}</Text>
      <ImageBackground
        source={path}
        style={styles.postImage}
        resizeMode="cover"
      >
        <Text style={styles.postTextImage}>{cardName}</Text>
      </ImageBackground>
      <LikeButton onPress={onPressLike} alreadyPressed={liked? true : false} />
    </View>
  );
};

export default PostCard;
