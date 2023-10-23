import React from "react"
import Choices from "./Choices";
import DeleteChoice from "./DeleteChoice";
//import DeleteChoice from "./DeleteChoice";

const InsertChoice = ({titleChanged, addToChoices, deleteFromChoices, choices,newChoice}) =>
    <div className="row form-group py-2">
        <div className="col-3">
            <label
                className="col-form-label">
                Choices
            </label>
        </div>
        <div className="col-9">
            <div className="card narrow-card">
                <div className="card-header">
                    <Choices
                        newChoice={newChoice}
                        titleChanged={titleChanged}
                        addChoice={addToChoices}/>
                </div>
                <div className="card-body scroll">
                    <p className="small text-muted"><b> Total choices: {choices.length}</b>
                    <br className="d-md-none d-lg-none d-sm-none d-inline"/> (Max. allowed = 50)</p>
                    <ul className="list-group">
                        {choices.map(choice =>
                            <DeleteChoice
                                choice={choice}
                                key={choice.id}
                                deleteChoice={deleteFromChoices}/>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>;

export default InsertChoice
