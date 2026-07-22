import React, { useMemo, useCallback } from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  Text } from 'react-native'

import { LinkParser, LinkMatcher, LinkType } from './linkParser'
import { LeftRightStyle, IMessage } from './Models'

export type MessageTextProps<TMessage extends IMessage> = {
  position?: 'left' | 'right'
  currentMessage: TMessage
  containerStyle?: LeftRightStyle<ViewStyle>
  textStyle?: LeftRightStyle<TextStyle>
  linkStyle?: LeftRightStyle<TextStyle>
  customTextStyle?: StyleProp<TextStyle>
  onPress?: (
    message: TMessage,
    url: string,
    type: LinkType
  ) => void
  // Link parser options
  matchers?: LinkMatcher[]
  email?: boolean
  phone?: boolean
  url?: boolean
  hashtag?: boolean
  mention?: boolean
  hashtagUrl?: string
  mentionUrl?: string
  stripPrefix?: boolean
}

export function MessageText<TMessage extends IMessage>({
  currentMessage,
  position = 'left',
  containerStyle,
  textStyle,
  linkStyle: linkStyleProp,
  customTextStyle,
  onPress: onPressProp,
  matchers,
  email = true,
  phone = true,
  url = true,
  hashtag = false,
  mention = false,
  hashtagUrl,
  mentionUrl,
  stripPrefix = false,
}: MessageTextProps<TMessage>) {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  text_left: {
    color: 'black',
  },
  text_right: {
    color: 'white',
  },
  link: {
    textDecorationLine: 'underline',
  },
})
