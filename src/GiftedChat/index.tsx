import React, {
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  RefObject,
} from 'react'
import {
  View,
  LayoutChangeEvent,
  useColorScheme,
} from 'react-native'
import {
  ActionSheetProvider,
  ActionSheetProviderRef,
} from '@expo/react-native-action-sheet'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import { KeyboardAvoidingView, KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { TEST_ID } from '../Constant'
import { GiftedChatContext } from '../GiftedChatContext'
import { InputToolbar } from '../InputToolbar'
import { MessagesContainer, AnimatedList } from '../MessagesContainer'
import { IMessage, ReplyMessage } from '../Models'
import stylesCommon from '../styles'
import { renderComponentOrElement } from '../utils'
import styles from './styles'
import { GiftedChatProps } from './types'

dayjs.extend(localizedFormat)

function GiftedChat<TMessage extends IMessage = IMessage> (
  props: GiftedChatProps<TMessage>
) {
  const {
    messages = [],
    initialText = '',
    isTyping,

    // "random" function from here: https://stackoverflow.com/a/8084248/3452513
    // we do not use uuid since it would add extra native dependency (https://www.npmjs.com/package/react-native-get-random-values)
    // lib's user can decide which algorithm to use and pass it as a prop
    messageIdGenerator = () => { throw new Error("STUB"); },

    user = {},
    onSend,
    locale = 'en',
    colorScheme: colorSchemeProp,
    renderLoading,
    actionSheet,
    textInputProps,
    renderChatFooter,
    renderInputToolbar,
    isInverted = true,

    // Reply props
    reply,
  } = props

  // Extract reply props for internal use
  const replyMessageProp = reply?.message
  const onClearReply = reply?.onClear
  const onSwipeToReply = reply?.swipe?.onSwipe
  const renderReplyPreview = reply?.renderPreview
  const replyPreviewContainerStyle = reply?.previewStyle?.containerStyle
  const replyPreviewTextStyle = reply?.previewStyle?.textStyle

  const systemColorScheme = useColorScheme()
  const colorScheme = colorSchemeProp !== undefined ? colorSchemeProp : systemColorScheme

  const actionSheetRef = useRef<ActionSheetProviderRef>(null)

  const insets = useSafeAreaInsets()

  const messagesContainerRef = useMemo(
    () => { throw new Error("STUB"); },
    [props.messagesContainerRef]
  ) as RefObject<AnimatedList<TMessage>>

  const textInputRef = useMemo(
    () => { throw new Error("STUB"); },
    [props.textInputRef]
  )

  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [text, setText] = useState<string | undefined>(() => { throw new Error("STUB"); })
  const [internalReplyMessage, setInternalReplyMessage] = useState<ReplyMessage | null>(null)

  // Use controlled or uncontrolled reply state
  const replyMessage = replyMessageProp !== undefined ? replyMessageProp : internalReplyMessage

  const getTextFromProp = useCallback(
    (fallback: string) => {
          throw new Error("STUB");
      },
    [props.text]
  )

  const scrollToBottom = useCallback(
    (isAnimated = true) => {
          throw new Error("STUB");
      },
    [isInverted, messagesContainerRef]
  )

  const handleSwipeToReply = useCallback(
    (message: TMessage) => {
          throw new Error("STUB");
      },
    [replyMessageProp, onSwipeToReply]
  )

  const clearReply = useCallback(() => {
      throw new Error("STUB");
  }, [replyMessageProp, onClearReply])

  const renderMessages = useMemo(() => {
      throw new Error("STUB");
  }, [
    isInitialized,
    isTyping,
    messages,
    props,
    isInverted,
    messagesContainerRef,
    renderChatFooter,
    reply,
    handleSwipeToReply,
  ])

  const notifyInputTextReset = useCallback(() => {
      throw new Error("STUB");
  }, [props.textInputProps])

  const resetInputToolbar = useCallback(() => {
      throw new Error("STUB");
  }, [
    getTextFromProp,
    textInputRef,
    notifyInputTextReset,
  ])

  const _onSend = useCallback(
    (messages: TMessage[] = [], shouldResetInputToolbar = false) => {
          throw new Error("STUB");
      },
    [messageIdGenerator, onSend, user, resetInputToolbar, scrollToBottom, replyMessage, clearReply]
  )

  const _onChangeText = useCallback(
    (text: string) => {
          throw new Error("STUB");
      },
    [props.text, props.textInputProps]
  )

  const onInitialLayoutViewLayout = useCallback(
    (e: LayoutChangeEvent) => {
          throw new Error("STUB");
      },
    [isInitialized, initialText, notifyInputTextReset, getTextFromProp]
  )

  const inputToolbarFragment = useMemo(() => {
      throw new Error("STUB");
  }, [
    isInitialized,
    _onSend,
    getTextFromProp,
    props,
    text,
    renderInputToolbar,
    textInputRef,
    textInputProps,
    _onChangeText,
    replyMessage,
    clearReply,
    renderReplyPreview,
    replyPreviewContainerStyle,
    replyPreviewTextStyle,
  ])

  const contextValues = useMemo(
    () => { throw new Error("STUB"); },
    [actionSheet, locale, colorScheme]
  )

  useEffect(() => {
      throw new Error("STUB");
  }, [props.text])

  return (
    <GiftedChatContext.Provider value={contextValues}>
      <ActionSheetProvider ref={actionSheetRef}>
        <View
          testID={TEST_ID.WRAPPER}
          style={[stylesCommon.fill, styles.contentContainer]}
          onLayout={onInitialLayoutViewLayout}
        >
          <KeyboardAvoidingView
            behavior='translate-with-padding'
            keyboardVerticalOffset={insets.top}
            style={stylesCommon.fill}
            {...props.keyboardAvoidingViewProps}
          >
            <View style={[stylesCommon.fill, !isInitialized && styles.hidden]}>
              {renderMessages}
              {inputToolbarFragment}
            </View>
            {!isInitialized && renderComponentOrElement(renderLoading, {})}
          </KeyboardAvoidingView>
        </View>
      </ActionSheetProvider>
    </GiftedChatContext.Provider>
  )
}

function GiftedChatWrapper<TMessage extends IMessage = IMessage> (props: GiftedChatProps<TMessage>) {
  const {
    keyboardProviderProps,
    disableKeyboardProvider = false,
    ...rest
  } = props

  const chat = <GiftedChat<TMessage> {...rest} />

  return (
    <GestureHandlerRootView style={styles.fill}>
      <SafeAreaProvider>
        {disableKeyboardProvider
          ? chat
          : (
            <KeyboardProvider
              statusBarTranslucent
              navigationBarTranslucent
              {...keyboardProviderProps}
            >
              {chat}
            </KeyboardProvider>
          )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

GiftedChatWrapper.append = <TMessage extends IMessage>(
  currentMessages: TMessage[] = [],
  messages: TMessage[],
  isInverted = true
) => {
    throw new Error("STUB");
}

GiftedChatWrapper.prepend = <TMessage extends IMessage>(
  currentMessages: TMessage[] = [],
  messages: TMessage[],
  isInverted = true
) => {
    throw new Error("STUB");
}

export {
  GiftedChatWrapper as GiftedChat
}
