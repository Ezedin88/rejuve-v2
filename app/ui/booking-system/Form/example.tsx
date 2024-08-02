import { useState } from "react";

export default function Example() {
    const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);

    const handleBlur = (event) => {
        const userName = event.target.value.trim();
        setIsUserNameEmpty(userName === "");
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="user name"
                    onBlur={handleBlur}
                    style={{ border: '1px solid #000' }}
                />
                {isUserNameEmpty && <small>User name is required</small>}
            </form>
        </div>
    );
}
