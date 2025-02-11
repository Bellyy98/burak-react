import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import {
  CardContent,
  CssVarsProvider,
  Divider,
  IconButton,
  Typography,
} from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */

const topUsersRetriever = createSelector(retrievTopUsers, 
    (topUsers) => ({topUsers,}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            {topUsers.length !== 0 ? (
              topUsers.map((member: Member) => {
                const imagePath = `${serverApi}/${member.memberImage}`;
                return (
                  <CssVarsProvider>
                    <Card
                      key={member._id}
                      variant="outlined"
                      sx={{ width: 305, marginRight: "10px" }}
                    >
                      <CardOverflow>
                        <AspectRatio className="membeer-image1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" sx={{ bgcolor: "white" }}>
                        <Typography
                          level="h2"
                          textAlign={"center"}
                          fontSize={"lg"}
                          textColor={"0,0,0"}
                          className="member-nickname"
                        >
                          {member.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data"> No Active Users!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
