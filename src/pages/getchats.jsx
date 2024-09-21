import { useQuery } from "@apollo/client";
import { GET_CHATS } from "@/queries/GetChats";

const ChatList = () => {
  const { loading, error, data } = useQuery(GET_CHATS);

  if (loading) return <p>Loading chats...</p>;
  if (error) return <p>Error loading chats: {error.message}</p>;

  if (!data) {
    return <p>No chats found</p>;
  }
  console.log(data.chats, "chatss");

  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {data.chats.map((chat) => (
          <li key={chat.id}>
            <strong>{chat.senderId.name}</strong> to{" "}
            <strong>{chat.receiverId.name}</strong>
            <ul>
              {chat.messages.map((message, index) => (
                <li key={index}>
                  <strong>{message.sender}:</strong> {message.text}{" "}
                  <em>({new Date(message.timestamp).toLocaleString()})</em>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
