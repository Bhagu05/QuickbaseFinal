import React from "react"

const Label = ({setRef,inputChanged}) =>
    <div className="row form-group py-2">
        <div className="col-3">
            <label
                className="col-form-label"
                htmlFor="salesRegionInput">
                Label
            </label>
        </div>
        <div className="col-9">
            <input
                ref={setRef}
                onChange={inputChanged}
                className="form-control"
                placeholder="For eg. sales region"
                id="salesRegionInput"/>
        </div>
    </div>;

export default Label;
