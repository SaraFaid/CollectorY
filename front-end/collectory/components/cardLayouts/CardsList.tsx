import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { getCardsFromSetID } from "../../services/pokemonAPI";
import { getCollectionByUser } from "../../services/collectionApi";
import styles from "../styling/style";
import Card from "./Card";

import SelectDropdown from "react-native-select-dropdown";
import StyledButton from "../buttons/StyledButton";
import colors from "../styling/colors";
import { getUserFromToken } from "../../services/userAPI";
import { addCardInCollection } from "../../services/collectionApi";
import { findWishlistByUserId } from "../../services/collectionApi";

type CardsListProps = {
  idSet: string;
  nameSet: string | undefined;
};

const CardsList = ({ idSet, nameSet }: CardsListProps) => {
  const [cards, setCards] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    id: string;
    name: string;
    number: number;
    set: { printedTotal: number; name: string; series: string };
    images: { small: string; large: string };
    rarity: string;
    artist: string;
  }>({
    id: "",
    name: "",
    number: 0,
    set: { printedTotal: 0, name: "", series: "" },
    images: { small: "", large: "" },
    rarity: "",
    artist: "",
  });

  const [collections, setCollections] = useState<
    {
      id: number;
      userId: number;
      collectionName: string;
      licenseId: number;
      createdAt: string;
      updatedAt: string;
    }[]
  >([]);

  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [selectedQuality, setSelectedQuality] = useState<string>("Mint");
  const [selectedCollection, setSelectedCollection] = useState<{
    id: number;
    userId: number;
    collectionName: string;
    licenseId: number;
    createdAt: string;
    updatedAt: string;
  }>({
    id: 0,
    userId: 0,
    collectionName: "",
    licenseId: 0,
    createdAt: "",
    updatedAt: "",
  });
  let userId = 0;

  const quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const quality = ["Excellent", "Lightly Played", "Poor"];

  const requestCard = async () => {
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
    requestCard();
  }

  const requestCollections = async () => {
    getUserFromToken()
      .then((user) => {
        if (user !== undefined) {
          userId = user.id;
          getCollectionByUser(userId)
            .then((list) => {
              // console.log(list);
              if (list !== undefined && list.length > 0) setCollections(list);
              else setCollections([]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showFullCard = (card: {
    id: string;
    name: string;
    number: number;
    set: { printedTotal: number; name: string; series: string };
    images: { small: string; large: string };
    rarity: string;
    artist: string;
  }) => {
    setSelectedCard(card);
    setModalVisible(true);
    requestCollections();
  };

  const addCardToCollection = () => {
    addCardInCollection(
      selectedCollection.id,
      selectedCard.id,
      selectedQuality,
      selectedQuantity
    )
      .then((res) => {
        setModalVisible(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCardToWishlist = () => {
    getUserFromToken()
      .then((user) => {
        if (user !== undefined) {
          userId = user.id;
          findWishlistByUserId(userId)
            .then((res) => {
              if (res === undefined) {
                console.log("No wishlist found");
              } else {
                addCardInCollection(
                  res[0].id,
                  selectedCard.id,
                  "poor",
                  1
                ).catch((err) => {
                  console.log(err);
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCard = () => {
    if (selectedCard.images.large === undefined) return <></>;
    else {
      const image = selectedCard.images.large;
      //console.log(selectedCard);
      return (
        <>
          <Image
            source={{ uri: image }}
            style={styles.largeCard}
            resizeMode="contain"
            key={selectedCard.id}
          />
          <Text style={styles.darkTextContent}>
            {selectedCard.number} / {selectedCard.set.printedTotal}
          </Text>
          <Text style={styles.darkTextContent}>
            {selectedCard.set.name} - {selectedCard.set.series} Set
          </Text>
          {selectedCard.rarity !== undefined ? (
            <Text style={styles.darkTextContent}>{selectedCard.rarity}</Text>
          ) : (
            <></>
          )}
          <Text style={styles.darkTextContent}>{selectedCard.artist}</Text>
          <View style={styles.viewRow}>
            <SelectDropdown
              data={quantity}
              onSelect={(selectedItem, index) => {
                setSelectedQuantity(selectedItem);
                // console.log(selectedItem, index);
              }}
              defaultButtonText={"Quantity"}
              defaultValue={quantity[0]}
              buttonTextAfterSelection={(selectedItem, index) => {
                setSelectedQuantity(selectedItem);
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={{
                borderRadius: 15,
                marginHorizontal: 5,
                width: 55,
                backgroundColor: colors.primary,
              }}
              buttonTextStyle={{ color: colors.dark, fontWeight: "bold" }}
            />

            <SelectDropdown
              data={quality}
              onSelect={(selectedItem, index) => {
                setSelectedQuality(selectedItem);
                // console.log(selectedItem, index);
              }}
              defaultButtonText={"Quality"}
              defaultValue={quality[0]}
              buttonTextAfterSelection={(selectedItem, index) => {
                setSelectedQuality(selectedItem);
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={{
                borderRadius: 15,
                marginHorizontal: 5,
                width: 100,
                backgroundColor: colors.primary,
              }}
              buttonTextStyle={{ color: colors.dark, fontWeight: "bold" }}
            />

            <SelectDropdown
              data={collections}
              onSelect={(selectedItem, index) => {
                setSelectedCollection(selectedItem);
                // console.log(selectedItem.collectionName, index);
              }}
              defaultButtonText={"Choose a collection"}
              buttonTextAfterSelection={(selectedItem, index) => {
                setSelectedCollection(selectedItem);
                return selectedItem.collectionName;
              }}
              rowTextForSelection={(item, index) => {
                return item.collectionName;
              }}
              buttonStyle={{
                borderRadius: 15,
                marginHorizontal: 5,
                width: 200,
                backgroundColor: colors.primary,
              }}
              buttonTextStyle={{ color: colors.dark, fontWeight: "bold" }}
            />
          </View>
          <StyledButton
            title="Add to this collection"
            onPress={addCardToCollection}
            color={colors.dark}
            disabled={false}
          />
          <StyledButton
            title="Add to Wishlist"
            onPress={addCardToWishlist}
            color={colors.dark}
            disabled={false}
          />
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.darkLargeContent}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && selectedCard.id !== ""}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSelectedCard({
            id: "",
            name: "",
            number: 0,
            set: { printedTotal: 0, name: "", series: "" },
            images: { small: "", large: "" },
            rarity: "",
            artist: "",
          });
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.darkTitleContent}>{selectedCard.name}</Text>
            {selectedCard.id !== "" ? getCard() : <></>}
            <StyledButton
              color={colors.dark}
              title="Back"
              disabled={false}
              onPress={() => {
                setSelectedCard({
                  id: "",
                  name: "",
                  number: 0,
                  set: { printedTotal: 0, name: "", series: "" },
                  images: { small: "", large: "" },
                  rarity: "",
                  artist: "",
                });
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.darkTitleContent}>{nameSet}</Text>
      {cards.length !== 0 ? (
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Card card={item} onPress={() => showFullCard(item)} margin={10} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          style={styles.flatList}
          columnWrapperStyle={styles.flatListColumn}
        />
      ) : (
        <Text style={styles.darkTitleContent}>Loading . . .</Text>
      )}
    </SafeAreaView>
  );
};

export default CardsList;
