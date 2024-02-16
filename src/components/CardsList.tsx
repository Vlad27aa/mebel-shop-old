import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import colors from "../data/colors"
import { useAppDispatch, useAppSelector } from "../hooks"
import { addToBasket } from "../redux/slices/shopSlice"

const CardsList = () => {
  const dispatch = useAppDispatch()
  const shop = useAppSelector((state) => state.shop.shop)

  return (
    <div className=" flex flex-wrap gap-6 place-content-center mx-4">
      {shop?.items.item &&
        shop?.items.item.map((el) => (
          // CARD
          <div className="" key={el.name}>
            <Card
              sx={{
                width: 300,
                opacity: el.stock_quantity ? 1 : 0.3,
              }}
              // onClick={() => console.log(el)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    typeof el.picture === "string" ? el.picture : el.picture[0]
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

                  {/* CARD_STOCK */}
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      textAlign: !!el.stock_quantity ? "inherit" : "center",
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
                    onClick={() => dispatch(addToBasket(el))}
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
          </div>
        ))}
    </div>
  )
}

export default CardsList
