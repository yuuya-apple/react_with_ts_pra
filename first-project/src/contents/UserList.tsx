import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [userList, setUserList] = useState<User[]>([]);
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [displayList, setDisplayList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(response.data);
        setDisplayList(response.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayList(userList?.filter((user) => user.name.includes(searchTxt)));
  }, [searchTxt]);

  const displayUserList = () => {
    return displayList?.map((u) => (
      <tr key={u.id}>
        <td>{u.id} </td>
        <td>{u.name} </td>
        <td>{u.email} </td>
      </tr>
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <table>
        <thead>
          <tr key={"head"}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{displayUserList()}</tbody>
      </table>
    </div>
  );
}
