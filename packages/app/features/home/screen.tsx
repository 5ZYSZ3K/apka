import React from 'react'

import {View} from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {

  return (
    <View>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: { fontSize: 16, fontWeight: 'bold', color: 'blue' },
          }}
        >
          Regular Link
        </TextLink>
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
            Moti Link
        </MotiLink></View>
  )
}
