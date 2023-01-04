import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import PostList from '../components/post/PostList';

import styled from "styled-components";

const PostListPage = () => {

  const MarginRightSpan = styled.span`
    margin-right : 15px;
    font-size: 1.3rem;
  `;

  const paramCity = "서울";
  const categoryList = [
    "사무용품",
    "자전거",
    "일상용품1",
    "일상용품2",
    "일상용품3",
    "일상용품4",
    "일상용품5",
    "일상용품6",
    "일상용품7",
  ]

    return (
        <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {paramCity}
              <Typography align="center" color="text.secondary" paragraph>
                {categoryList.map((category, index) => (
                    <MarginRightSpan>
                      #{category} 
                    </MarginRightSpan>
                      ))}
              </Typography>
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <PostList />
        </Container>
      </main>
    );
}

export default PostListPage;