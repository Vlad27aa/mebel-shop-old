import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import axios from "axios"
import "./App.css"
import Test from "./components/Test"
import Images from "./components/Images"
import colors from "./data/colors"
import { useState, useEffect } from "react"

import { IItem, IShop } from "./data/interfaces"
import db from "./data/db"

const categories: string[] = [
  "Столи обідні",
  "Журнальні столи",
  "Стільці",
  "Крісла",
  "Дивани",
  "Акції",
  "Для вітальні",
]

function App() {
  const shop: IShop = db

  const [filteredShop, setFilteredShop] = useState<IItem[] | undefined>(
    undefined
  )
  const [category, setCategory] = useState(categories[2])

  useEffect(() => {
    setFilteredShop(
      shop?.items.item
        .filter((el) => el.param[0] === category)
        .filter((el) => !!el.stock_quantity)
        .concat(
          shop?.items.item
            .filter((el) => el.param[0] === category)
            .filter((el) => !el.stock_quantity)
        )
    )
  }, [category])

  return (
    <div className="App">
      <Container>
        {/* HEADER */}
        <Test />

        {/* GREETINGS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* GREETINGS_IMAGES */}
          <Images />

          {/* GREETINGS_RIGHT_SECTION */}
          <Fade timeout={1200} in>
            <Box
              sx={{
                maxWidth: 500,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontFamily: "Bad Script",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: 8,
                  color: colors.dark,
                  textAlign: "center",
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
                  "&:hover": {
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

        {/* CATEGORIES_BUTTONS */}
        {shop && (
          <Fade timeout={1000} in>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              mt={4}
              mb={4}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              sx={{
                maxWidth: "max-content",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {categories.map((cat: string) => (
                <Button
                  key={cat}
                  variant={category === cat ? "contained" : "outlined"}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </Stack>
          </Fade>
        )}

        {/* CARDS */}
        {shop && (
          <Fade timeout={1000} in>
            <Stack
              spacing={2}
              direction="row"
              marginLeft="auto"
              marginRight="auto"
              useFlexGap
              flexWrap="wrap"
              sx={{ maxWidth: "max-content" }}
            >
              {shop?.items.item &&
                filteredShop?.map((el) => (
                  // CARD
                  <Card
                    sx={{
                      maxWidth: 250,
                      opacity: el.stock_quantity ? 1 : 0.3,
                    }}
                    key={el.name}
                    onClick={() => console.log(el)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image={
                          typeof el.picture === "string"
                            ? el.picture
                            : el.picture[0]
                        }
                        alt={el.name}
                        sx={{ objectFit: "contain" }}
                      />
                      <CardContent>
                        {/* CARD_TITLE */}
                        <Typography gutterBottom variant="h5" component="div">
                          {el.name}
                        </Typography>

                        {/* CARD_CODE */}
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                        >
                          {`${el.vendorCode}`}
                        </Typography>

                        {/* CARD_STOCK */}
                        <Typography gutterBottom variant="h6" component="div">
                          {el.stock_quantity
                            ? `В наявності: ${el.stock_quantity} шт`
                            : "Немає в наявності"}
                        </Typography>

                        {/* CARD_PRICES */}
                        {!!el.stock_quantity && (
                          <div>
                            {/* CARD_PRICES_LIST */}
                            {el.listPrice && (
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                sx={{ textDecoration: "line-through" }}
                              >
                                {el.listPrice} грн
                              </Typography>
                            )}

                            {/* CARD_PRICES_MAIN */}
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{ color: el.listPrice ? "red" : "" }}
                            >
                              {el.price} грн
                            </Typography>
                          </div>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
            </Stack>
          </Fade>
        )}
      </Container>
    </div>
  )
}

export default App
