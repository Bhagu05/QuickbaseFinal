import React from "react"

const ButtonStyle = ({buttonContent,onClickEventHandler,classes,
                             displayStyle}) =>
    <div
        style = {{display: displayStyle}}>
        <button
            className={classes}
            onClick={onClickEventHandler}>
            {buttonContent}
        </button>
    </div>;

export default ButtonStyle;
