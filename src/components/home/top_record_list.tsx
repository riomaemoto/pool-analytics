import React from "react";
import {
  BallMadeOnBreakLeftState,
  BallMadeOnBreakRightState,
  DryBreakCountLeftState,
  DryBreakCountRightState,
  ScoreLeftState,
  ScoreRightState,
  ScratchLeftState,
  ScratcRightState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  TotalBreaksLeftState,
  TotalBreaksRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/record_item";

export const TopRecordList = () => {
  return (
    <>
      <RecordItem
        title="Game Score"
        leftState={ScoreLeftState}
        rightState={ScoreRightState}
      />
      <RecordItem
        title="Total Break"
        leftState={TotalBreaksLeftState}
        rightState={TotalBreaksRightState}
      />
      <RecordItem
        hasPercent
        title="Dry Breaks"
        leftState={DryBreakCountLeftState}
        rightState={DryBreakCountRightState}
      />
      <RecordItem
        hasPercent
        title="Scratches on Break
        "
        leftState={ScratchLeftState}
        rightState={ScratcRightState}
      />
      <RecordItem
        hasPercent
        title="Ball Made on Break"
        leftState={BallMadeOnBreakLeftState}
        rightState={BallMadeOnBreakRightState}
      />
      <RecordItem
        hasPercent
        title="Shot After The Break"
        leftState={ShotAfterBreakLeftState}
        rightState={ShotAfterBreakRightState}
      />
    </>
  );
};
