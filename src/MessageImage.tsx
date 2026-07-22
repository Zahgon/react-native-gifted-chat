import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Image,
  StyleSheet,
  View,
  ImageProps,
  ViewStyle,
  StyleProp,
  ImageStyle,
  ImageURISource,
  LayoutChangeEvent,
  useWindowDimensions,
  StatusBar,
  Text } from 'react-native'
import { BaseButton, GestureHandlerRootView } from 'react-native-gesture-handler'
import { OverKeyboardView } from 'react-native-keyboard-controller'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Zoom from 'react-native-zoom-reanimated'
import { TouchableOpacity } from './components/TouchableOpacity'
import { IMessage } from './Models'
import commonStyles from './styles'

interface ModalContentProps {
  isVisible: boolean
  imageSource: ImageURISource
  modalImageDimensions: { width: number, height: number } | undefined
  imageProps?: Partial<ImageProps>
  onClose: () => void
}

function ModalContent({ isVisible, imageSource, modalImageDimensions, imageProps, onClose }: ModalContentProps) {
    throw new Error("STUB");
}

export interface MessageImageProps<TMessage extends IMessage> {
  currentMessage: TMessage
  containerStyle?: StyleProp<ViewStyle>
  imageSourceProps?: Partial<ImageURISource>
  imageStyle?: StyleProp<ImageStyle>
  imageProps?: Partial<ImageProps>
}

export function MessageImage<TMessage extends IMessage = IMessage> ({
  containerStyle,
  imageProps,
  imageSourceProps,
  imageStyle,
  currentMessage,
}: MessageImageProps<TMessage>) {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  modalImageContainer: {
    width: '100%',
    height: '100%',
  },

  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButtonContent: {
    padding: 20,
  },
  closeButtonIcon: {
    fontSize: 20,
    lineHeight: 20,
    color: 'white',
  },
})
