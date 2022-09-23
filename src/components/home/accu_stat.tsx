import { useRecoilValue } from "recoil";
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
import { EFlexBottom, ENumber, ETextBox, ETextline } from "../common/styles";

export const AccuStat = () => {
  // getter
  const MissedLeft = useRecoilValue(BallsMissedLeftState);
  const UnforcedLeft = useRecoilValue(UnforcedErrorsLeftState);
  const SafetyLeft = useRecoilValue(SafeteyErrorsLeftState);
  const KickingLeft = useRecoilValue(KickingErrorsLeftState);
  const BallspocketedLeft = useRecoilValue(BallsPocketedLeftState);

  const MissedRight = useRecoilValue(BallsMissedRightState);
  const UnforcedRight = useRecoilValue(UnforcedErrorsRightState);
  const SafetyRight = useRecoilValue(SafeteyErrorsRightState);
  const KickingRight = useRecoilValue(KickingErrorsRightState);
  const BallspocketedRight = useRecoilValue(BallsPocketedRightState);

  // ---------------------------- ACCUStatLeft -----------------------------

  const ACCUStatLeft =
    (MissedLeft + UnforcedLeft + SafetyLeft + KickingLeft) / BallspocketedLeft -
    1;

  const PercentageACCUStatLeft = Math.round(ACCUStatLeft * 1000) / 1000;

  // ---------------------------- ACCUStatRight -----------------------------

  const ACCUStatRight =
    (MissedRight + UnforcedRight + SafetyRight + KickingRight) /
      BallspocketedRight -
    1;

  const PercentageACCUStatRight = Math.round(ACCUStatRight * 1000) / 1000;

  return (
    <EFlexBottom>
      <ENumber></ENumber>
      <ENumber>{PercentageACCUStatLeft || 0}</ENumber>
      <ETextBox>
        <ETextline>ACCU-STAT</ETextline>
      </ETextBox>
      <ENumber>{PercentageACCUStatRight || 0}</ENumber>
      <ENumber></ENumber>
    </EFlexBottom>
  );
};
