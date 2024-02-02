import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Container,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import "./App.css"
import Test from "./components/Test"
import Images from "./components/Images"
import colors from "./data/colors"
import { useState, useEffect } from "react"

import { IItem, IShop } from "./data/interfaces"
import db from "./data/db"
import Header from "./components/Header/Header"

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
        {/* <Test /> */}

        {/* GREETINGS */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        > */}
        {/* GREETINGS_IMAGES */}
        {/* <Images /> */}

        {/* GREETINGS_RIGHT_SECTION */}
        {/* <Fade timeout={1200} in>
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
        </Box> */}

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
                      width: 300,
                      opacity: el.stock_quantity ? 1 : 0.3,
                    }}
                    key={el.name}
                    onClick={() => console.log(el)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={
                          typeof el.picture === "string"
                            ? el.picture
                            : el.picture[0]
                        }
                        alt={el.name}
                        sx={{ objectFit: "contain" }}
                      />
                      <CardContent sx={{ paddingY: 0 }}>
                        {/* CARD_TITLE */}
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ textAlign: "center", height: 96, marginTop: 1 }}
                        >
                          {el.name}
                        </Typography>

                        {/* CARD_CODE */}
                        {/* <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                        >
                          {`${el.vendorCode}`}
                        </Typography> */}

                        {/* CARD_STOCK */}
                        <Typography
                          // gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            textAlign: !!el.stock_quantity
                              ? "inherit"
                              : "center",
                            marginBottom: !!el.stock_quantity ? 0.5 : 4,
                          }}
                        >
                          {el.stock_quantity
                            ? `В наявності: ${el.stock_quantity} шт`
                            : "Немає в наявності"}
                        </Typography>

                        {/* CARD_PRICES */}
                        {!!el.stock_quantity && (
                          <Box
                            sx={{
                              display: "flex",
                            }}
                          >
                            {/* CARD_PRICES_LIST */}
                            {el.listPrice && (
                              <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                                color="text.secondary"
                                sx={{
                                  textDecoration: "line-through",
                                  textDecorationColor: "rgba(0, 0, 0, 0.6)",
                                  marginRight: 1,
                                }}
                              >
                                {el.listPrice.toFixed()}
                              </Typography>
                            )}

                            {/* CARD_PRICES_MAIN */}
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{
                                color: el.listPrice ? "red" : "",
                                fontWeight: 500,
                              }}
                            >
                              {el.price.toFixed()} грн
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </CardActionArea>
                    {!!el.stock_quantity && (
                      <CardActions sx={{ paddingX: 2, paddingBottom: 2 }}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: colors.dark,
                            ":hover": { backgroundColor: colors.dark },
                          }}
                          onClick={() => console.log("clicked")}
                        >
                          <ShoppingCartOutlinedIcon
                            fontSize="small"
                            sx={{ marginRight: 1 }}
                          />
                          Купити
                        </Button>
                      </CardActions>
                    )}
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
