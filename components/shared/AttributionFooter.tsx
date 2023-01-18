import cn from 'classnames'
import { memo } from 'react'

const AttributionFooter = ({ animationDelay = '1.5s', animationType = 'animate__bounceIn' }) => (
  <h2
    className={cn('mb-12 text-center font-fancy text-gray-500 text-sm animate__animated', animationType)}
    style={{
      animationDelay,
      animationDuration: '0.5s'
    }}
  >
    Made With <span className="text-red-600">♥</span> by&nbsp;
    <a
      href="https://riazv.me"
      className="text-blue-600 hover:text-blue-700 font-semibold"
      target="_blank"
      rel="noreferrer noopener"
    >
      Riaz V
    </a>
  </h2>
)

export default memo(AttributionFooter)
