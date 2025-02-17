import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  Center,
  Heading,
  NativeBaseProvider,
  FormControl,
  HStack,
  useToast,
} from "native-base";
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.show({
        description: "Por favor ingrese todos los campos",
        status: "error"
      });
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('MainApp');
    } catch (error) {
      let errorMessage = "Error al iniciar sesión";
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = "Usuario no encontrado";
          break;
        case 'auth/wrong-password':
          errorMessage = "Contraseña incorrecta";
          break;
        case 'auth/invalid-email':
          errorMessage = "Correo electrónico inválido";
          break;
        default:
          errorMessage = error.message;
      }

      toast.show({
        description: errorMessage,
        status: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center flex={1} bg="white" px="4">
      <VStack space={5} alignItems="center" w="100%">
        <Heading size="lg" color="cyan.500">
          Sistema de Citas Médicas
        </Heading>

        <FormControl>
          <FormControl.Label>Correo Electrónico</FormControl.Label>
          <Input
            size="lg"
            placeholder="correo@ejemplo.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Contraseña</FormControl.Label>
          <Input
            size="lg"
            placeholder="Ingrese su contraseña"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
        </FormControl>

        <Button
          w="100%"
          size="lg"
          bg="cyan.500"
          _pressed={{ bg: "cyan.600" }}
          onPress={handleLogin}
          isLoading={loading}
          isLoadingText="Iniciando sesión..."
        >
          Iniciar Sesión
        </Button>

        <HStack mt="2" space={2}>
          <Button
            variant="ghost"
            colorScheme="cyan"
            onPress={() => navigation.navigate('Register')}
          >
            Registrarse
          </Button>
          <Button
            variant="ghost"
            colorScheme="cyan"
            onPress={() => navigation.navigate('RecoverPassword')}
          >
            Recuperar Contraseña
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Login;