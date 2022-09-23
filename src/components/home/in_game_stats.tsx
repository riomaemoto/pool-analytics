import { EFlex3, ENumber, ETextBox, ETextline } from "../common/styles";

export const InGameStats = () => {
  return (
    <>
      <EFlex3>
        <ENumber></ENumber>
        <ENumber></ENumber>
        <ETextBox>
          <ETextline>In Game Stats</ETextline>
        </ETextBox>
        <ENumber></ENumber>
        <ENumber></ENumber>
      </EFlex3>
    </>
  );
};
