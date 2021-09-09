import React from 'react'
import { useClockCounterProps, useClockCounter } from './useClockCounter'

export interface ClockCounterProps extends useClockCounterProps {
  className?: string
  style?: React.CSSProperties
  transform?: (time: Date) => string
}

export const ClockCounter: React.FC<ClockCounterProps> = ({
  className,
  style,
  transform,
  ...restprops
}: ClockCounterProps) => {
  const { time } = useClockCounter(restprops)
  return (
    <div className={className} style={style}>
      {transform ? transform(time) : time.toISOString()}
    </div>
  )
}
