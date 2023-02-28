import { darken } from 'polished'
import { useMemo } from 'react'
import * as S from './styled'

type BadComponentPropsType = {
  color?: string
}

export const BadComponent: React.FC<BadComponentPropsType> = ({ color = '#000', ...props }) => {
  const darkenedColor = useMemo(() => {
    if (!color) {
      return color
    }
    return (darken(0.3, color))
  }, [])

  return (
    <div>
      <S.ColorContainer>
        <span>Barva: </span>
        <div style={{ backgroundColor: darkenedColor, height: 8, width: 8, borderRadius: '50%' }} />
      </S.ColorContainer>
        </div>
    )
}