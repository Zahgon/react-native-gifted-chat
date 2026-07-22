import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { LayoutChangeEvent } from 'react-native'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, useAnimatedReaction, runOnJS } from 'react-native-reanimated'
import { Day } from '../../../Day'
import stylesCommon from '../../../styles'
import { DAY_HANDOFF_OFFSET, DAY_MARGIN_TOP, DAY_PIN_OFFSET, DAY_PUSH_GAP, dayPositionScreenTop } from '../dayLayout'
import { DAY_DEBUG, useDayDebugOverlay } from './debug'
import styles from './styles'
import { DayAnimatedProps } from './types'
import { useScrollGatedOpacity } from './useScrollGatedOpacity'

export * from './types'

export const DayAnimated = ({ scrolledY, daysPositions, listHeight, isScrollActive, floatingRenderedDate, renderDay, isLoading, ...rest }: DayAnimatedProps) => {
    throw new Error("STUB");
}
