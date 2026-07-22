import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  View,
  Pressable,
  Text } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { MessageReply } from '../components/MessageReply'
import { useChatContext } from '../GiftedChatContext'
import { MessageAudio } from '../MessageAudio'
import { MessageImage } from '../MessageImage'
import { MessageText } from '../MessageText'
import { MessageVideo } from '../MessageVideo'
import { IMessage } from '../Models'
import { QuickReplies } from '../QuickReplies'
import { DEFAULT_REACTION_EMOJIS, MessageReactions, ReactionPicker } from '../Reactions'
import { getStyleWithPosition } from '../styles'
import { Time } from '../Time'
import { isSameUser, isSameDay, renderComponentOrElement } from '../utils'
import styles from './styles'
import { BubbleProps, RenderMessageTextProps } from './types'

export * from './types'

interface PickerAnchor {
  pageX: number
  pageY: number
  bubbleWidth: number
  bubbleHeight: number
}

const SCALE_PRESSED = 0.85
const SCALE_DURATION_IN = 400
const SCALE_DURATION_OUT = 200
const SCALE_EASING = Easing.inOut(Easing.quad)

export const Bubble = <TMessage extends IMessage = IMessage>(props: BubbleProps<TMessage>): React.ReactElement => {
    throw new Error("STUB");
}
