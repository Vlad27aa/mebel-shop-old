import { Box, Paper, Slide, useScrollTrigger } from "@mui/material"

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const TopFilterMenu = () => {
  return (
    <HideOnScroll>
      <Paper
        elevation={3}
        sx={{
          position: "sticky",
          top: 64,
          zIndex: 1,
          paddingTop: 4,
          paddingBottom: 4,
          marginBottom: 4,
        }}
      >
        I am Top Fiter
      </Paper>
    </HideOnScroll>
  )
}

export default TopFilterMenu
