import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export type TouchableOpacityProps = Omit<React.ComponentProps<typeof BaseButton>, 'onPress'> & {
  activeOpacity?: number
  onPress?: () => void
} & React.ComponentProps<typeof Animated.View>

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  activeOpacity = 0.2,
  onPress,
  ...rest
}) => {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  content: {
    pointerEvents: 'none',
  },
})
