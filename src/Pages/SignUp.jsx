import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupAction } from "../ReduxComponents/User/user.action";

const SignUp = () => {
  const [user, setUser] = useState({});
  const token = useSelector((store) => store.auth.token);
  console.log("token is", token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    dispatch(signupAction(user));
    console.log(user);
  };

  useEffect(()=>{
    if (token) {
      navigate("/login");
    }
  }, [token])


  return (
    <>
      <Flex
        gap="nogap"
        border="1px solid grey"
        borderRadius="8"
        width="80%"
        margin="auto"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="column"
          width="50%"
          align="center"
          bgColor="white"
          zIndex="1"
        >
          <Box borderRadius="8">
            <Center marginTop="10">
    {/*feedback: fw18_0112 and fw17_1126 - Don't use static URLs directly in src tag, you can pass it from any config file*/}
              <Img src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" />
            </Center>
            <Box>
              <Text fontSize="24px" fontWeight="500" marginTop="6">
                Create Your Account
              </Text>
            </Box>
          </Box>
          <Box padding="8" width="75%" margin="auto">
            <FormControl>
              <FormLabel fontSize="14px" color="#857e88">
                Name
              </FormLabel>
              <Input
                placeholder="jhon smith"
                size="sm"
                marginBottom="4"
                name="name"
                onChange={handleChange}
                type="text"
              />
              <FormLabel fontSize="14px" color="#857e88">
                Email
              </FormLabel>
              <Input
                placeholder="jhonsmith@mail.com"
                size="sm"
                marginBottom="4"
                name="email"
                onChange={handleChange}
                type="email"
              />
              <FormLabel fontSize="14px" color="#857e88">
                Password
              </FormLabel>
              <Input
                placeholder="Enter your password"
                size="sm"
                name="password"
                onChange={handleChange}
                type="password"
              />
              <Button
                bg="#3070f0"
                color="white"
                width="100%"
                size="sm"
                marginTop="6"
                _hover={{ bg: "#3070f0" }}
                type={"submit"}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </FormControl>
            <Flex direction="row" marginTop="6">
              <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
              <Box>
                <Text color="3070f0" fontWeight="400">
                  or
                </Text>
              </Box>
              <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
            </Flex>
          </Box>

          <Box padding="8" width="75%" marginTop="-8">
            <Flex
              border="1px solid grey"
              borderRadius="4"
              marginBottom="3"
              padding="2"
              justifyContent="center"
              gap="4"
            >
              <Img src="https://id.tmetric.com/images/google_logo.svg" />
              <Text fontSize="14px" color="#777e85" fontWeight="600">
                Sign Up with Google
              </Text>
            </Flex>
            <Flex
              border="1px solid grey"
              borderRadius="4"
              marginBottom="3"
              padding="2"
              justifyContent="center"
              gap="4"
            >
              <Img src="https://id.tmetric.com/images/microsoft_logo.svg" />
              <Text fontSize="14px" color="#777e85" fontWeight="600">
                Sign Up with Microsoft
              </Text>
            </Flex>
            <Flex
              border="1px solid grey"
              borderRadius="4"
              marginBottom="3"
              padding="2"
              justifyContent="center"
              gap="4"
            >
              <Img src="https://id.tmetric.com/images/apple_logo.svg" />
              <Text fontSize="14px" color="#777e85" fontWeight="600">
                Sign Up with Apple
              </Text>
            </Flex>
          </Box>
          <Divider
            bgColor="3070f0"
            height="5px"
            width="65%"
            margin="auto"
            position="relative"
            top="-6"
          />
          <Flex
            justifyContent="center"
            width="85%"
            margin="auto"
            paddingBottom="4"
          >
            <Text fontSize="14px" fontWeight="600">
              Already have an account ?{" "}
              <Link to="/login">
                <span style={{ color: "#3070f0" }}>Log In</span>
              </Link>
            </Text>
          </Flex>
        </Flex>
        <Flex marginLeft="-20" bgColor="#f2f5fc" width="60%">
          <Img
            src="https://id.tmetric.com/images/side_image_register.svg"
            width="734px"
            height="734px"
            zIndex="1"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
