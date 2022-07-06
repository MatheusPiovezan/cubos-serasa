import { createContext } from 'react';
import useUserProviler from '../hooks/useUserProviler';

const UserContext = createContext();

export function UserProvider(props) {
    const userProviler = useUserProviler();
    return (
        <UserContext.Provider value={userProviler}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;