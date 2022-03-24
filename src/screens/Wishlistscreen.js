import React from 'react';
import { Center, Text, NativeBaseProvider } from "native-base";

const Wishlistscreen = () => {
    return (
        <NativeBaseProvider>
    <Center bg="emerald.100" flex={1}>
        <Text fontSize={30}>
            This is a Wishlist Page
        </Text>              
    </Center>
    </NativeBaseProvider>
    );
}

export default Wishlistscreen;