import { useRef, useState } from 'react'
import { BadComponent } from '~/components/exhaustiveDependencies/BadComponent'
import { GoodComponent } from '~/components/exhaustiveDependencies/GoodComponent'
import { AppLayout } from '~/components/layout/AppLayout'

type ExhaustiveDependenciesProps = {}
export const ExhaustiveDependencies: React.FC<ExhaustiveDependenciesProps> = (
  props,
) => {
  const [goodColor, setGoodColor] = useState<string | undefined>('#000')
  const [badColor, setBadColor] = useState<string | undefined>('#000')

  const badRef = useRef<HTMLInputElement>(null)
  const goodRef = useRef<HTMLInputElement>(null)

  const onGoodClick = () => {
    setGoodColor(goodRef.current?.value)
  }
  const onBadClick = () => {
    setBadColor(badRef.current?.value)
  }

  return <AppLayout>
    <div>
      <h2>
        Bad component
      </h2>
      <div>
        <input type='text' ref={badRef} />
        <BadComponent color={badColor} />
        <button onClick={onBadClick}>Vykresli ztmavenou barvičku</button>
      </div>
    </div>
    <div>

      <h2>
        Good component
      </h2>
      <div>
        <input type='text' ref={goodRef} />
        <GoodComponent color={goodColor} />
        <button onClick={onGoodClick}>Vykresli ztmavenou barvičku</button>
      </div>
    </div>
  </AppLayout>
}
