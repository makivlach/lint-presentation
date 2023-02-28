import { useMemo } from 'react'
import { darken } from 'polished'
import * as S from './styled'

interface GoodComponentProps {
  color?: string
}

export const GoodComponent: React.FC<GoodComponentProps> = ({ color = '#000', ...props }) => {
  const darkenedColor = useMemo(() => {
    if (!color) {
      return color
    }
    return (darken(0.3, color))
  }, [color])

  return (
    <div>
      <S.ColorContainer>
        <span>Barva: </span>
        <div style={{ backgroundColor: darkenedColor, height: 8, width: 8, borderRadius: '50%' }} />
      </S.ColorContainer>
    </div>
  )
}