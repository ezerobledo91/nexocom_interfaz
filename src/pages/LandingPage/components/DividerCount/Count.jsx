import React, { useEffect } from 'react'
import { useTransform, motion, animate, useMotionValue } from 'framer-motion'
const Count = ({ value, duration }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  useEffect(() => {
    const animation = animate(count, value, { duration: duration })
    return animation.stop //eslint-disable-next-line
  }, [])

  return <motion.div>{rounded}</motion.div>
}

export default Count
