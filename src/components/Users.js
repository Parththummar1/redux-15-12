import React, { useEffect } from "react";

import { getusers } from "../actions/users";
import { useSelector,useDispatch } from 'react-redux'

const Users = () => {
   
   const users = useSelector((state) => state.userdata.users);
    
   // const [users, setUsers] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getusers());
    }, [dispatch])

   
    return (

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>

                {
                    users ? users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <th >{ user.id }</th>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.phone }</td>
                                
                            </tr>
                        )
                    }) : 'Loading...'
                }




            </tbody>
        </table>

    )
}

export default Users