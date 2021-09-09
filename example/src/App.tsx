import moment from 'moment'
import React from 'react'

import { useClockCounter, ClockCounter } from 'react-clock-counter'
import 'react-clock-counter/index.css'

const App = () => {
  const { time } = useClockCounter({
    startTime: new Date(0, 0, 0, 6, 5, 10),
    interval: 1
  });
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Using Bare Component
        <ClockCounter />
      </div>
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Using hook. <br/>
        {moment(time).format('HH:mm:ss')}
      </div>
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {' '}
        Using Component with startTime.
        <ClockCounter startTime={new Date('12/08/2021 12:40:00')} />
      </div>
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {' '}
        Using Component with startTime and interval.
        <ClockCounter
          startTime={new Date('12/08/2021 12:40:00')}
          interval={2}
        />
      </div>
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {' '}
        Using Component with startTime and transform with moment.
        <ClockCounter
          startTime={new Date('12/08/2021 12:40:00')}
          transform={(d) => moment(d).format('mm:ss')}
        />
      </div>
    </div>
  )
}

export default App
