import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UserList = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <>
      <Table border="2px" borderColor="tomato" w="80%" mx="auto" my={2} p={2}>
        <Thead bg="tomato">
          <Tr>
            <Th color="#fff" fontWeight="900">
              Sr No
            </Th>
            <Th color="#fff" fontWeight="900">
              Name
            </Th>
            <Th color="#fff" fontWeight="900">
              Email
            </Th>
            <Th color="#fff" fontWeight="900">
              Password
            </Th>
            <Th isNumeric color="#fff" fontWeight="900">
              Mobile
            </Th>
            <Th color="#fff" fontWeight="900">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {user &&
            user.length > 0 &&
            user.map((elem, i) => {
              return (
                <Tr key={i}>
                  <Td> {i + 1} </Td>
                  <Td> {elem.name}</Td>
                  <Td> {elem.email} </Td>
                  <Td> {elem.password} </Td>
                  <Td isNumeric> {elem.mobile} </Td>
                  <Td>
                    <Button
                      size="xs"
                      border="1px"
                      onClick={() => dispatch(deleteUser(elem.id))}
                    >
                      Delete
                    </Button>
                    <Link to={`edit/${elem.id}`}>
                      <Button size="xs" border="1px">
                        Edit
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      <ToastContainer />
    </>
  );
};

export default UserList;
