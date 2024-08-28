import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [userList, setUserList] = useState<User[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(response.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  const displayUserList = () => {
    return userList?.map((u) => (
      <tr>
        <td>{u.id} </td>
        <td>{u.name} </td>
        <td>{u.email} </td>
      </tr>
    ));
  };

  return (
    <div>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {displayUserList()}
    </div>
  );
}
