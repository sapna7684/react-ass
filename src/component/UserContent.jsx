import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from 'react-icons/ri'
import axios from "axios";
import Pagination from "./Pagination";
import { tableHead } from "./settings";
import {Wrappper, Table, Th, Tr, Td, Input, SearchFilter, Button} from './settings'




export const UserContent = ({ users, setUsers }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [profileData, setProfileData] = useState([])
    const [order, setOrder] = useState('ASC');


    // Pagination start 
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = profileData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // sorting start
    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...users].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setUsers(sorted);
            setOrder('DSC')
        } else if (order === 'DSC') {
            const sorted = [...users].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setUsers(sorted);
            setOrder('ASC')
        }
    }
    // sorting end

    // User delete start
    const handleDelete = (userList) => {
        const UpdatedUsers = currentPosts.filter((i) => i.userName !== userList);
        setProfileData(UpdatedUsers)
    }
    // User delete end

    // user edit start
    const handleEdit = () => {

    }
    // user edit end 

    // get data start
    const fetchData = async () => {
        setLoading(true);
        await axios
            .get("/getProfileData")
            .then((res) => {
                setProfileData(res.data?.data);
                setLoading(false);
            }).catch((error) => console.log(error))
    };
    useEffect(() => {
        fetchData();
    }, []);

    // get data end 

    if (loading) {
        return <p>Loading...</p>;
    }

    const filterValue = currentPosts.filter((data) => {
        if (searchTerm === '') {
            return data
        } else if (data.city.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data
        }
    })
    return (
        <>  {

            <Wrappper>
                <SearchFilter> Filter By Country:
                    <Input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
                </SearchFilter>
                <Table className="table">
                    <thead>
                        <tr>
                            {tableHead.map((label, idx) => (
                                <Th key={label.id} onClick={() => sorting(label.field)}>{label.field}</Th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {

                            filterValue.length !== 0 ?
                                filterValue.map((user, idx) => (
                                    <Tr key={user.id}>
                                        <Td>{user.userName}</Td>
                                        <Td>{user.email}</Td>
                                        <Td>{user.phoneNumber}</Td>
                                        <Td>{user.addressLine1},{user.addressLine2}</Td>
                                        <Td>{user.city}</Td>
                                        <Td className="align">
                                            <Button onClick={handleEdit} secondary><FaEdit /></Button>
                                            <Button onClick={() => handleDelete(user.userName)} ><RiDeleteBin6Line /></Button>
                                        </Td>
                                    </Tr>
                                ))
                                : <Tr style={{ textAlign: 'center' }}><Td colSpan={8}>No records found!</Td></Tr>
                        }
                    </tbody>

                </Table>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={profileData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </Wrappper>
        }

        </>
    )
}
