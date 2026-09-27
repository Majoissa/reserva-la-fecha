import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const colors = {
  ivory: "#F7F5F2",
  sage: "#9AA79C",
  silverSage: "#B7BDB1",
  warmBeige: "#DCC9B1",
  softPeach: "#E6BFA9",
  darkText: "#2C3E50",
};

const fonts = {
  title: "'Cormorant Garamond', serif",
  body: "'Montserrat', sans-serif",
};

const fondo = require("./fondo.png");
const logo = require("./logo_png.png");
const instagramLogo = require("./LOGO-INSTAGRAM.png");
const celu = require("./martinamatias.jpeg");

const Home = () => {
  return (
    <Box bg={colors.ivory} color={colors.darkText} fontFamily={fonts.body}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="transparent"
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        maxW="container.xl"
        mx="auto"
      >
        <Flex align="center" mr={5}>
            <Image 
                src={logo}
                alt="Reserva la Fecha Logo" 
                h="125px" 
                objectFit="contain"
            />
        </Flex>

        <Box display={{ base: "none", md: "block" }}>
          <Button
            as="a"
            href="#contacto"
            variant="ghost"
            color={colors.darkText}
            fontWeight="medium"
            _hover={{ bg: "transparent", color: colors.sage }}
          >
            Contacto
          </Button>
          <Button
            as="a"
            href="#precios"
            bg="white"
            color={colors.sage}
            borderRadius="full"
            px={6}
            shadow="sm"
            _hover={{ shadow: "md", transform: "translateY(-1px)" }}
          >
            Reservar
          </Button>
        </Box>
      </Flex>

      <Box
        position="relative"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Image
            src={fondo}
            alt="Background Placeholder"
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            objectFit="cover"
            zIndex="0"
            opacity="1"
        />

        <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
          <Heading
            as="h1"
            fontFamily={fonts.title}
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="300"
            lineHeight="1.2"
            mb={6}
            color="#2d3748"
          >
            Tu boda empieza con una <br />
            <Box as="span" fontStyle="italic" color={colors.sage}>experiencia inolvidable.</Box>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="2xl"
            mx="auto"
            mb={10}
            letterSpacing="wide"
          >
            Invitaciones digitales elegantes, personalizadas y listas para compartir.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify="center"
          >
            <Button
              size="lg"
              bg={colors.sage}
              color="white"
              borderRadius="full"
              px={10}
              _hover={{ bg: colors.silverSage, transform: "translateY(-2px)", shadow: "md" }}
              transition="all 0.3s"
              fontWeight="medium"
              letterSpacing="wide"
            >
              Reservá tu fecha
            </Button>
            <Button
              as="a"
              href="#funciona"
              size="lg"
              variant="outline"
              borderColor={colors.sage}
              color={colors.sage}
              borderRadius="full"
              px={10}
              _hover={{ bg: colors.ivory, color: colors.silverSage, borderColor: colors.silverSage }}
              fontWeight="medium"
              letterSpacing="wide"
            >
              Ver cómo funciona
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box id="funciona" py={20} px={6} bg="white">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <Box>
              <Heading
                fontFamily={fonts.title}
                fontSize={{ base: "3xl", md: "4xl" }}
                mb={6}
                color={colors.darkText}
              >
                Olvidate del caos de las invitaciones tradicionales.
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                WhatsApps desordenados, invitaciones físicas costosas que terminan en la basura,
                y confirmaciones difíciles de organizar en planillas de Excel interminables.
              </Text>
              <Text fontSize="lg" color="gray.600">
                Diseñamos una experiencia digital que resuelve todo eso con elegancia y simplicidad.
              </Text>
            </Box>
            <Box position="relative">
                 <Box
                    height="300px"
                    bg={colors.ivory}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                 >
                    <Image 
                        src={instagramLogo} 
                        alt="Instagram Logo" 
                        objectFit="cover" 
                        w="full" 
                        h="full" 
                    />
                 </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <Box py={20} bg={colors.ivory}>
        <Container maxW="container.xl">
          <Heading
            fontFamily={fonts.title}
            fontSize={{ base: "3xl", md: "5xl" }}
            textAlign="center"
            mb={16}
            color={colors.darkText}
          >
            Todo lo que necesitás, en un solo lugar
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[
              "Portada con nombre de los novios",
              "Frase personalizada",
              "Cuenta regresiva",
              "Ubicación de misa y salón (Maps)",
              "Confirmación de asistencia (Forms)",
              "Sección datos bancarios (Regalos)",
              "Sección Dress Code",
              "Sección 'Nosotros'",
              "QR para subir fotos de invitados",
              "Botón para canción de fondo",
              "Personalización completa",
              "Un precio único. Todo incluido."
            ].map((item, index) => (
              <Flex key={index} align="center" bg="white" p={6} borderRadius="lg" shadow="sm">
                 <Icon as={FaCheck} color={colors.sage} mr={4} w={5} h={5} />
                 <Text fontSize="md" fontWeight="medium">{item}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 4. VISUAL EXPERIENCE & 5. DIFFERENTIAL */}
      <Box py={20} overflow="hidden">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
             <Box order={{ base: 2, md: 1 }} display="flex" justifyContent="center">
                {/* Mobile Mockup Placeholder */}
                <Box
                    w="250px"
                    h="480px"
                    bg="gray.800"
                    borderRadius="3xl"
                    border="8px solid #333"
                    position="relative"
                    overflow="hidden"
                    boxShadow="2xl"
                >
                    <Box
                        w="full"
                        h="full"
                        bg={colors.ivory}
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="start"
                    >
                        
                    <Image 
                        src={celu} 
                        alt="Instagram Logo" 
                        objectFit="cover" 
                        w="full" 
                        h="full" 
                    />
                    </Box>
                </Box>
             </Box>
             <Box order={{ base: 1, md: 2 }}>
                <Heading
                    fontFamily={fonts.title}
                    fontSize={{ base: "3xl", md: "5xl" }}
                    mb={6}
                    color={colors.darkText}
                >
                    Una invitación que se vive, no solo se envía.
                </Heading>
                <VStack align="start" spacing={6}>
                    <Box>
                        <Heading fontSize="xl" fontFamily={fonts.title} mb={2}>Experiencia Interactiva</Heading>
                        <Text color="gray.600">Tus invitados interactúan con la música, el mapa y la confirmación en tiempo real.</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="xl" fontFamily={fonts.title} mb={2}>Estética Editorial</Heading>
                        <Text color="gray.600">Cada detalle está cuidado para que parezca una revista de diseño, no una plantilla básica.</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="xl" fontFamily={fonts.title} mb={2}>Moderno y Funcional</Heading>
                        <Text color="gray.600">Generamos el QR para que compartas fácilmente y tus invitados accedan al instante.</Text>
                    </Box>
                </VStack>
             </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 6. PRICING */}
      <Box id="precios" py={20} bg={colors.silverSage} color="white" textAlign="center">
        <Container maxW="container.md">
            <Heading fontFamily={fonts.title} fontSize={{ base: "3xl", md: "5xl" }} mb={6}>
                Transparencia Total
            </Heading>
            <Text fontSize="xl" mb={10} opacity="0.9">
                Sin costos ocultos. Sin sorpresas.
            </Text>
            
            <Box bg="white" color={colors.darkText} p={10} borderRadius="2xl" shadow="xl">
                <Text fontSize="sm" letterSpacing="widest" textTransform="uppercase" fontWeight="bold" color={colors.sage} mb={2}>
                    PLAN ÚNICO
                </Text>
                <Heading fontFamily={fonts.title} fontSize="6xl" mb={6}>
                    Consultar
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={8}>
                    Incluye diseño, desarrollo, alojamiento y soporte.
                    Personalización completa de colores y textos.
                </Text>
                <Button
                    size="lg"
                    w="full"
                    bg={colors.sage}
                    color="white"
                    _hover={{ bg: colors.warmBeige }}
                >
                    Quiero mi invitación digital
                </Button>
            </Box>
        </Container>
      </Box>
      
      {/* 7. TESTIMONIALS (Placeholder) */}
      <Box py={20} bg={colors.ivory}>
        <Container maxW="container.lg" textAlign="center">
             <Heading fontFamily={fonts.title} fontSize="3xl" mb={10} color={colors.sage}>Lo que dicen nuestros novios</Heading>
             <SimpleGrid columns={{base: 1, md: 3}} spacing={8}>
                <Box p={6} bg="white" shadow="sm" borderRadius="lg">
                    <Text fontStyle="italic" mb={4}>"..."</Text>
                    <Text fontWeight="bold">- Próximamente</Text>
                </Box>
                <Box p={6} bg="white" shadow="sm" borderRadius="lg">
                    <Text fontStyle="italic" mb={4}>"..."</Text>
                    <Text fontWeight="bold">- Próximamente</Text>
                </Box>
                <Box p={6} bg="white" shadow="sm" borderRadius="lg">
                    <Text fontStyle="italic" mb={4}>"..."</Text>
                    <Text fontWeight="bold">- Próximamente</Text>
                </Box>
             </SimpleGrid>
        </Container>
      </Box>

      {/* 8. FINAL CTA */}
      <Box id="contacto" py={24} textAlign="center" bg="white">
        <Container maxW="container.md">
            <Heading fontFamily={fonts.title} fontSize={{ base: "4xl", md: "6xl" }} mb={8}>
                Reservá tu fecha hoy.
            </Heading>
            <Button
              size="2xl"
              py={8}
              px={12}
              fontSize="xl"
              bg={colors.sage}
              color="white"
              borderRadius="full"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
              transition="all 0.3s"
            >
                Quiero mi invitación digital
            </Button>
        </Container>
      </Box>
      
      {/* Footer Simple */}
      <Box py={10} bg={colors.ivory} textAlign="center" borderTop={`1px solid ${colors.silverSage}`}>
        <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Reserva la Fecha. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
