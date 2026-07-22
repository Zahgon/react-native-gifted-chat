import React, { useState, useMemo, useCallback } from 'react'
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text } from 'react-native'
import { Color } from './Color'
import { TouchableOpacity } from './components/TouchableOpacity'
import { warning } from './logging'
import { IMessage, Reply } from './Models'
import stylesCommon from './styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 300,
  },
  quickReply: {
    borderWidth: 1,
    maxWidth: 200,
    paddingVertical: 7,
    paddingHorizontal: 12,
    minHeight: 50,
    borderRadius: 13,
    margin: 3,
  },
  quickReplyText: {
    overflow: 'visible',
  },
  sendLink: {
    borderWidth: 0,
  },
  sendLinkText: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
  },
})

export interface QuickRepliesProps<TMessage extends IMessage = IMessage> {
  nextMessage?: TMessage
  currentMessage: TMessage
  color?: string
  sendText?: string
  quickReplyStyle?: StyleProp<ViewStyle>
  quickReplyTextStyle?: StyleProp<TextStyle>
  quickReplyContainerStyle?: StyleProp<ViewStyle>
  onQuickReply?(reply: Reply[]): void
  renderQuickReplySend?(): React.ReactNode
}

const sameReply = (currentReply: Reply) => { throw new Error("STUB"); }

const diffReply = (currentReply: Reply) => { throw new Error("STUB"); }

export function QuickReplies ({
  currentMessage,
  nextMessage,
  color = Color.peterRiver,
  quickReplyStyle,
  quickReplyTextStyle,
  quickReplyContainerStyle,
  onQuickReply,
  sendText = 'Send',
  renderQuickReplySend,
}: QuickRepliesProps<IMessage>) {
    throw new Error("STUB");
}
