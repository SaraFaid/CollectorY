import React from 'react';
import { Text, View } from 'react-native';
import colors from '../styling/colors';

type QuantityBadgeProps = {
  quantity: number;
};

const QuantityBadge = ({ quantity }: QuantityBadgeProps) => {
  
  return (
    <View style={{backgroundColor: colors.mint, minWidth: 25, maxHeight: 25, borderRadius: 15, borderColor: colors.secondary, borderWidth: 1, alignContent: 'center', zIndex: 1}}>
      <Text style={{fontSize: 14, color: colors.dark, textAlign: 'center', marginVertical: 'auto'}}>{quantity}</Text>
    </View>
  );
};
export default QuantityBadge;