import React, { useState, useEffect } from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Text, Image, Center } from '@chakra-ui/react'
import LogoName from '../assets/JobDash-name-noBackground.png';

const Home = () => {
    const titleFontSize = useBreakpointValue({ base: '3xl', sm: '4xl', md: '6xl', lg: '7xl' });
    const subtitleFontSize = useBreakpointValue({ base: 'md', sm: 'lg', md: '2xl', lg: '4xl' });
    const textFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'xl', lg: '3xl' });

    return (
        <Box id='home' position='relative' height='750px'>
            <AbsoluteCenter>
                <Image bg='transparent' src={LogoName} alt='LogoName' h={{ base: 'none', md: 'flex' }}/>
                <Text fontSize={ subtitleFontSize } color='white' mt='5'><Center>Contract Jobs Simplified</Center></Text>
            </AbsoluteCenter>
        </Box>
    )
}

export default Home
