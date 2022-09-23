import { ChangeEvent, FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { leftInput, rightInput } from "../../global/globalState";
import {
  ENumber,
  ETextBox,
  ETextline,
  TopFlex,
  InputBox,
} from "../common/styles";

type Props = {
  isRight?: boolean;
};

const InputForm: FC<Props> = ({ isRight }) => {
  // getter
  const leftGetter = useRecoilValue(leftInput);
  const rightGetter = useRecoilValue(rightInput);
  // setter
  const leftSetter = useSetRecoilState(leftInput);
  const rightSetter = useSetRecoilState(rightInput);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    if (isRight) {
      rightSetter(item);
    } else {
      leftSetter(item);
    }
  };

  return (
    <InputBox
      type="text"
      className="inputText"
      id="name"
      name="name"
      placeholder="   Full Name"
      value={isRight ? rightGetter : leftGetter}
      onChange={handleChange}
    />
  );
};

export const Break = () => {
  return (
    <TopFlex>
      <InputForm />
      <ENumber>First breaks</ENumber>
      <ETextBox>
        <ETextline>Break</ETextline>
      </ETextBox>
      <ENumber>Odd breaks</ENumber>
      <InputForm isRight />
    </TopFlex>
  );
};
