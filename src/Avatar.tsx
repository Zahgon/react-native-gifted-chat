import React, { ReactNode, useCallback } from 'react'
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { GiftedAvatar } from './GiftedAvatar'
import { IMessage, LeftRightStyle, User } from './Models'
import { isSameUser, isSameDay } from './utils'

interface Styles {
  left: {
    container: ViewStyle
    onTop: ViewStyle
    image: ImageStyle
  }
  right: {
    container: ViewStyle
    onTop: ViewStyle
    image: ImageStyle
  }
}

const styles: Styles = {
  left: StyleSheet.create({
    container: {
      marginRight: 8,
    },
    onTop: {
      alignSelf: 'flex-start',
    },
    image: {
      height: 36,
      width: 36,
      borderRadius: 18,
    },
  }),
  right: StyleSheet.create({
    container: {
      marginLeft: 8,
    },
    onTop: {
      alignSelf: 'flex-start',
    },
    image: {
      height: 36,
      width: 36,
      borderRadius: 18,
    },
  }),
}

export interface AvatarProps<TMessage extends IMessage> {
  currentMessage: TMessage
  previousMessage?: TMessage
  nextMessage?: TMessage
  position: 'left' | 'right'
  isAvatarOnTop?: boolean
  isAvatarVisibleForEveryMessage?: boolean
  imageStyle?: LeftRightStyle<ImageStyle>
  containerStyle?: LeftRightStyle<ViewStyle>
  textStyle?: TextStyle
  renderAvatar?(props: Omit<AvatarProps<TMessage>, 'renderAvatar'>): ReactNode
  onPressAvatar?: (user: User) => void
  onLongPressAvatar?: (user: User) => void
}

export function Avatar<TMessage extends IMessage = IMessage> (
  props: AvatarProps<TMessage>
) {
    throw new Error("STUB");
}
