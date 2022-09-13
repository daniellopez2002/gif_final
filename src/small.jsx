import React, {memo} from "react";

export const Small = memo(
    ({value})=>{
        console.log("Memo.")
        return(
            <small>{value}</small>
        )
    })