import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const destinationSelected = useSelector(
    (state) => state.destinationStore.destinationSelected
  );

  if (destinationSelected == undefined) {
    return (
      <div className="text-center pt-4 text-warning">Select a Destination</div>
    );
  } else {
    return (
      <div className="text-center border p-3 m-3">
        <h4 className="text-success">{destinationSelected.name}</h4>
        Days Recommend : {destinationSelected.days}
        <br></br>
        Fun Fact : {destinationSelected.fact}
      </div>
    );
  }
}

export default DestinationFact;
