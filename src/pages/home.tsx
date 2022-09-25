import { Box, Center } from "@chakra-ui/react";
import { CenterRecordList } from "../components/home/center_record_list";
import { TotalScore } from "../components/home/total_score";
import { InGameStats } from "../components/home/in_game_stats";
import { PlayerName } from "../components/home/player_name";
import { TopRecordList } from "../components/home/top_record_list";
import { AccuStats } from "../components/home/accu_stats";
import { BottomRecoredList } from "../components/home/bottom_record_list";

export const Home = () => {
  return (
    <>
      <Center bg={{ base: "white", md: "gray.100" }}>
        <Box p={{ base: "80px 100px 80px 600px", md: "80px 320px 80px 280px" }}>
          <PlayerName />
          <TopRecordList />
          <CenterRecordList />
          <InGameStats />
          <TotalScore />
          <BottomRecoredList />
          <AccuStats />
        </Box>
      </Center>
    </>
  );
};
