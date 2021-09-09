import { useEffect, useState } from 'react'

export interface useClockCounterProps {
  startTime?: Date
  endTime?: Date | null
  interval?: number
  onUpdate?: (currentTime?: Date) => void
  startAutomatically?: boolean
}

export interface useClockCounterReturnProps {
  time: Date
  pause: () => Date
  start: () => Date
  end: () => Date
}

const defaultProps: Pick<
  Required<useClockCounterProps>,
  'startTime' | 'interval' | 'startAutomatically'
> = {
  startTime: new Date(),
  interval: 1,
  startAutomatically: true
}
export const useClockCounter = (
  incomingProps: useClockCounterProps = defaultProps
): useClockCounterReturnProps => {
  const { startTime, interval, onUpdate, startAutomatically } = {
    ...defaultProps,
    ...incomingProps
  }
  const [Ticking, setTicking] = useState(startAutomatically)
  const [CurrentTime, setCurrentTime] = useState(startTime)
  useEffect(() => {
    if (startAutomatically || Ticking)
      setTimeout(() => {
        const date = new Date(CurrentTime).valueOf()
        const newdate = new Date(date + interval * 1000)
        setCurrentTime(newdate)
        if (onUpdate) onUpdate(newdate)
      }, interval * 1000)
  })
  return {
    time: CurrentTime,
    pause: () => {
      setTicking((s) => !s)
      return CurrentTime
    },
    start: () => {
      setTicking(true)
      return CurrentTime
    },
    end: () => {
      setTicking(false)
      return CurrentTime
    }
  }
}
