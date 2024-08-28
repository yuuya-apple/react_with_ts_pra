import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function PostList() {
  const [postList, setPostList] = useState<Post[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPostList(response.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  const displayPostList = () => {
    return postList?.map((p) => (
      <tr>
        <td>{p.id} </td>
        <td>{p.userId} </td>
        <td>{p.title} </td>
        <td>{p.body} </td>
      </tr>
    ));
  };

  return (
    <div>
      <tr>
        <th>ID</th>
        <th>UserID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      {displayPostList()}
    </div>
  );
}
