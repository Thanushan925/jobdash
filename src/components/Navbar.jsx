import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Link, Button } from '@chakra-ui/react';
import Logo from '../assets/JD.png';

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setHasScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box id='navbar' as='nav' position='fixed' top='25px' left={{ base: '10px', lg: '100px', xl: '250px' }} right={{ base: '10px', lg: '100px', xl: '250px' }} zIndex='999' bg='transparent' py='3' boxShadow={hasScrolled ? '0 0 10px rgba(0, 0, 0, 0.8)' : 'none'} backdropFilter='blur(8px)' borderRadius='20'>
            <Flex bg='transparent' align='center' justify='space-between' px='6'>
                <Link href='#home'>
                    <Image bg='transparent' src={Logo} alt='Logo' w='16' h='16' />
                </Link>
                
                <Flex bg='transparent' align='center' gap='6' display={{ base: 'none', md: 'flex' }}>
                    <Link href='#postajob' fontSize='lg' color='cyan.400'>Post a Job</Link>
                    <Link href='#findajob' fontSize='lg' color='cyan.400'>Find a Job</Link>
                    <Link href='#about' fontSize='lg' color='cyan.400'>About</Link>
                    <Link href='#help' fontSize='lg' color='cyan.400'>Help</Link>
                    <Link href='#login' fontSize='lg' color='cyan.400'>Login</Link>
                    <Button as='a' href='#register' fontSize='lg' color='#212121' bg='cyan.400' rounded='full' _hover={{ bg: 'cyan.300' }}>
                        Sign Up
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
