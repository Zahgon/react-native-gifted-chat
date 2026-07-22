import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { View } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import stylesCommon from '../styles'
import styles from './styles'
import { TypingIndicatorProps } from './types'

export * from './types'

const DotsAnimation = () => {
    throw new Error("STUB");
}

export const TypingIndicator = ({ isTyping, style }: TypingIndicatorProps) => {
    throw new Error("STUB");
}
