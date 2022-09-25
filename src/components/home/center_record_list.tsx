import React from "react";
import {
  BreakandRunLeftState,
  BreakandRunRightState,
  ConsecutiveBreakandRunLeftState,
  ConsecutiveBreakandRunRightState,
  LongestGameWinningStreakLeftState,
  LongestGameWinningStreakRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/record_item";

export const CenterRecordList = () => {
  return (
    <>
      <br />
      <RecordItem
        title="Break and Run"
        leftState={BreakandRunLeftState}
        rightState={BreakandRunRightState}
      />
      <RecordItem
        hasPercent
        title="Consecutive Break and Runs"
        leftState={ConsecutiveBreakandRunLeftState}
        rightState={ConsecutiveBreakandRunRightState}
      />
      <br />
      <RecordItem
        title="Longest Game Winning Streak"
        leftState={LongestGameWinningStreakLeftState}
        rightState={LongestGameWinningStreakRightState}
      />
      <br />
    </>
  );
};
