import { darken } from "polished";
import {useMemo} from "react";

type BadComponentPropsType = {
    color: string
}

export const BadComponent: React.FC<BadComponentPropsType> = (props) => {
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