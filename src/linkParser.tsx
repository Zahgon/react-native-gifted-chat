import React from 'react'
import { Text, TextStyle, StyleProp, Linking } from 'react-native'

export type LinkType = 'url' | 'email' | 'phone' | 'mention' | 'hashtag'

export interface ParsedLink {
  type: LinkType
  text: string
  url: string
  index: number
  length: number
}

export interface LinkMatcher {
  type: LinkType
  pattern: RegExp
  getLinkUrl?: (text: string) => string
  getLinkText?: (text: string) => string
  baseUrl?: string
  style?: StyleProp<TextStyle>
  renderLink?: (text: string, url: string, index: number, type: LinkType) => React.ReactNode
  onPress?: (url: string, type: LinkType) => void
}

interface LinkParserProps {
  text: string
  matchers?: LinkMatcher[]
  email?: boolean
  phone?: boolean
  url?: boolean
  hashtag?: boolean
  mention?: boolean
  hashtagUrl?: string
  mentionUrl?: string
  linkStyle?: StyleProp<TextStyle>
  onPress?: (url: string, type: LinkType) => void
  stripPrefix?: boolean
  textStyle?: StyleProp<TextStyle>
  TextComponent?: React.ComponentType<any>
}

const DEFAULT_MATCHERS: LinkMatcher[] = [
  {
    type: 'url',
    pattern: /(?:https?:\/\/(?:www\.)?|www\.)[^\s]+|(?<![A-Za-z0-9_.@])(?![A-Za-z0-9._%+-]*@)[a-zA-Z0-9][a-zA-Z0-9-]*\.(?!@)[a-zA-Z]{2,}(?![A-Za-z0-9._%+-]*@)(?:\/[^\s]*)?/gi,
    getLinkUrl: (text: string) => {
        throw new Error("STUB");
    },
  },
  {
    type: 'email',
    pattern: /(?<![A-Za-z0-9])([a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi,
    getLinkUrl: (text: string) => { throw new Error("STUB"); },
  },
  {
    type: 'phone',
    pattern: /(?<![A-Za-z0-9_])(?:\+?\d{1,3}[\s.\-]?)?\(?\d{1,4}\)?[\s.\-]?\d{1,4}[\s.\-]?\d{1,9}(?![A-Za-z0-9_]|\.[a-z]{2,4})/gi,
    getLinkUrl: (text: string) => {
        throw new Error("STUB");
    },
  },
  {
    type: 'hashtag',
    pattern: /#[\w]+/g,
    getLinkUrl: (text: string) => { throw new Error("STUB"); },
    baseUrl: undefined,
  },
  {
    type: 'mention',
    pattern: /(?<![a-zA-Z0-9._%+-])@[\w-]+/g,
    getLinkUrl: (text: string) => { throw new Error("STUB"); },
    baseUrl: undefined,
  },
]

function parseLinks(text: string, matchers: LinkMatcher[]): ParsedLink[] {
    throw new Error("STUB");
}

function removeOverlaps(links: ParsedLink[]): ParsedLink[] {
    throw new Error("STUB");
}

export function LinkParser({
  text,
  matchers: customMatchers,
  email = true,
  phone = true,
  url = true,
  hashtag = false,
  mention = false,
  hashtagUrl,
  mentionUrl,
  linkStyle,
  onPress,
  stripPrefix = true,
  textStyle,
  TextComponent = Text,
}: LinkParserProps): React.ReactElement {
    throw new Error("STUB");
}
