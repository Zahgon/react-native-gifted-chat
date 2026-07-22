import React, { useCallback, useMemo, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable'
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

import { Avatar } from '../Avatar'
import { Bubble } from '../Bubble'
import { Color } from '../Color'
import { IMessage } from '../Models'
import { SwipeToReplyProps } from '../Reply'
import { getStyleWithPosition } from '../styles'
import { SystemMessage } from '../SystemMessage'
import { isSameUser, renderComponentOrElement } from '../utils'
import styles from './styles'
import { MessageProps } from './types'

export * from './types'

interface ReplyIconProps {
  progress: SharedValue<number>
  translation: SharedValue<number>
  direction: 'left' | 'right'
  position: 'left' | 'right'
  style?: SwipeToReplyProps<IMessage>['actionContainerStyle']
}

const ReplyIcon = ({ progress, direction, position, style }: ReplyIconProps) => {
    throw new Error("STUB");
}

export const Message = <TMessage extends IMessage = IMessage>(props: MessageProps<TMessage>) => {
    throw new Error("STUB");
}

const localStyles = StyleSheet.create({
  swipeActionContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  replyIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Color.defaultBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  replyIcon: {
    width: 14,
    height: 10,
    transform: [{ scaleX: -1 }],
  },
  replyIconArrow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderRightWidth: 6,
    borderRightColor: Color.white,
  },
  replyIconLine: {
    position: 'absolute',
    top: 3,
    left: 5,
    width: 9,
    height: 4,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopColor: Color.white,
    borderRightColor: Color.white,
    borderTopRightRadius: 4,
  },
})
