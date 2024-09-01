import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styling/style';
import colors from '../styling/colors';

type DeleteButtonProps = {
  // color: number;
  onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteButtonProps) => {

  return (
    <View style={{backgroundColor: colors.error, minWidth: 25, minHeight: 25, borderRadius: 15, alignContent: 'center', zIndex: 2, marginBottom: 2}} onTouchStart={onClick}>
      <Text style={{fontSize: 14, color: colors.dark, textAlign: 'center', marginVertical: 'auto', fontWeight: "bold"}}>-</Text>
    </View>
  );
};
export default DeleteButton;