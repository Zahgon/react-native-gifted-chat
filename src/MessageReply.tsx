import React, { useMemo, useCallback } from 'react'
import {
  StyleSheet,
  ViewStyle,
  View,
  Pressable,
  Image,
  TextStyle,
  StyleProp,
  ImageStyle,
  Text } from 'react-native'

import { Color } from './Color'
import { LeftRightStyle, IMessage, ReplyMessage } from './Models'
import { getStyleWithPosition } from './styles'

export interface MessageReplyProps<TMessage extends IMessage> {
  position?: 'left' | 'right'
  currentMessage: TMessage
  containerStyle?: LeftRightStyle<ViewStyle>
  contentContainerStyle?: LeftRightStyle<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  usernameStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: (replyMessage: ReplyMessage) => void
}

export function MessageReply<TMessage extends IMessage = IMessage> ({
  currentMessage,
  position = 'left',
  containerStyle,
  contentContainerStyle,
  imageStyle,
  usernameStyle,
  textStyle,
  onPress: onPressProp,
}: MessageReplyProps<TMessage>) {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 2,
    padding: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: Color.defaultBlue,
    minWidth: 150,
  },
  container_left: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  container_right: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 4,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  username_left: {
    color: Color.defaultBlue,
  },
  username_right: {
    color: Color.white,
  },
  text: {
    fontSize: 13,
  },
  text_left: {
    color: Color.black,
  },
  text_right: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
})
