import React from "react";
import { Button } from "./ui/button";

export default function WhatsAppChatButton() {
    const phoneNumber = "+94 077 062 1150";
    const whatsappChatLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    return (
        <a href={whatsappChatLink} target="_blank" rel="noopener noreferrer">
            <Button>
                Place Order
            </Button>
        </a>
    );
};

