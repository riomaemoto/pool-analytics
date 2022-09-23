import { Break } from "../components/home/break";
import { LongestGameWinningStreak } from "../components/home/longest_game_winning_streak";
import { InGameStats } from "../components/home/in_game_stats";
import { BallsPocketed } from "../components/home/balls_pocketed";
import { AccuStat } from "../components/home/accu_stat";
import { TotalScore } from "../components/home/total_score";
import { ECenter, EContainer } from "../components/common/styles";
import { CommonItems } from "../components/common/record_item";
import {
  BallMadeOnBreakLeftState,
  BallMadeOnBreakRightState,
  BallsMissedLeftState,
  BallsMissedRightState,
  BreakandRunLeftState,
  BreakandRunRightState,
  ConsecutiveBreakandRunLeftState,
  ConsecutiveBreakandRunRightState,
  dryBreakCountLeftState,
  dryBreakCountRightState,
  KickingErrorsLeftState,
  KickingErrorsRightState,
  SafeteyErrorsLeftState,
  SafeteyErrorsRightState,
  scoreLeftState,
  scoreRightState,
  ScratchLeftState,
  ScratcRightState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  totalBreaksLeftState,
  totalBreaksRightState,
  UnforcedErrorsLeftState,
  UnforcedErrorsRightState,
} from "../global/globalState";

export const Home = () => {
  const topStateList = [
    {
      title: "Game Score",
      left: scoreLeftState,
      right: scoreRightState,
      hasPercentage: false,
    },
    {
      title: "Total Break",
      left: totalBreaksLeftState,
      right: totalBreaksRightState,
      hasPercentage: false,
    },
    {
      title: "Dry Breaks",
      left: dryBreakCountLeftState,
      right: dryBreakCountRightState,
      hasPercentage: true,
    },
    {
      title: "Scratches on Break",
      left: ScratchLeftState,
      right: ScratcRightState,
      hasPercentage: true,
    },
    {
      title: "Ball Made on Break",
      left: BallMadeOnBreakLeftState,
      right: BallMadeOnBreakRightState,
      hasPercentage: true,
    },
    {
      title: "Shot After The Break",
      left: ShotAfterBreakLeftState,
      right: ShotAfterBreakRightState,
      hasPercentage: true,
    },
  ];

  const centerStateList = [
    {
      title: "Break and Run",
      left: BreakandRunLeftState,
      right: BreakandRunRightState,
      hasPercentage: false,
    },
    {
      title: "Consecutive Break and Runs",
      left: ConsecutiveBreakandRunLeftState,
      right: ConsecutiveBreakandRunRightState,
      hasPercentage: true,
    },
  ];

  const bottomStateList = [
    {
      title: "Balls Missed",
      left: BallsMissedLeftState,
      right: BallsMissedRightState,
      hasPercentage: false,
    },
    {
      title: "Unforced Errors",
      left: UnforcedErrorsLeftState,
      right: UnforcedErrorsRightState,
      hasPercentage: false,
    },
    {
      title: "Safety Errors",
      left: SafeteyErrorsLeftState,
      right: SafeteyErrorsRightState,
      hasPercentage: false,
    },
    {
      title: "Kicking Errors",
      left: KickingErrorsLeftState,
      right: KickingErrorsRightState,
      hasPercentage: false,
    },
  ];
  return (
    <>
      <ECenter>
        <EContainer>
          <Break />
          {topStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}
          <br />
          {centerStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}
          <br />
          <LongestGameWinningStreak />
          <br />
          <InGameStats />
          <TotalScore />
          <BallsPocketed />
          {bottomStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}
          <br />
          <AccuStat />
        </EContainer>
      </ECenter>
    </>
  );
};
