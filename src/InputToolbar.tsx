import React, { useCallback, useMemo } from 'react'
import { StyleSheet, View, StyleProp, ViewStyle, TextStyle } from 'react-native'

import { Actions, ActionsProps } from './Actions'
import { Color } from './Color'
import { ReplyPreview, ReplyPreviewProps } from './components/ReplyPreview'
import { Composer, ComposerProps } from './Composer'
import { useColorScheme } from './hooks/useColorScheme'
import { IMessage, ReplyMessage } from './Models'
import { Send, SendProps } from './Send'
import { renderComponentOrElement } from './utils'

export type { ReplyPreviewProps } from './components/ReplyPreview'

export interface InputToolbarProps<TMessage extends IMessage> {
  actions?: Array<{ title: string, action: () => void }>
  actionSheetOptionTintColor?: string
  containerStyle?: StyleProp<ViewStyle>
  primaryStyle?: StyleProp<ViewStyle>
  renderAccessory?: (props: InputToolbarProps<TMessage>) => React.ReactNode
  renderActions?: (props: ActionsProps) => React.ReactNode
  renderSend?: (props: SendProps<TMessage>) => React.ReactNode
  renderComposer?: (props: ComposerProps) => React.ReactNode
  onPressActionButton?: () => void
  icon?: () => React.ReactNode
  wrapperStyle?: StyleProp<ViewStyle>
  /** Reply message to show in preview */
  replyMessage?: ReplyMessage | null
  /** Callback to clear reply */
  onClearReply?: () => void
  /** Custom render for reply preview */
  renderReplyPreview?: (props: ReplyPreviewProps) => React.ReactNode
  /** Style for reply preview container */
  replyPreviewContainerStyle?: StyleProp<ViewStyle>
  /** Style for reply preview text */
  replyPreviewTextStyle?: StyleProp<TextStyle>
}

export function InputToolbar<TMessage extends IMessage = IMessage> (
  props: InputToolbarProps<TMessage>
) {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Color.defaultColor,
    backgroundColor: Color.white,
  },
  container_dark: {
    backgroundColor: '#1a1a1a',
    borderTopColor: '#444',
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})
