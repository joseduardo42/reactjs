import {FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>
   (({ name, label, error = null, ...rest }, ref) => 
   
   {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput 
              ref={ref}
              name={name} 
              id={name}
              type={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.700"
              }}
              size="lg"
              {...rest}
            />

            { !!error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            )}
          </FormControl>
    )
})