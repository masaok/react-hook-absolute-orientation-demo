// import { Canvas } from '@react-three/fiber'

import useAbsoluteOrientationSensor from 'react-hook-absolute-orientation'

// import Box from '../three/Box'

const onUpdate = (gyro) => {
  console.log('NEW GYRO INFO: ', gyro)
}

const Demo = (props) => {
  const quaternion = useAbsoluteOrientationSensor(
    { frequency: 3, referenceFrame: 'device' },
    onUpdate // named function reference is required
  )

  return (
    <div>
      <div>Absolute Orientation Sensor Hook Demo</div>
      <pre>{JSON.stringify(quaternion, null, 2)}</pre>
      <div>
        Rounded to 0.01
        {quaternion.map((item, index) => {
          return <div key={index}>{Math.round(100 * item) / 100}</div>
        })}
      </div>
      <div>
        Rounded to 0.1
        {quaternion.map((item, index) => {
          return <div key={index}>{Math.round(10 * item) / 10}</div>
        })}
      </div>
    </div>
  )
}

export default Demo
