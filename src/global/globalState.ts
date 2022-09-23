import { atom } from "recoil";

export const leftInput = atom<string>({
  key: "leftInput",
  default: "",
});

export const rightInput = atom<string>({
  key: "rightInput",
  default: "",
});

export const scoreLeftState = atom<number>({
  key: "scoreLeftState",
  default: 0,
});
export const scoreRightState = atom<number>({
  key: "scoreRightState",
  default: 0,
});
export const totalBreaksLeftState = atom<number>({
  key: "totalBreaksLeftState",
  default: 0,
});
export const totalBreaksRightState = atom<number>({
  key: "totalBreaksRightState",
  default: 0,
});

export const dryBreakCountLeftState = atom<number>({
  key: "dryBreakCountLeftState",
  default: 0,
});
export const dryBreakCountRightState = atom<number>({
  key: "dryBreakCountRightState",
  default: 0,
});
export const ScratchLeftState = atom<number>({
  key: "ScratchLeftState",
  default: 0,
});
export const ScratcRightState = atom<number>({
  key: "ScratcRightState",
  default: 0,
});

export const BallMadeOnBreakLeftState = atom<number>({
  key: "BallMadeOnBreakLeftState",
  default: 0,
});
export const BallMadeOnBreakRightState = atom<number>({
  key: "BallMadeOnBreakRightState",
  default: 0,
});

export const ShotAfterBreakLeftState = atom<number>({
  key: "ShotAfterBreakLeftState",
  default: 0,
});
export const ShotAfterBreakRightState = atom<number>({
  key: "ShotAfterBreakRightState",
  default: 0,
});

export const BreakandRunLeftState = atom<number>({
  key: "BreakandRunLeftState",
  default: 0,
});
export const BreakandRunRightState = atom<number>({
  key: "BreakandRunRightState",
  default: 0,
});

export const ConsecutiveBreakandRunLeftState = atom<number>({
  key: "ConsecutiveBreakandRunLeftState",
  default: 0,
});
export const ConsecutiveBreakandRunRightState = atom<number>({
  key: "ConsecutiveBreakandRunRightState",
  default: 0,
});
export const LongestGameWinningStreakLeftState = atom<number>({
  key: "LongestGameWinningStreakLeftState",
  default: 0,
});
export const LongestGameWinningStreakRightState = atom<number>({
  key: "LongestGameWinningStreakRightState",
  default: 0,
});

export const BallsPocketedLeftState = atom<number>({
  key: "BallsPocketedLeftState",
  default: 0,
});
export const BallsPocketedRightState = atom<number>({
  key: "BallsPocketedRightState",
  default: 0,
});

export const BallsMissedLeftState = atom<number>({
  key: "BallsMissedLeftState",
  default: 0,
});
export const BallsMissedRightState = atom<number>({
  key: "BallsMissedRightState",
  default: 0,
});

export const UnforcedErrorsLeftState = atom<number>({
  key: "UnforcedErrorsLeftState",
  default: 0,
});
export const UnforcedErrorsRightState = atom<number>({
  key: "UnforcedErrorsRightState",
  default: 0,
});

export const SafeteyErrorsLeftState = atom<number>({
  key: "SafeteyErrorsLeftState",
  default: 0,
});
export const SafeteyErrorsRightState = atom<number>({
  key: "SafeteyErrorsRightState",
  default: 0,
});

export const KickingErrorsLeftState = atom<number>({
  key: "KickingErrorsLeftState",
  default: 0,
});
export const KickingErrorsRightState = atom<number>({
  key: "KickingErrorsRightState",
  default: 0,
});
