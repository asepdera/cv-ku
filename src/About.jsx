import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Box, Link, Avatar, Typography } from '@mui/material'
import img from './poto.jpg?url'
import fotoFooter from './foto-footer.jpg?url'

export default function About() {
    const head = useRef()
    useGSAP(() => {
        const tm = gsap.timeline()
        tm.from('.img-head', { opacity: 0, scale: 2, duration: 1 })
            .add('label')
            .from('.link1', { opacity: 0, x: -50, duration: .5 }, 'label')
            .from('.link2', { opacity: 0, x: 50, duration: .5 }, 'label')
    }, { scope: head })
    return (
        <Box display={'flex'} flexDirection={'column'} height={{ xs: 'max-content', lg: '100vh' }} justifyContent={'space-between'}>
            <Box ref={head} width={"100%"} padding={['20px', '18px']} display={'flex'} gap={'35px'} justifyContent={'center'} alignItems={'center'} mb={1}>
                <Link href='/' style={{ textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: "18px" }} className='link1'>Home</Link>
                <Avatar src={img} className='img-head'></Avatar>
                <Link href='/about' style={{ textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: "18px" }} className='link2'>About</Link>
            </Box>
            <Box height={'100%'} px={{ xs: '25px', lg: '5rem' }} display={'flex'} gap={'20px'} py={{ xs: '2rem', lg: '4rem' }} flexDirection={{ xs: 'column', lg: 'row' }}>
                <Box width={{ xs: '100%', lg: '50%' }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9KiRXTfe7IQ?si=pceN0In339ya8xRj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Box>
                <Box width={{ xs: '100%', lg: '50%' }}>
                    <Typography variant='h3' fontSize={{ xs: '27px', lg: '48px' }}>Video Penjelasan</Typography>
                    <Typography variant='h5' mt={'15px'} fontSize={{ xs: '17px', lg: '24px' }}>Berikut adalah video penjelasan dari website cv yang saya buat</Typography>
                </Box>
                <Link href="https://www.youtube.com/embed/9KiRXTfe7IQ?si=pceN0In339ya8xRj" target="_blank" width={'max-content'} borderRadius={'7px'} padding={'14px 28px'} style={{ textDecoration: 'none' }} bgcolor={'#121122'} color={'#fff'} display={{ xs: 'block', lg: 'none' }}>Lihat Di Youtube</Link>
            </Box>
            <Box px={{ xs: 4, lg: 14 }} py={5} bgcolor={"#252628"}>
                <Box display={'flex'} flexDirection={{ xs: 'column', lg: 'row' }}>
                    <Box width={{ xs: '100%', lg: '50%' }} display={'flex'} gap={{ xs: '25px', lg: '65px' }}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant='h6' fontWeight={'bold'} mb={'10px'} fontSize={{ xs: '17px', lg: '24px' }} color={'white'} marginBottom={2}>Pages</Typography>
                            <Link href='/' style={{ textDecoration: 'none' }} fontWeight={'semibold'} mb={'10px'} fontSize={{ xs: '14px', lg: '18px' }} color={'#fff'}>Home</Link>
                            <Link href='/about' style={{ textDecoration: 'none' }} fontWeight={'semibold'} mb={'10px'} fontSize={{ xs: '14px', lg: '18px' }} color={'#fff'}>About</Link>
                        </Box>
                        <Box>
                            <Typography variant='h6' fontWeight={'bold'} mb={'10px'} fontSize={{ xs: '17px', lg: '24px' }} color={'white'} marginBottom={2}>Contacts</Typography>
                            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{ xs: '14px', lg: '18px' }} color={'white'}>Phone : 0882000849140</Typography>
                            <Typography variant='h6' fontWeight={'semibold'} mb={'10px'} fontSize={{ xs: '14px', lg: '18px' }} color={'white'}>Email : asepderaxrpla.17@gmail.com</Typography>
                        </Box>
                    </Box>
                    <Box width={{ xs: '100%', lg: '50%' }} mt={{ xs: '25px', lg: '0' }}>
                        <img src={fotoFooter} width={'100%'} height={'200px'} alt='Photo by <a href="https://unsplash.com/@emilep?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emile Perron</a> on <a href="https://unsplash.com/photos/macbook-pro-showing-programming-language-xrVDYZRGdw4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}