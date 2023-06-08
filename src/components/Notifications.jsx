import { useEffect, useState } from "react";

const notificationInitialState = {
    isOpen: false,
    type: null,
    content: ""
};

const Notifications = () => {
    const [notification, setNotification] = useState(notificationInitialState);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get("status");

        if (status === "approved") {
            setNotification({
                content: "Pago aprobado!",
                isOpen: true,
                type: "approved"
            });
        } else if (status === "failure") {
            setNotification({
                content: "Pago fallido!",
                isOpen: true,
                type: "failure"
            });
        }

        setTimeout(() => {
            setNotification(notificationInitialState);
        }, 5000);
    }, []);

    return (
        <>
            {notification.isOpen && (
                <div className="flex items-center justify-center bg-sky-600 text-white font-bold py-2 px-4 rounded">
                    <div
                        style={{
                            backgroundColor:
                                notification.type === "approved" ? "#00cc99" : "#ee4646",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        className="mr-2"
                    >
                        <img
                            src={`/assets/${notification.type}.svg`}
                            alt={notification.type}
                            width={25}
                            height={25}
                        />
                    </div>
                    <p className="text-center font-bold">{notification.content}</p>
                </div>
            )}
        </>
    );
};

export default Notifications;
