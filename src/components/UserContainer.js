import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const UserCountainer = () => {
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div>
        user ...
        {loading && <p>loading</p>}
        {error && <p>{error}</p>}
        <div>
          <h2>user List</h2>
          {users?.length && users.map(({ id, name }) => <p key={id}>{name}</p>)}
        </div>
      </div>
    </>
  );
};

export default UserCountainer;
