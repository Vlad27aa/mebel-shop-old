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
// import db from "./data/db"
// console.log(db)

// interface ICategory {
//   category: string[]
// }
// interface ICurrencies {
//   currency: string
// }

// interface IItem {
//   brand: string
//   categoryId: number
//   currencyId: string
//   description: string
//   manufacturer_warranty: number
//   name: string
//   param: any[]
//   picture: string[]
//   price: number
//   stock_quantity: number
//   url: string
//   vendor: string
//   vendorCode: string
//   listPrice?: number
// }
// interface IItems {
//   item: IItem[]
// }
// interface IShop {
//   categories: ICategory
//   currencies: ICurrencies
//   items: IItems
//   name: string
//   param: string
//   url: string
// }

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
  // const [shop, setShop] = useState<IShop>(db)
  // console.log(shop)

  const [filteredShop, setFilteredShop] = useState<IItem[] | undefined>(
    undefined
  )

  // console.log(filteredShop)

  // const [ides, setIdes] = useState<number[]>([])
  // console.log(
  //   ides.sort(function (a, b) {
  //     return a - b
  //   }).length
  // )

  // shop?.items.item &&
  //   shop?.items.item.map(
  //     (item) =>
  //       !ides.includes(item.categoryId) &&
  //       setIdes(!!shop?.items.item.length ? [...ides, item.categoryId] : [0])
  //   )

  const [category, setCategory] = useState(categories[2])
  // console.log(filteredShop)

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

  useEffect(() => {
    // axios
    // .get("https://exchangeapi-x56j.onrender.com/yml_catalog")
    // .then(function (response) {
    //   setShop(response.data.shop)
    //   setCategory(response.data.shop?.items.item[0].param[0])
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    // .finally(() => console.log('Loaded'))
  }, [])

  return (
    <div className="App">
      <Container>
        <Test />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Images />
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

        {shop && (
          <Fade timeout={1000} in>
            <Stack
              spacing={2}
              mt={4}
              mb={4}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              sx={{ border: 1 }}
            >
              {shop?.items.item &&
                // CARDS
                filteredShop?.map((el) => (
                  <Card
                    sx={{
                      maxWidth: 250,
                      // marginLeft: "auto",
                      // marginRight: "auto",
                      opacity: el.stock_quantity ? 1 : 0.3,
                    }}
                    key={el.name}
                    onClick={() => console.log(el)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        // image={el.picture[0]}
                        image={
                          typeof el.picture === "string"
                            ? el.picture
                            : el.picture[0]
                        }
                        alt={el.name}
                        sx={{ objectFit: "contain" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          // sx={{ height: 60 }}
                        >
                          {el.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          // sx={{ height: 60 }}
                        >
                          {`Категорія ${el.categoryId} - ${el.param[0]}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          // sx={{ height: 60 }}
                        >
                          {`${el.vendorCode}`}
                        </Typography>
                        {el.stock_quantity ? (
                          <Typography gutterBottom variant="h6" component="div">
                            В наявності: {el.stock_quantity} шт
                          </Typography>
                        ) : (
                          <Typography gutterBottom variant="h6" component="div">
                            Немає в наявності
                          </Typography>
                        )}
                        {!!el.stock_quantity && (
                          <div>
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
        {!filteredShop?.length && (
          <Typography variant="h5" component="div">
            Немає!
          </Typography>
        )}
      </Container>
    </div>
  )
}

export default App
