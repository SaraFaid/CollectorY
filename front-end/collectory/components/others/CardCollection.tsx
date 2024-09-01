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
import QuantityBadge from "./QuantityBadge";
import {
  findCardExistInCollection,
  getAllCardsInCollection,
  getQuantity,
  removeCardInCollection,
} from "../../services/collectionApi";
import DeleteButton from "../buttons/DeleteButton";
import RNPickerSelect from "react-native-picker-select";
import LongButton from "../buttons/LongButton";
import colors from "../styling/colors";
import SelectDropdown from "react-native-select-dropdown";

type CardCollectionProps = {
  collection: {
    collectionId: number;
    collectionName: string;
  };
  cardIdList: string[];
};

const CardCollection = ({ collection, cardIdList }: CardCollectionProps) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const [quantity, setQuantity] = React.useState<number[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showQualityChoice, setShowQualityChoice] = React.useState(false);
  const [itemsPicker, setItemsPicker] = React.useState<any[]>([]);
  const [selectedQuality, setSelectedQuality] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });
  const [selectedCard, setSelectedCard] = React.useState<{
    id: string;
    name: string;
    number: number;
    set: { printedTotal: number; name: string; series: string };
    images: { small: string; large: string };
    rarity: string;
    artist: string;
    tcgplayer: {
      prices: { holofoil: { low: number; high: number; market: number } };
    };
  }>({
    id: "",
    name: "",
    images: { small: "", large: "" },
    number: 0,
    set: { printedTotal: 0, name: "", series: "" },
    rarity: "",
    artist: "",
    tcgplayer: { prices: { holofoil: { low: 0, high: 0, market: 0 } } },
  });
  const [collectionSelected, setCollectionSelected] = React.useState({
    collectionId: 0,
    collectionName: "",
  });

  const request = () => {
    // request to get all the cards in the selected collection and get the quantity of each card
    if (collectionSelected.collectionId !== collection.collectionId) {
      setCollectionSelected(collection);
      // console.log(collection);
    }
    getAllCardsInCollection(collection.collectionId)
      .then((res) => {
        // console.log("all the quantities " + JSON.stringify(res));
        if (res !== undefined) {
          const quantityList: number[] = [];
          res.map((item: { cardId: string; quantity: number }) => {
            quantityList.push(item.quantity);
            // console.log("quantityList1: " + quantityList);
          });

          getCardsList(cardIdList)
            .then((res2) => {
              // console.log("---- HERE ----");
              if (res2 !== undefined && cards !== res2) {
                // console.log("quantityList2: " + quantityList)
                if (quantity.length === 0) {
                  quantity.push(...quantityList);
                  // console.log("quantity2: " + quantity);
                }
              }

              setCards(res2);
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

  if (cards.length === 0 && quantity.length === 0) {
    // getCardsList(cardIdList);
    request();
  }

  // console.log("cards: " + JSON.stringify(cards[0]));

  const showFullCard = (card: {
    id: string;
    name: string;
    number: number;
    set: { printedTotal: number; name: string; series: string };
    images: { small: string; large: string };
    rarity: string;
    artist: string;
    tcgplayer: {
      prices: { holofoil: { low: number; high: number; market: number } };
    };
  }) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const getImage = () => {
    if (selectedCard.images.large === undefined) return <></>;
    else {
      const image = selectedCard.images.large;
      // console.log(selectedCard.images.large)
      return (
        <>
          <Image
            source={{ uri: image }}
            style={styles.largeCard}
            resizeMode="contain"
            key={selectedCard.id}
          />
          {selectedCard.rarity !== undefined ? (
            <Text style={styles.darkTextContent}>
              {selectedCard.number} / {selectedCard.set.printedTotal} -{" "}
              {selectedCard.rarity}
            </Text>
          ) : (
            <Text style={styles.darkTextContent}>
              {selectedCard.number} / {selectedCard.set.printedTotal}
            </Text>
          )}
          <Text style={styles.darkTextContent}>
            {selectedCard.set.name} - {selectedCard.set.series} Set
          </Text>

          <Text style={styles.darkTextContent}>{selectedCard.artist}</Text>
          <View
            style={{
              height: 10,
              width: "100%",
              backgroundColor: colors.light,
              padding: 0,
            }}
          ></View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.light,
              marginVertical: 5,
            }}
          >
            Excellent: ${selectedCard.tcgplayer.prices.holofoil.high.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              color: colors.light,
              marginVertical: 0,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.light,
              marginVertical: 5,
            }}
          >
            Lightly Played: ${selectedCard.tcgplayer.prices.holofoil.market.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              color: colors.light,
              marginVertical: 0,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.light,
              marginVertical: 5,
            }}
          >
            Poor: ${selectedCard.tcgplayer.prices.holofoil.low.toFixed(2)}
          </Text>
        </>
      );
    }
  };

  const deleteCardFromCollection = (card: any, collectionId: number) => {
    const cardId = card.id;
    const component = <></>;
    //console.log("cardId: " + cardId);
    //console.log("collectionId: " + collectionId);
    const id = findCardExistInCollection(collectionId, cardId)
      .then((res) => {
        if (res !== undefined) {
          const cardId = res.cardId;
          console.log(cardId);
          const quality = getQuantity(res.id)
            .then((res2) => {
              console.log(res2);
              if (res2 !== undefined) {
                const quality = res2;
                // console.log(quality);
                if (quality !== undefined) {
                  const table = [
                    quality.excellent,
                    quality.lightlyPlayed,
                    quality.poor,
                  ];
                  // console.log(table);
                  if (table[0] > 0 && table[1] == 0 && table[2] == 0) {
                    console.log("excellent");
                    removeCardInCollection(collectionId, cardId, "excellent");
                  } else if (table[0] == 0 && table[1] > 0 && table[2] == 0) {
                    console.log("lightlyPlayed");
                    removeCardInCollection(
                      collectionId,
                      cardId,
                      "lightlyPlayed"
                    );
                  } else if (table[0] == 0 && table[1] == 0 && table[2] > 0) {
                    console.log("poor");
                    removeCardInCollection(collectionId, cardId, "poor");
                  } else if (table[0] > 0 && table[1] > 0 && table[2] == 0) {
                    console.log("excellent and lightlyPlayed");
                    setItemsPicker([
                      { label: "Excellent", value: "excellent" },
                      { label: "Lightly Played", value: "lightlyPlayed" },
                    ]);
                    console.log(itemsPicker);
                    setShowQualityChoice(true);

                    // add compenent to choose quality to remove
                  } else if (table[0] > 0 && table[1] == 0 && table[2] > 0) {
                    console.log("excellent and poor");
                    setItemsPicker([
                      { label: "Excellent", value: "excellent" },
                      { label: "Poor", value: "poor" },
                    ]);
                    console.log(itemsPicker);
                    setShowQualityChoice(true);
                    // add compenent to choose quality to remove
                  } else if (table[0] == 0 && table[1] > 0 && table[2] > 0) {
                    console.log("lightlyPlayed and poor");

                    setItemsPicker([
                      { label: "Lightly Played", value: "lightlyPlayed" },
                      { label: "Poor", value: "poor" },
                    ]);
                    setShowQualityChoice(true);
                    // add compenent to choose quality to remove
                  } else if (table[0] > 0 && table[1] > 0 && table[2] > 0) {
                    console.log("excellent, lightlyPlayed and poor");
                    setItemsPicker([
                      { label: "Excellent", value: "excellent" },
                      { label: "Lightly Played", value: "lightlyPlayed" },
                      { label: "Poor", value: "poor" },
                    ]);
                    setShowQualityChoice(true);
                    // add compenent to choose quality to remove
                  } else {
                    console.log("no card to remove");
                  }
                  setCards([]);
                  request();
                }
              }
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

  const deleteCard = (id: string, collectionId: number, quality: string) => {
    removeCardInCollection(collectionId, id, quality)
      .then((res) => {
        console.log("Card removed");
        setCards([]);
        request();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const switchScreen = () => {
    // if(cards.length === 0) request()
    if (cardIdList.length === 0) {
      return (
        <>
          <SafeAreaView style={styles.darkLargeContent}>
            <Text style={styles.darkTitleContent}>
              {collectionSelected.collectionName}
            </Text>
            <Text style={styles.darkTitleContent}>
              No cards in this collection.
            </Text>
          </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
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
                  images: { small: "", large: "" },
                  number: 0,
                  set: { printedTotal: 0, name: "", series: "" },
                  rarity: "",
                  artist: "",
                  tcgplayer: {
                    prices: { holofoil: { low: 0, high: 0, market: 0 } },
                  },
                });
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.darkTitleContent}>
                    {selectedCard.name}
                  </Text>
                  {selectedCard.id !== "" ? getImage() : <></>}
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setSelectedCard({
                        id: "",
                        name: "",
                        images: { small: "", large: "" },
                        number: 0,
                        set: { printedTotal: 0, name: "", series: "" },
                        rarity: "",
                        artist: "",
                        tcgplayer: {
                          prices: { holofoil: { low: 0, high: 0, market: 0 } },
                        },
                      });
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Back</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Text style={styles.darkTitleContent}>
              {collectionSelected.collectionName}
            </Text>
            <FlatList
              data={cards}
              renderItem={({ item, index }) => (
                <>
                  <Card card={item} onPress={() => showFullCard(item)} />
                  <View
                    style={{
                      flexDirection: "column",
                      flexWrap: "wrap",
                      start: -15,
                      paddingTop: 10,
                    }}
                  >
                    <DeleteButton
                      onClick={() =>
                        deleteCardFromCollection(
                          item,
                          collectionSelected.collectionId
                        )
                      }
                    />
                    <QuantityBadge quantity={quantity[index]} />
                  </View>
                </>
              )}
              keyExtractor={(item) => item.id}
              numColumns={3}
              style={[styles.flatList, { margin: 0, padding: 0 }]}
              columnWrapperStyle={styles.flatListColumn}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={itemsPicker.length > 1 && showQualityChoice}
              onRequestClose={() => {
                console.log("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.darkTitleContent}>
                    Which card do you want to remove from your collection?
                  </Text>
                  <SelectDropdown
                    data={itemsPicker}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem);
                      setSelectedQuality(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem.label;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item.label;
                    }}
                    buttonStyle={{
                      borderRadius: 15,
                      marginHorizontal: 5,
                      width: 255,
                      backgroundColor: colors.primary,
                    }}
                    buttonTextStyle={styles.textStyle}
                    rowStyle={{
                      width: "100%",
                      backgroundColor: colors.primary,
                    }}
                    rowTextStyle={styles.textStyle}
                  />
                  <LongButton
                    title="Back"
                    onPress={() => {
                      setShowQualityChoice(!showQualityChoice);
                    }}
                  />
                  <LongButton
                    title="Confirm"
                    onPress={() => {
                      deleteCard(
                        selectedCard.id,
                        collectionSelected.collectionId,
                        selectedQuality.value
                      );
                      setShowQualityChoice(false);
                    }}
                  />
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        </>
      );
    }
  };

  return switchScreen();
};

export default CardCollection;
