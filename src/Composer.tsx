import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Platform,
  StyleSheet,
  TextInputChangeEvent,
  TextInputContentSizeChangeEvent,
  TextInputProps,
  View,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Color } from './Color'
import { useColorScheme } from './hooks/useColorScheme'
import stylesCommon, { getColorSchemeStyle } from './styles'

export interface ComposerProps {
  composerHeight?: number
  text?: string
  textInputProps?: Partial<TextInputProps>
}

export function Composer ({
  text = '',
  textInputProps,
}: ComposerProps): React.ReactElement {
    throw new Error("STUB");
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    lineHeight: 22,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  textInput_dark: {
    color: '#fff',
  },
})

const stylesWeb = StyleSheet.create({
  textInput: {
    /* @ts-expect-error - web-specific styles */
    outlineStyle: 'none',
  },
})
