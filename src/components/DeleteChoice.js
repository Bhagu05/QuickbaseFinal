import React from "react"
import ButtonStyle from "./ButtonStyle";

const DeleteChoice = ({choice,deleteChoice}) =>
    <li className="list-group-item">
        <div className={"row"}>
            <span className={"col-8 col-sm-10"}>{choice.title}</span>
            <span className={"col-4 col-sm-2 float-right"}>
                <ButtonStyle
                    classes="btn btn-info btn-sm text-white"
                    buttonContent="✖"
                    onClickEventHandler={() => deleteChoice(choice.id)}/>
            </span>
        </div>
    </li>;

export default DeleteChoice;
