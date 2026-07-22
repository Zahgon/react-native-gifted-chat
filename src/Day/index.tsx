import React, { useMemo } from 'react'
import {
  View,
  Text } from 'react-native'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import relativeTime from 'dayjs/plugin/relativeTime'
import { DATE_FORMAT } from '../Constant'
import { useChatContext } from '../GiftedChatContext'
import stylesCommon from '../styles'
import styles from './styles'
import { DayProps } from './types'

export * from './types'

dayjs.extend(relativeTime)
dayjs.extend(calendar)

export function Day ({
  dateFormat = DATE_FORMAT,
  dateFormatCalendar,
  createdAt,
  containerStyle,
  wrapperStyle,
  textProps,
}: DayProps) {
    throw new Error("STUB");
}
