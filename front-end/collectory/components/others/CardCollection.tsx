import React, { useEffect } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
    Image,
} from "react-native";
import { getCardsList } from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "../cardLayouts/Card";

type CardCollectionProps = {
  nameCollection: string;
  cardIdList: string[];
};

const CardCollection = ({ nameCollection, cardIdList }: CardCollectionProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{id: string, name: string, images: {small: string, large: string}}>({id: "", name: "", images: {small: "", large: ""}});

  
  const request =  () => {

    getCardsList(cardIdList)
    .then((list) => {
      setCards(list)
      }
    )
      .catch((error) => {
        console.log(error);
      }
    );  
  };

  if (cards.length === 0) {
    // getCardsList(cardIdList);
    request()
    

  }

  const showFullCard = (card: {id: string, name: string, images: {small: string, large: string}}) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const getImage = () => {
    if(selectedCard.images.large === undefined) return (<></>)
    else {
        const image = selectedCard.images.large
        //console.log(selectedCard.images.large)
        return <Image source={{uri : image}} style={styles.largeCard} resizeMode="contain" key={selectedCard.id}/>
    }
    }

    const switchScreen = () => {
      // if(cards.length === 0) request()
      if(cardIdList.length === 0){
        return (
          <>
          <SafeAreaView style={styles.darkLargeContent}>
          <Text style={styles.darkTitleContent}>{nameCollection}</Text>
            <Text style={styles.darkTitleContent}>No cards in this collection.</Text>
            </SafeAreaView>
            </>)
      }
      else {
        return (
          <>
          <SafeAreaView style={styles.darkLargeContent}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible && selectedCard.id !==""}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
        setModalVisible(!modalVisible);
      }
    }
      >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Text style={styles.darkTitleContent}>{selectedCard.name}</Text>
      {selectedCard.id !== ""? getImage(): <></>}
      <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
        setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
        setModalVisible(!modalVisible)}}>
        <Text style={styles.textStyle}>Back</Text>
        </Pressable>
        </View>
        </View>
        </Modal>
        <Text style={styles.darkTitleContent}>{nameCollection}</Text>
        <FlatList
        data={cards}
        renderItem={({ item }) => (
          <Card card={item} onPress={() => showFullCard(item)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          />
          </SafeAreaView>
          </>
        )

      }
    }

  return switchScreen()
};

export default CardCollection;
