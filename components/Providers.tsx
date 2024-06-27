"use client";
import { ReactNode } from "react"
import {CartProvider as USCProvider} from "use-shopping-cart"

export default function CartProvider({children}:{children:ReactNode}){
return (
    <USCProvider 
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
    successUrl="https://ecommerce-duns.vercel.app/stripe/success"
    cancelUrl="https://ecommerce-duns.vercel.app/stripe/error"
    currency="USD"
    billingAddressCollection={false}
    shouldPersist={true} // when refresshes items stay
    language="en-US"
    >
    {children}
    </USCProvider>
)
}
