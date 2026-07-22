import React, { useMemo } from 'react'
import { StyleSheet, View, ViewStyle, TextStyle , Text } from 'react-native'
import dayjs from 'dayjs'
import { Color } from './Color'
import { TIME_FORMAT } from './Constant'
import { useChatContext } from './GiftedChatContext'
import { LeftRightStyle, IMessage } from './Models'
import { getStyleWithPosition } from './styles'

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    textAlign: 'right',
  },
  text_left: {
    color: Color.timeTextColor,
  },
  text_right: {
    color: Color.white,
  },
})

export interface TimeProps<TMessage extends IMessage> {
  position?: 'left' | 'right'
  currentMessage: TMessage
  containerStyle?: LeftRightStyle<ViewStyle>
  timeTextStyle?: LeftRightStyle<TextStyle>
  timeFormat?: string
}

export const Time = <TMessage extends IMessage = IMessage>({
  position = 'left',
  containerStyle,
  currentMessage,
  timeFormat = TIME_FORMAT,
  timeTextStyle,
}: TimeProps<TMessage>) => {
    throw new Error("STUB");
}
