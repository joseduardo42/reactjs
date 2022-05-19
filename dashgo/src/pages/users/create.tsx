import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form"

type CreateUserFormData = {
    name: string,
    email: string,
    password: string
    passwordConfirmation: string
}
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'Minimo 6 caracteres'),
    passwordConfirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
        resolver: yupResolver(createUserFormSchema)
      });
    
      const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
      }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius="6" 
                    bg="gray.800"
                    p={["6","8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input 
                                name="name" 
                                label= "Nome completo" 
                                error={errors.name}
                                {...register("name")}
                            />
                            <Input 
                                name="email" 
                                type ="email" 
                                error={errors.email}
                                label= "E-mail" 
                                {...register("email")}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input 
                                name="password" 
                                type="password"
                                error={errors.password}
                                label= "Senha"
                                {...register("password")}
                            />
                            <Input 
                                name="passwordConfirmation" 
                                type ="password" 
                                error={errors.passwordConfirmation}
                                label= "Confirme a senha" 
                                {...register("passwordConfirmation")}
                            />
                        </SimpleGrid>
                    </VStack>
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                                </Link>
                                <Button 
                                    type="submit" 
                                    colorScheme="pink"
                                    isLoading={isSubmitting}
                                >
                                    Salvar
                                </Button>
                            </HStack>
                        </Flex>
                    
                </Box>
            </Flex>
        </Box>
    )
}