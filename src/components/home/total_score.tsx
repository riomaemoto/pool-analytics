import { useRecoilValue } from "recoil";
import {
  BallsPocketedLeftState,
  BallsPocketedRightState,
  scoreLeftState,
  scoreRightState,
} from "../../global/globalState";
import { EFlex2, ENumber, ETextBox, ETextline } from "../common/styles";

export const TotalScore = () => {
  // getter
  const scoreLeft = useRecoilValue(scoreLeftState);
  const scoreRight = useRecoilValue(scoreRightState);
  const BallspocketedLeft = useRecoilValue(BallsPocketedLeftState);
  const BallspocketedRight = useRecoilValue(BallsPocketedRightState);

  // ---------------------------- TotalScore -----------------------------

  const aaa = scoreLeft * 9;
  const bbb = scoreRight * 9;

  const TotalScore = aaa + bbb;

  // ---------------------------- BallsLeft ---------------------------------

  const BallsLeft = TotalScore - BallspocketedLeft - BallspocketedRight;

  return (
    <EFlex2>
      <ENumber></ENumber>
      <ENumber>{BallsLeft}</ENumber>
      <ETextBox>
        <ETextline>{TotalScore}</ETextline>
      </ETextBox>
      <ENumber>{BallsLeft}</ENumber>
      <ENumber></ENumber>
    </EFlex2>
  );
};
