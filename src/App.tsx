import { Box, Button, Container, Fade, Typography } from '@mui/material'
import './App.css'
import Test from './components/Test'
import Images from './components/Images'
import colors from './data/colors'
import { hover } from '@testing-library/user-event/dist/hover'

function App() {
  return (
    <div className="App">
      <Container>
        <Test />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Images />
          <Fade timeout={1200} in>
            <Box
              sx={{
                maxWidth: 500,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontFamily: 'Bad Script',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: 8,
                  color: colors.dark,
                  textAlign: 'center',
                  fontSize: { xs: 60 },
                }}
              >
                Магазин меблів з безкоштовною доставкою по Україні
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  // letterSpacing: 1,
                  color: colors.brown,
                  borderColor: colors.brown,
                  marginTop: 4,
                  '&:hover': {
                    backgroundColor: colors.light,
                    border: 1,
                    borderColor: colors.brown,
                  },
                }}
              >
                Перейти до каталогу
              </Button>
            </Box>
          </Fade>
        </Box>
      </Container>
    </div>
  )
}

export default App
