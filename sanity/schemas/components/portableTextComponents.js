import React from 'react'

const TextUnderline = (props) => {
  return <span style={{ textDecoration: 'underline' }}>{props.children}</span>
}

const ColoredText = (props) => {
  return (
    <span
    //   style={{
    //     color: props?.color?.hex === '#ffffff' ? '#f0f0f0' : props?.color?.hex,
    //     background: props?.highlight?.hex === '#ffffff' ? '#f0f0f0' : props?.highlight?.hex,
    //   }}
    >
      {props.children}
    </span>
  )
}

export { TextUnderline, ColoredText }
