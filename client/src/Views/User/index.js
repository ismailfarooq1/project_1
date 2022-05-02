import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { index } from "../../Redux/Actions/User";

const User = () => {

    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    let allUsers = useSelector((state) => {
        return state.User.allUsers;
    })
    let usersData;

    useEffect(() => {
        const fetchData = async () => {
            return usersData = await axios.get('api/user/index');
        }
        fetchData().then((data) => {
            setUsers(data);
            console.log('data');
            console.log(data);
        });

    }, [])
    if (loading) {
        return (
            <div>
                LOADING
            </div>
        );
    } else {

        return (
            <div className="container my-2">
                <table className="table table-primary">
                    <thead>
                        <th className="col">ID</th>
                        <th className="col">Name</th>
                        <th className="col">Email</th>
                        <th className="col">Actions</th>
                    </thead>
                    <tbody>
                        {/* {users.map((item) => { console.log(item) })} */}
                        <tr>
                            <td>1</td>
                            <td>Ismail Farooq</td>
                            <td>sckmsd@g.com</td>
                            <td></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default User;