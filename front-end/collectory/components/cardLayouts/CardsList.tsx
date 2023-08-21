import React from "react";
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
import { getCardsFromSetID } from "../../services/pokemonAPI";
import styles from "../styling/style";
import Card from "./Card";

type CardsListProps = {
  idSet: string;
  nameSet: string | undefined;
};

const CardsList = ({ idSet, nameSet }: CardsListProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<{id: string, name: string, images: {small: string, large: string}}>({id: "", name: "", images: {small: "", large: ""}});

  const request = async () => {
    await getCardsFromSetID(idSet)
      .then((set) => {
        set.map((card: any) => {
          setCards((cards) => [...cards, card]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (cards.length === 0) {
    request();
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

  return (
    <SafeAreaView style={styles.darkLargeContent}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && selectedCard.id !==""}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSelectedCard({id: "", name: "", images: {small: "", large: ""}});
          setModalVisible(!modalVisible);
        }}
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
      <Text style={styles.darkTitleContent}>{nameSet}</Text>
      {cards.length !== 0 ? (
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Card card={item} onPress={() => showFullCard(item)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      ) : (
        <Text style={styles.darkTitleContent}>Loading . . .</Text>
      )}
    </SafeAreaView>
  );
};

export default CardsList;
