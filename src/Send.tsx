import React, { useMemo, useCallback, useEffect } from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { Color } from './Color'
import { TouchableOpacity, TouchableOpacityProps } from './components/TouchableOpacity'
import { TEST_ID } from './Constant'
import { useColorScheme } from './hooks/useColorScheme'
import { IMessage } from './Models'
import { getColorSchemeStyle } from './styles'

export interface SendProps<TMessage extends IMessage> {
  text?: string
  label?: string
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
  /** Always show send button, even when text is empty */
  isSendButtonAlwaysVisible?: boolean
  /** Text is optional, allow sending empty messages (useful for media-only messages) */
  isTextOptional?: boolean
  sendButtonProps?: Partial<TouchableOpacityProps>
  onSend?(
    messages: Partial<TMessage> | Partial<TMessage>[],
    shouldResetInputToolbar: boolean,
  ): void
}

export const Send = <TMessage extends IMessage = IMessage>({
  text,
  containerStyle,
  children,
  textStyle,
  label = 'Send',
  isSendButtonAlwaysVisible = false,
  isTextOptional = false,
  sendButtonProps,
  onSend,
}: SendProps<TMessage>) => {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  touchable: {
    justifyContent: 'flex-end',
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text_dark: {
    color: '#4da6ff',
  },
})
