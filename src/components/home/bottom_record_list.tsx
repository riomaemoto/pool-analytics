import {
  BallsMissedLeftState,
  BallsMissedRightState,
  BallsPocketedLeftState,
  BallsPocketedRightState,
  KickingErrorsLeftState,
  KickingErrorsRightState,
  SafeteyErrorsLeftState,
  SafeteyErrorsRightState,
  UnforcedErrorsLeftState,
  UnforcedErrorsRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/record_item";

export const BottomRecoredList = () => {
  return (
    <>
      <RecordItem
        hasPercent
        title="Balls Pocket Pocketed"
        leftState={BallsPocketedLeftState}
        rightState={BallsPocketedRightState}
      />
      <RecordItem
        hasPercent
        title="Balls Missed"
        leftState={BallsMissedLeftState}
        rightState={BallsMissedRightState}
      />
      <RecordItem
        hasPercent
        title="Unforced Errors"
        leftState={UnforcedErrorsLeftState}
        rightState={UnforcedErrorsRightState}
      />
      <RecordItem
        hasPercent
        title="Safety Errors"
        leftState={SafeteyErrorsLeftState}
        rightState={SafeteyErrorsRightState}
      />
      <RecordItem
        hasPercent
        title="Kicking Errors"
        leftState={KickingErrorsLeftState}
        rightState={KickingErrorsRightState}
      />
    </>
  );
};
