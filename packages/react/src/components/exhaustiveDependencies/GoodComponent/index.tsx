import {useMemo} from "react";
import { darken } from 'polished'

interface GoodComponentProps {
    color: string
    isFetching: boolean
}

export const GoodComponent: React.FC<GoodComponentProps> = (props) => {
    const darkenedColor = useMemo(() => {
        return darken(0.3, props.color)
    }, [])

    return (
        <div>
            <button>Vykresli ztmavenou barvičku</button>
            <div>
                <span>Barva: </span> <div style={{backgroundColor: darkenedColor, height: 8, width: 8, borderRadius: '50%'}} />
            </div>
        </div>
    )
}