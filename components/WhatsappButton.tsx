"use client"
import React from 'react';

interface WhatsAppChatButtonProps {
    productName: string;
    price: number;
    selectedSize: string;
}

const WhatsAppChatButton: React.FC<WhatsAppChatButtonProps> = ({ productName, price, selectedSize }) => {
    const handleWhatsAppClick = () => {
        const message = `Hello, I would like to order the following product:\n\nProduct: ${productName}\nPrice: Rs ${price}\nSize: ${selectedSize}`;
        const whatsappUrl = `https://wa.me/+94770621150?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md"
        >
            Order via WhatsApp
        </button>
    );
};

export default WhatsAppChatButton;
