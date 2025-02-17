import React, { useState } from "react";
import {
  VStack,
  Input,
  Button,
  Center,
  Heading,
  FormControl,
  useToast,
} from "native-base";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const RecoverPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleRecoverPassword = async () => {
    if (!email) {
      toast.show({
        description: "Por favor ingrese su correo electrónico",
        status: "error",
      });
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.show({
        description: "Se ha enviado un enlace de recuperación a su correo",
        status: "success",
      });
      setTimeout(() => navigation.navigate("Login"), 2000);
    } catch (error) {
      let errorMessage = "Error al enviar el correo de recuperación";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No existe una cuenta con este correo";
          break;
        case "auth/invalid-email":
          errorMessage = "Correo electrónico inválido";
          break;
        default:
          errorMessage = error.message;
      }

      toast.show({
        description: errorMessage,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center flex={1} bg="white" px="4">
      <VStack space={5} alignItems="center" w="100%">
        <Heading size="lg" color="cyan.500">
          Recuperar Contraseña
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

        <Button
          w="100%"
          size="lg"
          bg="cyan.500"
          _pressed={{ bg: "cyan.600" }}
          onPress={handleRecoverPassword}
          isLoading={loading}
          isLoadingText="Enviando..."
        >
          Enviar Instrucciones
        </Button>

        <Button
          w="100%"
          variant="ghost"
          colorScheme="cyan"
          onPress={() => navigation.navigate("Login")}
        >
          Volver al Login
        </Button>
      </VStack>
    </Center>
  );
};

export default RecoverPassword;
