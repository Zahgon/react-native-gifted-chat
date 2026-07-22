import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  View,
  LayoutChangeEvent,
  ListRenderItemInfo,
  CellRendererProps,
  Text } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import Animated, { runOnJS, ScrollEvent, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { LoadEarlierMessages } from '../LoadEarlierMessages'
import { warning } from '../logging'
import { IMessage } from '../Models'
import stylesCommon from '../styles'
import { TypingIndicator } from '../TypingIndicator'
import { isSameDay, useCallbackThrottled } from '../utils'
import { DayAnimated } from './components/DayAnimated'
import { Item } from './components/Item'
import { ItemProps } from './components/Item/types'
import styles from './styles'
import { MessagesContainerProps, DaysPositions, AnimatedFlatList } from './types'

export * from './types'

export const MessagesContainer = <TMessage extends IMessage>(props: MessagesContainerProps<TMessage>) => {
    throw new Error("STUB");
}
