import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // console.log('dddd')
        loadUsers()
        // fetchData()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users')
        // console.log(result)
        setUsers(result.data)
    }

    // const fetchData = () => {
    //     return fetch("http://localhost:3003/users")
    //         .then((response) => response.json())
    //         .then((data) => setUsers(data));
    // }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers()
    }

    console.log(users)
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Componant</h1>
                <table className="table border shadow">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary ml-2' to={`/users/${user.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary ml-2' to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className='btn btn-danger ml-2' onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;