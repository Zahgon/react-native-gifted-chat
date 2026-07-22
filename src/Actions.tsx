import React, { ReactNode, useCallback } from 'react'
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text } from 'react-native'
import { Color } from './Color'
import { TouchableOpacity } from './components/TouchableOpacity'
import { useChatContext } from './GiftedChatContext'
import stylesCommon from './styles'

export interface ActionsProps {
  actions?: Array<{ title: string, action: () => void }>
  actionSheetOptionTintColor?: string
  icon?: () => ReactNode
  wrapperStyle?: StyleProp<ViewStyle>
  iconTextStyle?: StyleProp<TextStyle>
  buttonStyle?: StyleProp<ViewStyle>
  onPressActionButton?(): void
}

export function Actions ({
  actions,
  actionSheetOptionTintColor = Color.optionTintColor,
  icon,
  wrapperStyle,
  iconTextStyle,
  onPressActionButton,
  buttonStyle,
}: ActionsProps) {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  button: {
    paddingLeft: 10,
    paddingRight: 4,
    paddingVertical: 7,
  },

  wrapper: {
    borderColor: Color.defaultColor,
    borderWidth: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  iconText: {
    color: Color.defaultColor,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
  },
})
