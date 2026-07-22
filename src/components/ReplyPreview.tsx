import React, { useEffect } from 'react'
import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  runOnJS,
} from 'react-native-reanimated'

import { useColorScheme } from '../hooks/useColorScheme'
import { ReplyMessage } from '../Models'

const ANIMATION_DURATION = 200
const ANIMATION_EASING = Easing.bezier(0.25, 0.1, 0.25, 1)
const DEFAULT_HEIGHT = 68

export interface ReplyPreviewProps {
  /** The reply message to preview */
  replyMessage: ReplyMessage
  /** Callback to clear the reply */
  onClearReply?: () => void
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>
  /** Text style */
  textStyle?: StyleProp<TextStyle>
  /** Image style */
  imageStyle?: StyleProp<ImageStyle>
}

const styles = StyleSheet.create({
  borderIndicator: {
    backgroundColor: '#0084ff',
    borderTopLeftRadius: 4,
    height: '100%',
    width: 4,
  },
  clearButton: {
    alignItems: 'center',
    borderRadius: 12,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  clearButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 8,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  containerDark: {
    backgroundColor: '#2c2c2e',
  },
  containerLight: {
    backgroundColor: '#e9e9eb',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  image: {
    borderRadius: 4,
    height: 40,
    marginRight: 8,
    width: 40,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#333',
  },
  username: {
    color: '#0084ff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  wrapper: {
    overflow: 'hidden',
  },
})

export function ReplyPreview ({
  replyMessage,
  onClearReply,
  containerStyle,
  textStyle,
  imageStyle,
}: ReplyPreviewProps) {
    throw new Error("STUB");
}
