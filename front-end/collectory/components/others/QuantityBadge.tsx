import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styling/style';
import colors from '../styling/colors';

type QuantityBadgeProps = {
  color: number;
  quantity: number;
};

const QuantityBadge = ({ color, quantity }: QuantityBadgeProps) => {
  const qualityColor = (color: number) => {
    switch (color) {
      case 0:
        return colors.mint;
      case 1:
        return colors.nearMint;
      case 2:
        return colors.excellent;
      case 3:
        return colors.lightPlayed;
      case 4:
        return colors.played;
      case 5:
        return colors.poor;
      default:
        return colors.mint;
    }
  }

  //console.log(quantity);

  // , {backgroundColor: qualityColor(color)}
  return (
    <View style={[styles.quantityBadge]}>
      <Text style={styles.quantityBadgeText}>{quantity}</Text>
    </View>
  );
};
export default QuantityBadge;