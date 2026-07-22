import React, { useCallback } from 'react'
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { IMessage } from '../Models'
import { ReactionPickerProps } from './types'

const PICKER_HEIGHT = 54
const EMOJI_BUTTON_SIZE = 46
const PICKER_PADDING_H = 8
const PICKER_VERTICAL_OFFSET = 8

/**
 * Lightweight quick-picker shown on long-press: a floating row of emojis
 * anchored to the pressed bubble. For a full emoji browser, pass a custom
 * component via `reactions.renderReactionPicker` (see the example app).
 */
export const ReactionPicker = <TMessage extends IMessage = IMessage>(
  props: ReactionPickerProps<TMessage>
): React.ReactElement | null => {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    height: PICKER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: PICKER_HEIGHT / 2,
    paddingHorizontal: PICKER_PADDING_H,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  emojiButton: {
    width: EMOJI_BUTTON_SIZE,
    height: EMOJI_BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: EMOJI_BUTTON_SIZE / 2,
  },
  emojiButtonPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    transform: [{ scale: 1.2 }],
  },
  emoji: {
    fontSize: 26,
    lineHeight: 32,
  },
})
