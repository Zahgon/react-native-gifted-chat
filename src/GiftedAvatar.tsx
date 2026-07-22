import React, { useCallback, useMemo } from 'react'
import {
  Image,
  View,
  StyleSheet,
  StyleProp,
  ImageStyle,
  TextStyle,
  Text } from 'react-native'
import { Color } from './Color'
import { TouchableOpacity } from './components/TouchableOpacity'
import { User } from './Models'
import stylesCommon from './styles'

const {
  carrot,
  emerald,
  peterRiver,
  wisteria,
  alizarin,
  turquoise,
  midnightBlue,
} = Color

const styles = StyleSheet.create({
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarTransparent: {
    backgroundColor: Color.backgroundTransparent,
  },
  textStyle: {
    color: Color.white,
    fontSize: 16,
    backgroundColor: Color.backgroundTransparent,
    fontWeight: '100',
  },
})

export interface GiftedAvatarProps {
  user?: User
  avatarStyle?: StyleProp<ImageStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: (props: GiftedAvatarProps) => void
  onLongPress?: (props: GiftedAvatarProps) => void
}

export function GiftedAvatar (
  props: GiftedAvatarProps
) {
    throw new Error("STUB");
}
