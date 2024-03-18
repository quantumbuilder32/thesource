"use client"
import { generalInfo } from "@/lib/data/GeneralInfo"
import { useState } from "react"
import styles from "./page.module.css"
import Image from "next/image"

type invoiceType = {
    homeCompanyLogo: string,
    homeCompanyAddress: string,
    homeCompanyNumber: string,
    homeCompanyEmail: string,
    invoiceNumber: string,
    invoiceDate: Date,
    issueDate: Date,
    invoiceTo: string,
    services: invoiceService[]
}

type InvoiceFieldType = keyof invoiceType;


type invoiceService = {
    name: string,
    description: string,
    price: number,
    quantity: number,
    total: number
}

type invoiceCalculations = {
    tax: number,
    discount: number
}

function makeInvoiceNumber() {
    const length = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let invoiceNumber = '';
    for (let i = 0; i < length; i++) {
        invoiceNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return invoiceNumber;
}

export default function Page() {
    const [invoice, invoiceSet] = useState<invoiceType>({
        homeCompanyLogo: "",
        homeCompanyAddress: generalInfo.address,
        homeCompanyNumber: generalInfo.phone,
        homeCompanyEmail: generalInfo.email,
        invoiceNumber: makeInvoiceNumber(),
        invoiceDate: new Date,
        issueDate: new Date,
        invoiceTo: "",
        services: []
    })


    function updateInvoice<T extends InvoiceFieldType>(fieldName: T, fieldValue: invoiceType[T]) {
        invoiceSet(prevInvoice => {
            const newInvoice = { ...prevInvoice };
            newInvoice[fieldName] = fieldValue;
            return newInvoice;
        });
    }


    return (
        <div style={{ color: "#000" }}>
            <div style={{ display: "flex", position: 'relative' }}>
                <div className={styles.invoiceBody}>
                    <Image alt={`${1}image`} src={require(`@/public/invoicetest.png`).default.src} fill={true} style={{ objectFit: "contain", opacity: .2 }} />

                    <svg className="clearSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 839 461" style={{ fill: "#f69d1e", position: "absolute", top: "21.39%", left: "21.76%", height: "27.67%", width: "57.92%" }}>
                        <path d="m573 2851-49 134 708 327h131Z" transform="translate(-524 -2851)" />
                    </svg>

                    {/* <svg className="clearSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 905 130" style={{ fill: "#026aa6", position: "absolute", top: "98.55%", left: "30.2%", height: "3.94%", width: "35.49%" }}>
                        <path d="M1224,3309L935,3170,319,3314Z" transform="translate(-319 -3170)" />
                    </svg> */}



                    {/* <svg className="clearSvg" xmlns="http://www.w3.org/2000/svg" style={{ fill: "blue", position: "absolute", top: "21.39%", left: "21.76%", height: "27.67%", width: "57.92%" }} viewBox="0 0 1478 914">
                        <path d="M682 706h1223a127 127 0 0 1 127 127v659a127 127 0 0 1-127 127H682a127 127 0 0 1-127-127V833a127 127 0 0 1 127-127Z" transform="translate(-554.5 -705.5)" />
                    </svg> */}
                </div>

                <div className={styles.settingsCont}>sett stuff here</div>
            </div>
        </div>
    )
}
