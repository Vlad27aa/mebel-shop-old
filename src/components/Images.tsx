import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Slide, Fade } from '@mui/material'

export default function Images() {
  return (
    <Slide direction="right" in timeout={600}>
      <Fade timeout={1200} in>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Fade>
    </Slide>
  )
}

const itemData = [
  {
    img: 'https://vetromebel.com/storage/10823/conversions/653fa140b9088_tm-84-kalakatta-marmur-siriy2-preview_webp.webp',
    title: 'Bed',
  },
  {
    img: 'https://vetromebel.com/storage/7637/Kreslo_Luchiya_seryy_(1)_lule-7c.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://vetromebel.com/storage/10179/conversions/64f3aa3a19b62_%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-%D0%A1%D0%B8%D0%BB%D1%8C%D0%B2%D0%B8%D1%8F-(4)-preview_webp.webp',
    title: 'Sink',
  },
  {
    img: 'https://vetromebel.com/storage/11357/conversions/6548e7306d019_tm-89-kalakatta-mramor-chernyy1-preview_webp.webp',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://vetromebel.com/storage/10822/conversions/653f9dd203670_t-325-kasa-vayt-biliy2-preview_webp.webp',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
]
