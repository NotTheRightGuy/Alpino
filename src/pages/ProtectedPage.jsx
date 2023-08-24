import { useAuth } from "@clerk/clerk-react";
const ProtectedPage = () => {
    const { userId, sessionId } = useAuth();
    return (
        <h1>
            This is a example of a protected page
            <div>
                Hello {userId} your current active session is {sessionId}
            </div>
        </h1>
    );
};

export default ProtectedPage;
