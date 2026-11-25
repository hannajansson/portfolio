import type { CSSProperties, ElementType, ReactNode } from 'react'
import './RevealText.css'

interface RevealTextProps {
  text: string
  as?: ElementType
  className?: string
  /** Seconds to wait before the first word starts rising. */
  delay?: number
}

/**
 * Splits text into words, each clipped in its own mask, so the words rise
 * into place one after another when the element scrolls into view.
 * Words are split per line so existing newlines in the data are kept.
 */
export function RevealText({ text, as: Tag = 'p', className, delay = 0 }: RevealTextProps) {
  const nodes: ReactNode[] = []
  let index = 0

  text.split('\n').forEach((line, lineIndex, lines) => {
    line.split(' ').filter(Boolean).forEach((word, wordIndex) => {
      if (wordIndex > 0) nodes.push(' ')
      const style = {
        '--rt-i': index,
        '--rt-base': `${delay}s`,
      } as CSSProperties
      nodes.push(
        <span key={`${lineIndex}-${wordIndex}`} className="rt-word">
          <span className="rt-inner" style={style}>{word}</span>
        </span>
      )
      index++
    })
    if (lineIndex < lines.length - 1) nodes.push(<br key={`br-${lineIndex}`} />)
  })

  return (
    <Tag className={className} data-reveal>
      {nodes}
    </Tag>
  )
}
