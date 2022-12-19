import { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import { IconCircleWrap } from './styles'

interface InconCircleProps {
  customColor?: string
  icon: ReactElement
}

export function IconCircle({ customColor, icon }: InconCircleProps) {
  const theme = useTheme()
  const iconColor = customColor || theme.palette.black

  return <IconCircleWrap iconBgColor={iconColor}>{icon}</IconCircleWrap>
}
