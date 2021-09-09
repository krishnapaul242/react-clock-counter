import moment from 'moment'
import React from 'react'

import { useClockCounter, ClockCounter } from 'react-clock-counter'

const App = () => {
  const { time } = useClockCounter({
    startTime: new Date(0, 0, 0, 6, 5, 10),
    interval: 1,
  });
  const { time: time2, start,end } = useClockCounter({
    startTime: new Date(0, 0, 0, 6, 5, 10),
    interval: 1,
    startAutomatically:false
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
        Using Hooks with Start and End Button.
        <br/>
        
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10
        }}
      >
        <button onClick={()=>start()}>Start</button>
        {moment(time2).format('HH:mm:ss')}
        <button onClick={()=>end()}>End</button>
        </div>
      </div>
    </div>
  )
}

export default App
