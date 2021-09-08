import React, { useEffect, useState } from "react";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { update } from "../redux/actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Edit = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const edit = user.find((e) => e.id === id);

  // const data = [
  //   {
  //     id: id,
  //     name: name,
  //     email: email,
  //     password: password,
  //     mobile: mobile,
  //   },
  // ];

  const editUser = () => {
    let data = user.map((d) => {
      if (d.id === id) {
        return {
          id: id,
          name: name,
          email: email,
          password: password,
          mobile: mobile,
        };
      }
      return d;
    });
    console.log("data", data);
    dispatch(update(data));

    toast.success("update successfully.");
    props.history.push("/userlist");
  };
  console.log(edit);
  useEffect(() => {
    setName(edit.name);
    setEmail(edit.email);
    setPassword(edit.password);
    setmobile(edit.mobile);
  }, [edit]);

  return (
    <>
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
              <h1>Edit user </h1>
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

              <Button colorScheme="blue" onClick={() => editUser()}>
                Update
              </Button>
            </FormControl>
            <ToastContainer />
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default Edit;
