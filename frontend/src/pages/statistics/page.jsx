import React, { useState, useEffect } from "react";
import { getStatistics } from "../../routes/statistics.routes";

import { NavBar } from "../../components/NavBar/NavBar";
import { Box } from "@mui/material"
import { Card, CardContent, Stack, Typography, Table, Sheet } from "@mui/joy"

const Statistics = () => {

  const [statistics, setStatistics] = useState(null);

  // Load statistics from backend
  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const statistics = await getStatistics();
        setStatistics(statistics.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadStatistics();
  }, []);

  const tableRow = (rank, title, likes) => {
    return (
      <tr>
        <td>{rank}</td>
        <td>{title}</td>
        <td>{likes}</td>
      </tr>
    )
  }

  return (
    <Box>

      <NavBar />

      <br />

      <Stack direction='row' spacing={2} justifyContent={'center'}>
        <Card sx={{ width: '25vw', height: '8rem', backgroundColor: '#d1fae5' }}>
          <CardContent>
            <Stack direction='row' justifyContent='flex-start' alignItems={'center'} spacing={2}>
              <Typography level="title-lg">Total Users:</Typography>
              <Typography level="h1" textColor={'#059669'}>{statistics?.total_users || '00'}</Typography>
            </Stack>
            <Typography>Total Users generated so far ...</Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: '25vw', height: '8rem', backgroundColor: '#ede9fe' }}>
          <CardContent>
            <Stack direction='row' justifyContent='flex-start' alignItems={'center'} spacing={2}>
              <Typography level="title-lg">Total Blogs:</Typography>
              <Typography level="h1" textColor={'#7c3aed'}>{statistics?.total_blogs || '00'}</Typography>
            </Stack>
            <Typography>Total Blogs generated so far ...</Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: '25vw', height: '8rem', backgroundColor: '#ffe4e6' }}>
          <CardContent>
            <Stack direction='row' justifyContent='flex-start' alignItems={'center'} spacing={2}>
              <Typography level="title-lg">Total Likes:</Typography>
              <Typography level="h1" textColor={'#e11d48'}>{statistics?.total_likes || '00'}</Typography>
            </Stack>
            <Typography>Total Likes generated so far ...</Typography>
          </CardContent>
        </Card>
      </Stack>

      <br />

      <Card sx={{ width: '77.3%', height: '24rem', margin: 'auto', backgroundColor: '#e0f2fe' }}>
        <CardContent>
          <Typography level="title-lg" textColor={'#0284c7'} paddingLeft={'3px'}>Most Liked Blogs</Typography>

          <br />

          <Sheet style={{ borderRadius: '8px' }}>
            <Table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Blog Title</th>
                  <th>Likes</th>
                </tr>
              </thead>

              <tbody>
                {statistics && statistics?.most_liked_blogs?.length > 0 && statistics.most_liked_blogs.map((blog, index) => tableRow(index + 1, blog.title, blog.likes))}
              </tbody>

            </Table>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Statistics;