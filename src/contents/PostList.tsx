import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function PostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [displayList, setDisplayList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPostList(response.data);
        setDisplayList(response.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayList(postList?.filter((post) => post.title.includes(searchTxt)));
  }, [searchTxt]);

  const displayPostList = () => {
    return displayList?.map((p) => (
      <tr key={p.id}>
        <td>{p.id} </td>
        <td>{p.userId} </td>
        <td>{p.title} </td>
        <td>{p.body} </td>
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
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{displayPostList()}</tbody>
      </table>
    </div>
  );
}
