import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Box, Link, Avatar, Typography } from '@mui/material'
import img from './poto.jpg?url'
import code from './code.svg?url'
import db from './db.svg?url'
import api from './api.svg?url'
import server from './server-icon.svg?url'
import fotoFooter from './foto-footer.jpg?url'
import { WhatsApp, Mail } from '@mui/icons-material'

function App() {
  const head = useRef()
  const banner = useRef()
  const whatDo = useRef()
  const pendidikan = useRef()
  const pengalaman = useRef()
  const widthDo = {
    xs: '100%',
    sm: '100%',
    md: '50%',
    lg: '50%',
    xl: '25%'
  }
  const titleFontSize = {
    xs: '35px',
    sm: '35px',
    md: '45px',
    lg: '60px',
    xl: '60px'
  }
  const paddingDo = {
    xs: '30px',
    sm: '60px',
    md: '89px',
    lg: '140px',
    xl: '168px'
  }

  useGSAP(() => {
    const tm = gsap.timeline()
    tm.from('.img-head', { opacity: 0, scale: 2, duration: 1 })
      .add('label')
      .from('.link1', { opacity: 0, x: -50, duration: .5 }, 'label')
      .from('.link2', { opacity: 0, x: 50, duration: .5 }, 'label')
  }, { scope: head })

  useGSAP(() => {
    const tm = gsap.timeline()
    tm.add('label')
      .from('.text-profil', { opacity: 0, y: 50, duration: 1.5, ease: 'power4.inOut' }, 'label')
      .from('.gambar-profil', { opacity: 0, duration: 1.5, ease: 'power4.inOut' }, 'label')
      .from('.bola', { opacity: 0, duration: 2 }, 'label')
      .from('.box-do1', { opacity: 0, duration: 0.5, y: 50 })
      .from('.box-do2', { opacity: 0, duration: 0.5, y: 50 })
      .from('.box-do3', { opacity: 0, duration: 0.5, y: 50 })
      .from('.box-do4', { opacity: 0, duration: 0.5, y: 50 })
  })

  useGSAP(() => {
    const tm = gsap.timeline()
    tm.add('box')
      .from('.judul-pendidikan', { opacity: 0, x: -50, duration: 1.5 }, 'box')
      .from('.list-pendidikan', { opacity: 0, x: 50, duration: 1.5 }, 'box')
  }, { scope: pendidikan })
  useGSAP(() => {
    const tm = gsap.timeline()
    tm.add('box')
      .from('.judul-pengalaman', { opacity: 0, x: 50, duration: 1.5 }, 'box')
      .from('.list-pengalaman', { opacity: 0, x: -50, duration: 1.5 }, 'box')
  }, { scope: pengalaman })
  return (
    <>
      <Box ref={head} width={"100%"} padding={['20px', '18px']} display={'flex'} gap={'35px'} justifyContent={'center'} alignItems={'center'} mb={1}>
        <Link href='/' style={{ textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: "18px" }} className='link1'>Home</Link>
        <Avatar src={img} className='img-head'></Avatar>
        <Link href='/about' style={{ textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: "18px" }} className='link2'>About</Link>
      </Box>
      <Box ref={banner} width={"100%"} padding={['0', '18px']} ml={0} gap={{ xs: 'none', lg: '25px' }} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap-reverse'}>
        <Box width={{ xs: '100%', lg: '64%' }} position={'relative'} overflow={'hidden'} height={{ xs: 'max-content', lg: '500px' }} bgcolor={"#f1f1f1"} borderRadius={{ xs: 'none', lg: '15px' }} p={'50px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <span className='bola' style={{ backgroundImage: 'radial-gradient(50% 50% at 50% 50%,#EB4432 0%,rgba(255,255,255,0) 100%)', width: '500px', height: '500px', position: 'absolute', opacity: .15, right: "-208px", bottom: "-123px" }}></span>
          <Box>
            <Typography className='text-profil' variant='h3' fontSize={{ xs: '37px', lg: '48px' }}>Hai saya, Asep Dera Purnama seorang Fullstack Web Developer</Typography>
            <Typography className='text-profil' mt={'20px'} variant='h6'>
              Saya seorang Fullstack Web Developer dengan pengalaman sekitar 2 tahun yang sudah banyak terlibat dalam projek aplikasi web, baik itu projek kecil maupun projek besar.
            </Typography>
          </Box>
          <Box display={'flex'} gap={{ xs: '8px', lg: '25px' }} flexDirection={{ xs: 'column', lg: 'row' }} mt={3}>
            <Box className='text-profil' display={'flex'} gap={'8px'} alignItems={'center'} bgcolor={'#d9d9d9'} py={{ xs: '10px', lg: '15px' }} px={{ xs: '25px', lg: '35px' }} borderRadius={'55px'} width={'max-content'}>
              <WhatsApp />
              <Typography fontWeight={700}>0882000849140</Typography>
            </Box>
            <Box className='text-profil' display={'flex'} gap={'8px'} alignItems={'center'} bgcolor={'#d9d9d9'} py={{ xs: '10px', lg: '15px' }} px={{ xs: '25px', lg: '35px' }} borderRadius={'55px'} width={'max-content'}>
              <Mail />
              <Typography fontWeight={700}>asepderaxrpla.17@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
        <Box width={{ xs: '100%', lg: '34%' }} md={4} height={'500px'} pl={0} pt={0} borderRadius={{ xs: 'none', lg: '15px' }} overflow={'hidden'} >
          <img src={img} alt="gambar profil" width={'100%'} height={'100%'} className='gambar-profil' />
        </Box>
      </Box>
      <Box ref={whatDo} mt={{ xs: '8rem', lg: '13rem' }} px={paddingDo} overflow={'hidden'}>
        <span className='bola' style={{ backgroundImage: 'radial-gradient(50% 50% at 50% 50%,#EB4432 0%,rgba(255,255,255,0) 100%)', width: '800px', height: '800px', position: 'absolute', opacity: .15, left: "-508px", bottom: "-623px" }}></span>
        <Typography variant='h2' fontWeight={'bold'} textAlign={'center'} mb={'20px'} fontSize={titleFontSize}>Apa yang bisa saya lakukan?</Typography>
        <Box display={'flex'} py={'30px'} flexWrap={'wrap'}>
          <Box width={widthDo} className="box-do1" p={'10px'}>
            <Box height={'300px'} borderRadius={'10px'} bgcolor={'#ffeaea'} p={5}>
              <img src={code} alt="" width={'50px'} height={'50px'} />
              <Typography fontWeight={700} variant='h5' mt={'5px'}>Client-side Code</Typography>
              <Typography fontWeight={500} variant='h6' mt={'15px'} fontSize={{xs: '17px', lg: '20px'}}>Membuat tampilan website yang menarik sesuai design yang diberikan.</Typography>
            </Box>
          </Box>
          <Box width={widthDo} className="box-do2" p={'10px'}>
            <Box bgcolor={'#ffeaea'} p={5} height={'300px'} borderRadius={'10px'}>
              <img src={api} alt="" width={'50px'} height={'50px'} />
              <Typography fontWeight={700} variant='h5' mt={'5px'}>Server-side Code</Typography>
              <Typography fontWeight={500} variant='h6' mt={'15px'} fontSize={{xs: '17px', lg: '20px'}}>Membuat API dengan mengutamakan efisiensi dan kecepatan.</Typography>
            </Box>
          </Box>
          <Box width={widthDo} className="box-do3" p={'10px'}>
            <Box bgcolor={'#ffeaea'} p={5} height={'300px'} borderRadius={'10px'}>
              <img src={db} alt="" width={'50px'} height={'50px'} />
              <Typography fontWeight={700} variant='h5' mt={'5px'}>Database Schema</Typography>
              <Typography fontWeight={500} variant='h6' mt={'15px'} fontSize={{xs: '17px', lg: '20px'}}>Membuat database yang optimal dan mudah digunakan untuk server code.</Typography>
            </Box>
          </Box>
          <Box width={widthDo} className="box-do4" p={'10px'}>
            <Box bgcolor={'#ffeaea'} p={5} height={'300px'} borderRadius={'10px'}>
              <img src={server} alt="" width={'50px'} height={'50px'} />
              <Typography fontWeight={700} variant='h5' mt={'5px'}>Server Configuration</Typography>
              <Typography fontWeight={500} variant='h6' mt={'15px'} fontSize={{xs: '17px', lg: '20px'}}>Konfigurasi server terbaik untuk deploy aplikasi hebat anda.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box ref={pendidikan} mt={{ xs: '8rem', lg: '10rem' }} px={paddingDo} overflow={'hidden'} display={'flex'} py="60px" position={'relative'} flexDirection={{xs: 'column', lg: 'row'}}>
        <span className='bola' style={{ backgroundImage: 'radial-gradient(50% 50% at 50% 50%,#EB4432 0%,rgba(255,255,255,0) 100%)', width: '800px', height: '800px', position: 'absolute', opacity: .15, right: "-508px", bottom: "-87px" }}></span>
        <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} alignItems={'center'} flexDirection={'column'} className="judul-pendidikan">
          <Box>
            <Typography variant='h2' fontWeight={'bold'} mb={{xs: '5px', lg: '20px'}} fontSize={{xs: '35px', lg: '65px', xl: '95px'}}>Pendidikan</Typography>
            <Typography variant='h6' fontWeight={'semibold'} mb={'20px'} fontSize={{xs: '17px', lg: '23px'}} ml={{xs: '0', lg: '5px'}}>Disini adalah tempat dimana saya menimba ilmu hingga menjadi saya saat ini.</Typography>
          </Box>
        </Box>
        <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} px={{xs: '0', lg: '3rem'}} flexDirection={'column'} className="list-pendidikan">
          <Box borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>2015 - 2018</Typography>
            <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '24px', lg: '35px'}}>SMPN 23 Bandung</Typography>
          </Box>
          <Box mt={{xs: '2rem', lg: '4rem'}} borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>2018 - 2021</Typography>
            <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '24px', lg: '35px'}}>SMK TI Pembangunan</Typography>
          </Box>
          <Box mt={{xs: '2rem', lg: '4rem'}} borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>2022 - sekarang</Typography>
            <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '24px', lg: '35px'}}>Universitas Insan Cita Indonesia</Typography>
          </Box>
        </Box>
      </Box>
      <Box ref={pengalaman} mt={{ xs: '8rem', lg: '10rem' }} px={paddingDo} overflow={'hidden'} display={'flex'} py="60px" position={'relative'} mb={'90px'} flexDirection={{xs: 'column-reverse', lg: 'row'}}>
        <span className='bola' style={{ backgroundImage: 'radial-gradient(50% 50% at 50% 50%,#EB4432 0%,rgba(255,255,255,0) 100%)', width: '800px', height: '800px', position: 'absolute', opacity: .15, left: "-508px", bottom: "-87px" }}></span>
        <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} px={{xs: '0', lg: '3rem'}} flexDirection={'column'} className="list-pengalaman">
          <Box borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>PT.Mabra Technology Solution</Typography>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '20px', lg: '35px'}}>Front End Developer</Typography>
              <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '12px', lg: '16px'}}>Oct 2021 - Dec 2021</Typography>
            </Box>
          </Box>
          <Box mt={{xs: '2rem', lg: '4rem'}} borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>SineasHub</Typography>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '20px', lg: '35px'}}>Back End Developer</Typography>
              <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '12px', lg: '16px'}}>Feb 2022 - Mei 2022</Typography>
            </Box>
          </Box>
          <Box mt={{xs: '2rem', lg: '4rem'}} borderBottom={'1px solid black'}>
            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '15px', lg: '23px'}}>Reacteev ID</Typography>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant='h3' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '20px', lg: '35px'}}>Full Stack Developer</Typography>
              <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '12px', lg: '16px'}}>Oct 2022 - sekarang</Typography>
            </Box>
          </Box>
        </Box>
        <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} alignItems={'center'} flexDirection={'column'} className="judul-pengalaman">
          <Box>
            <Typography variant='h2' fontWeight={'bold'} mb={'20px'} fontSize={{xs: '35px', lg: '65px', xl: '95px'}}>Pengalaman</Typography>
            <Typography variant='h6' fontWeight={'semibold'} mb={'20px'} fontSize={{xs: '17px', lg: '23px'}} ml={{xs: '0', lg: '5px'}}>Disini adalah tempat dimana saya melatih dan mengasah kemampuan saya hingga saat ini.</Typography>
          </Box>
        </Box>
      </Box>
      <Box px={{xs: 4, lg: 14}} py={5} bgcolor={"#252628"}>
        <Box display={'flex'} flexDirection={{ xs: 'column', lg: 'row' }}>
          <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} gap={{xs: '25px', lg: '65px'}}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='h6' fontWeight={'bold'} mb={'10px'} fontSize={{xs: '17px', lg: '24px'}} color={'white'} marginBottom={2}>Pages</Typography>
              <Link href='/' style={{ textDecoration: 'none'}} fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '14px', lg: '18px'}} color={'#fff'}>Home</Link>
              <Link href='/about' style={{ textDecoration: 'none' }} fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '14px', lg: '18px'}} color={'#fff'}>About</Link>
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={'bold'} mb={'10px'} fontSize={{xs: '17px', lg: '24px'}} color={'white'} marginBottom={2}>Contacts</Typography>
              <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '14px', lg: '18px'}} color={'white'}>Phone : 0882000849140</Typography>
              <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{xs: '14px', lg: '18px'}} color={'white'}>Email : asepderaxrpla.17@gmail.com</Typography>
            </Box>
          </Box>
          <Box width={{ xs: '100%', lg: '50%' }} mt={{xs: '25px', lg: '0'}}>
            <img src={fotoFooter} width={'100%'} height={'200px'} alt='Photo by <a href="https://unsplash.com/@emilep?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emile Perron</a> on <a href="https://unsplash.com/photos/macbook-pro-showing-programming-language-xrVDYZRGdw4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
