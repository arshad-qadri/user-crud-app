import React, { useState } from "react";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions";
// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const data = {
    id: new Date().getTime().toString(),
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  };
  const submitHandle = () => {
    if (!name || !email || !password || !mobile) {
      alert("Plz fill all fields");
    } else {
      console.log("user =========", user);
      if (user.length) {
        dispatch(addUser([...user, data]));
      } else {
        dispatch(addUser([data]));
      }
      // axios
      //   .post("http://192.168.1.35:5001/api/v1/user/auth/signup?lang=en", {
      //     name: name,
      //     email: email,
      //     mobile: mobile,
      //     password: password,
      //     is_verified: true,
      //     login_with: "Manual",
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     alert("User added successfully");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // dispatch(addUser(name, email, password, mobile));

      setName("");
      setEmail("");
      setPassword("");
      setmobile("");
    }
  };

  return (
    <Flex w="100%" h="90vh" alignItems="center" justifyContent="space-around">
      <Center>
        <Box
          w={{ lg: "40rem", md: "30rem", sm: "30rem" }}
          h="40rem"
          bg="white"
          borderWidth="2px"
          borderColor="gray.900"
          borderRadius="20px"
          p={10}
        >
          <Box
            textAlign="center"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="capitalize"
          >
            <h1>Fill your form</h1>
          </Box>
          <FormControl mt="5rem">
            <Box my={6}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                type="text"
                border="1px"
                borderColor="gray.900"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box my={6}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                id="1"
                type="email"
                border="1px"
                borderColor="gray.900"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box my={6}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                id="2"
                type="password"
                border="1px"
                borderColor="gray.900"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box my={6}>
              <FormLabel>Mobile</FormLabel>
              <Input
                name="number"
                id="3"
                type="text"
                border="1px"
                borderColor="gray.900"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
            </Box>

            <Button colorScheme="blue" onClick={submitHandle}>
              Submit
            </Button>
            <ToastContainer />
          </FormControl>
        </Box>
      </Center>
    </Flex>
  );
};

export default Forms;
