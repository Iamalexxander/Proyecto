import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  Input,
  Button,
  Center,
  Heading,
  FormControl,
  ScrollView,
  Select,
  Checkbox,
  useToast,
} from "native-base";
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = ({ navigation }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    password: '',
    confirmPassword: '',
    aceptaTerminos: false
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.nombres || !formData.apellidos || !formData.email || 
        !formData.telefono || !formData.fechaNacimiento || !formData.genero || 
        !formData.password || !formData.confirmPassword) {
      toast.show({
        description: "Por favor complete todos los campos",
        status: "error"
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.show({
        description: "Las contraseñas no coinciden",
        status: "error"
      });
      return false;
    }

    if (!formData.aceptaTerminos) {
      toast.show({
        description: "Debe aceptar los términos y condiciones",
        status: "error"
      });
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Store additional user data in Firestore
      await setDoc(doc(db, 'usuarios', userCredential.user.uid), {
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        email: formData.email,
        telefono: formData.telefono,
        fechaNacimiento: formData.fechaNacimiento,
        genero: formData.genero,
        tipo: 'paciente',
        createdAt: new Date().toISOString(),
      });

      toast.show({
        description: "Registro exitoso",
        status: "success"
      });

      navigation.navigate('Login');
    } catch (error) {
      let errorMessage = "Error durante el registro";
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "Este correo ya está registrado";
          break;
        case 'auth/invalid-email':
          errorMessage = "Correo electrónico inválido";
          break;
        case 'auth/weak-password':
          errorMessage = "La contraseña debe tener al menos 6 caracteres";
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
    <ScrollView>
      <Center flex={1} bg="white" px="4" py="8">
        <VStack space={4} alignItems="center" w="100%">
          <Heading size="lg" color="cyan.500">
            Registro de Usuario
          </Heading>

          <FormControl isRequired>
            <FormControl.Label>Nombres</FormControl.Label>
            <Input
              placeholder="Ingrese sus nombres"
              value={formData.nombres}
              onChangeText={(value) => setFormData({...formData, nombres: value})}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Apellidos</FormControl.Label>
            <Input
              placeholder="Ingrese sus apellidos"
              value={formData.apellidos}
              onChangeText={(value) => setFormData({...formData, apellidos: value})}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Correo Electrónico</FormControl.Label>
            <Input
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChangeText={(value) => setFormData({...formData, email: value})}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Teléfono</FormControl.Label>
            <Input
              placeholder="Ingrese su teléfono"
              value={formData.telefono}
              onChangeText={(value) => setFormData({...formData, telefono: value})}
              keyboardType="phone-pad"
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Fecha de Nacimiento</FormControl.Label>
            <Input
              placeholder="DD/MM/AAAA"
              value={formData.fechaNacimiento}
              onChangeText={(value) => setFormData({...formData, fechaNacimiento: value})}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Género</FormControl.Label>
            <Select
              selectedValue={formData.genero}
              onValueChange={(value) => setFormData({...formData, genero: value})}
              placeholder="Seleccione su género"
            >
              <Select.Item label="Masculino" value="M" />
              <Select.Item label="Femenino" value="F" />
              <Select.Item label="Otro" value="O" />
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input
              placeholder="Ingrese su contraseña"
              type="password"
              value={formData.password}
              onChangeText={(value) => setFormData({...formData, password: value})}
              secureTextEntry
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Confirmar Contraseña</FormControl.Label>
            <Input
              placeholder="Confirme su contraseña"
              type="password"
              value={formData.confirmPassword}
              onChangeText={(value) => setFormData({...formData, confirmPassword: value})}
              secureTextEntry
            />
          </FormControl>

          <Checkbox
            value="terminos"
            isChecked={formData.aceptaTerminos}
            onChange={(isSelected) => setFormData({...formData, aceptaTerminos: isSelected})}
          >
            Acepto los términos y condiciones
          </Checkbox>

          <Button
            w="100%"
            size="lg"
            bg="cyan.500"
            isLoading={loading}
            isLoadingText="Registrando..."
            onPress={handleRegister}
          >
            Registrarse
          </Button>

          <Button
            w="100%"
            variant="ghost"
            colorScheme="cyan"
            onPress={() => navigation.navigate('Login')}
          >
            Ya tengo una cuenta
          </Button>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default Register;