import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
    title: string;
    description: string;
}

const WhyChooseUsCard = ({ title, description }: CardProps) => {
    return (
        <Card className="text-center bg-white">
            <CardHeader className="pb-3">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
};

export default WhyChooseUsCard;
