import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
    <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>José Eduardo</Text>
                    <Text color="gray.300" fontSize="small">
                        joseduardo.42@gmail.com
                    </Text>
                </Box>

                <Avatar size="md" name="José Eduardo" />
            </Flex>
    )
}