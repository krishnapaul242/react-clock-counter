# react-clock-counter

> This library provides a hook to create a counter with custom datetime and update the clock on provided interval.

[![NPM](https://img.shields.io/npm/v/react-clock-counter.svg)](https://www.npmjs.com/package/react-clock-counter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clock-counter
```

## Usage with provided component.

```tsx
import React, { Component } from 'react'

import { ClockCounter } from 'react-clock-counter'

class Example extends Component {
  render() {
    return <ClockCounter />
  }
}
```

## Usage with hook

```tsx
import React from 'react';
import { useClockCounter } from 'react-clock-counter'
function Example() {
    const {time} = useClockCounter();
    return <div>{time.toString()}</div>
}
```

## License

MIT © [krishnapaul242](https://github.com/krishnapaul242)
