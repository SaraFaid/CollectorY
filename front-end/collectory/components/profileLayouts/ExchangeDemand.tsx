import React, { useEffect } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { getCardByID } from '../../services/pokemonAPI';
import { View, Text } from 'react-native';
import Card from '../cardLayouts/Card';
import styles from '../styling/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styling/colors';


const ExchangeDemand = () => {
    // const [cardsNeeded, setCardsNeeded] = React.useState<any[]>([]);
    // const [cardsToGive, setCardsToGive] = React.useState<any[]>([]);

    // const cardsNeededId = ["dpp-DP52", "sma-SV25", "sv1-208", "bwp-BW73", "xyp-XY45", "neo4-12", "bw11-81"]
    // const cardsToGiveId = ["sm12-212", "smp-SM198", "swsh12tg-TG07", "sv1-254"]

    // const exchangepossible = () => {
    //     if(cardsNeededId.length === 0 || cardsToGiveId.length === 0){
    //         return []
    //     }
    //     else {
    //         const exchange: any[] = []

    //         cardsNeededId.map((cardNeededId) => {
    //             if(cardNeededId === "xyp-XY45"){
    //                 cardsToGiveId.map((cardToGiveId) => {
    //                     if(cardToGiveId === "smp-SM198"){
    //                         exchange.push({cardNeededId, cardToGiveId})
    //                     }
    //                 })
    //             }
    //             else
    //             {
    //                 if(cardNeededId === "sv1-208"){
    //                 cardsToGiveId.map((cardToGiveId) => {
    //                     if(cardToGiveId === "sv1-254"){
    //                         exchange.push({cardNeededId, cardToGiveId});
    //                     }
    //                 })
    //             }
    //         }

    //         })
    //         return exchange
    //     }
    // }

    // const fillDemands = () => {
    //     if(exchangepossible().length !== 0){
    //         const tmp = exchangepossible().map(async (exchange) => {
    //             const demands: JSX.Element[] = []
    //             await getCardByID(exchange.cardNeededId)
    //             .then((card: any) => {
    //                 setCardsNeeded((cardsNeeded) => [...cardsNeeded, card]);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //             await getCardByID(exchange.cardToGiveId)
    //             .then((card: any) => {
    //                 setCardsToGive((cardsToGive) => [...cardsToGive, card]);
    //                 let index = 0
    //         while(index < cardsNeeded.length){
    //             demands.push(
    //                 <View key={index}>
    //                     <Text>{cardsNeeded[index].name} for {cardsToGive[index].name}</Text>
    //                     <View style={{flexDirection: "row"}} >
    //                     <Card card={cardsNeeded[index].id} onPress={() => {}}/>
    //                     <Card card={cardsToGive[index].id} onPress={() => {}}/>
    //                     </View>
    //                 </View>
    //             )
    //             index++
    //         }
    //     }
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //     }
    //     );
        
    //         return demands
    //         })
    //         return tmp
    //     }

    // }

    // const displayDemands = async () => {
    //     const tmp = fillDemands()
    //    if(tmp !== undefined) {
    //        return await tmp
    //      }
    //      else {
    //          return (<Text>No demands for now</Text>
    //          )}
    // }

    // TODO: rewrite this whole shit

    const card1 = {id: "smp-SM198", name: "Bulbasaur", images: {
        small: "https://images.pokemontcg.io/smp/SM198.png"}}

    const card2 = {id: "xyp-XY45", name: "Gallade EX", images: {
        small: "https://images.pokemontcg.io/xyp/XY45.png"}}


    return (
        <View>
        <Text style={styles.darkTitleContent}>Exchange Demands</Text>
        {/* {await displayDemands()} */}
        <View style={{backgroundColor: colors.tertiary, minHeight: 300, alignItems:'center', justifyContent: 'flex-start', paddingTop: 40, borderRadius: 15}}>
                        <View style={{flexDirection: "row"}} >
                        <Icon name='close-thick' size={40} color={colors.error} onPress={() => {}}/>
                <Icon name='check-bold' size={40} color={colors.dark} onPress={() => {}}/>
                            </View>
                        <Text style={styles.textStyle}>Bulbasaur for Gallade EX</Text>
                        <View style={{flexDirection: "row"}} >
                        <Card card={card1} onPress={() => {}}/>
                        <Card card={card2} onPress={() => {}}/>
                        </View>
                    </View>
        </View>
    )
}

export default ExchangeDemand;