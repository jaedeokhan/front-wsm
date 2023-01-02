import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import userEvent from '@testing-library/user-event';

const PostList = () => {

    const post = {
      userId : 'hjaedeok',
      category : '사무용품',
      createDateYmd : '2023-01-02',
      title : '클립 나눠요~클립 나눠요~클립 나눠요~',
      location : '서울 영등포구'
    }

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor : '#E2E2E2' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <IconButton
                      size="large"
                      aria-label="user-icon"
                      color="inherit"
                    >
                      <PersonIcon />
                    </IconButton>
                    <span>{post.userId}</span>
                    <Typography align="right">
                      {post.createDateYmd}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                      height : 250,
                      pt: '0.00%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent>
                  <Typography align="left">
                      {post.category}
                  </Typography>
                  <Typography align="right">
                    {post.location}
                  </Typography>
                  <Typography variant="h4">
                    {post.title}
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>            
    );
};

export default PostList;