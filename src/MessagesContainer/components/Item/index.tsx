import React, { useMemo } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'
import { Day } from '../../../Day'
import { Message, MessageProps } from '../../../Message'
import { IMessage } from '../../../Models'
import { isSameDay } from '../../../utils'
import { DAY_HANDOFF_OFFSET, dayPositionScreenTop, findDayPosition } from '../dayLayout'
import { ItemProps } from './types'

export * from './types'

const DayWrapper = <TMessage extends IMessage>(props: MessageProps<TMessage>) => {
    throw new Error("STUB");
}

const AnimatedDayWrapper = <TMessage extends IMessage>(props: ItemProps<TMessage>) => {
    throw new Error("STUB");
}

export const Item = <TMessage extends IMessage>(props: ItemProps<TMessage>) => {
    throw new Error("STUB");
}
