import React from "react"
import "./SubmitCancelSection";
import ButtonComponent from "./ButtonStyle";

const SubmitCancelSection = ({clearFields, submitForm}) =>
    <div className="row form-group">
        <div className="col-3 "></div>

        <span className="col-9">
            <ButtonComponent

                buttonContent={"Save Changes"}
                onClickEventHandler={() => submitForm()}
                classes={"btn btn-info my-2 mr-2"}
                displayStyle={"inline-block"}/>
            <ButtonComponent

                classes={"btn btn-info my-2 mr-2"}
                buttonContent={"Cancel"}
                displayStyle={"inline-block"}/>

            <ButtonComponent

                onClickEventHandler={clearFields}
                classes={"btn btn-info my-2"}
                buttonContent={"Refresh"}
                displayStyle={"inline-block"}/>
        </span>

    </div>;

export default SubmitCancelSection;
