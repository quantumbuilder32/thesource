"use client"
import { generalInfo } from "@/lib/data/GeneralInfo"
import { useState, useRef, useEffect, useMemo } from "react"
import styles from "./page.module.css"
import { useReactToPrint } from 'react-to-print';
import Image from "next/image";
import ShowMore from "@/components/showMore/ShowMore";
import { TextInput } from "@/components/reusables/inputs/Inputs";
import MainButton from "@/components/reusables/buttons/mainbutton/MainButton";

type invoiceType = {
    homeCompanyLogo: string,
    invoiceToAddress: string,
    invoiceToPhoneNumber: string,
    invoiceToEmail: string,
    invoiceNumber: string,
    invoiceDate: string,
    issueDate: string,
    invoiceTo: string,
    homeAddress: string,
    homePhoneNumber: string,
    homeWebsite: string,
    homeEmail: string,
    homeTermsAndConditions: string,
    tax: number,
    discount: number,
    services: invoiceService[],
    paymentMethods: paymentMethod[]
}

type InvoiceFieldType = keyof invoiceType;

type invoiceService = {
    name: string,
    description: string,
    price: number,
    quantity: number
}

type paymentMethod = {
    name: string,
    info: string,
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

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const fillData: invoiceType = {
    homeCompanyLogo: require(`@/public/logo.png`).default.src,
    homeAddress: generalInfo.address,
    homeEmail: generalInfo.email,
    homePhoneNumber: generalInfo.phone,
    homeWebsite: generalInfo.website,

    homeTermsAndConditions: "All services rendered are subject to TheSourceBPS' standard terms and conditions available on our website.",
    invoiceTo: "Tech Solutions Inc",
    invoiceToAddress: "123 Tech Avenue, Suite 101",
    invoiceToEmail: "billing@techsolutions.com",
    invoiceToPhoneNumber: "(800) 555-1234",
    invoiceNumber: makeInvoiceNumber(),
    invoiceDate: new Date().toLocaleDateString(),
    issueDate: new Date().toLocaleDateString(),
    tax: 0,
    discount: 0,
    services: [
        {
            name: "Software Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: 1500,
            quantity: 1
        },
        {
            name: "IT Consulting",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: 1000,
            quantity: 1
        },
        {
            name: "Network Security",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price: 800,
            quantity: 1
        },
    ],
    paymentMethods: [
        {
            name: "Paypal",
            info: "test@paypal.com",
        },
        {
            name: "CardPayment",
            info: "Visa/Mastercard",
        }
    ]

}
const initialData: invoiceType = {
    homeCompanyLogo: require(`@/public/logo.png`).default.src,
    homeAddress: generalInfo.address,
    homeEmail: generalInfo.email,
    homePhoneNumber: generalInfo.phone,
    homeWebsite: generalInfo.website,
    homeTermsAndConditions: "All services rendered are subject to TheSourceBPS' standard terms and conditions available on our website.",

    invoiceTo: "",
    invoiceToAddress: "",
    invoiceToEmail: "",
    invoiceToPhoneNumber: "",
    invoiceNumber: makeInvoiceNumber(),
    invoiceDate: new Date().toLocaleDateString(),
    issueDate: new Date().toLocaleDateString(),
    tax: 0,
    discount: 0,
    services: [],
    paymentMethods: []
}

export default function Page({ searchParams }: { searchParams: { fillData: string } }) {
    const contentToPrint = useRef<HTMLDivElement>(null);

    const [invoice, invoiceSet] = useState<invoiceType>(searchParams.fillData !== undefined ? { ...fillData } : { ...initialData })

    const [customScale, customScaleSet] = useState(1)
    const [showingSettings, showingSettingsSet] = useState(false)

    function updateInvoice<T extends InvoiceFieldType>(fieldName: T, fieldValue: invoiceType[T]) {
        invoiceSet(prevInvoice => {
            const newInvoice = { ...prevInvoice };
            newInvoice[fieldName] = fieldValue;
            return newInvoice;
        });
    }

    const DownloadInvoice = (data: any, filename: string) => {
        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    const uploadInvoice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                if (!e.target) return

                const seenInvoiceData = JSON.parse(e.target.result as string);

                invoiceSet(seenInvoiceData);
            } catch (error) {
                console.error('Error parsing JSON file:', error);
            }
        };

        reader.readAsText(file);
    };

    const handlePrint = useReactToPrint({
        documentTitle: "Invoice for ",
        // onBeforePrint: () => console.log("before printing..."),
        // onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });

    const handleInputFields = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.type === "text") {
            updateInvoice(e.target.name as keyof invoiceType, e.target.value)

        } else if (e.target.type === "number") {
            updateInvoice(e.target.name as keyof invoiceType, parseFloat(e.target.value))

        }
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const arrayBuffer = e.target?.result;
            if (!arrayBuffer) return

            const bytes = new Uint8Array(arrayBuffer as ArrayBuffer);

            // Convert byte array to base64 string
            const base64String = btoa(
                bytes.reduce((data, byte) => data + String.fromCharCode(byte), '')
            );

            // Construct data URL
            const url = `data:image/png;base64,${base64String}`;

            updateInvoice("homeCompanyLogo", url);
        };

        reader.readAsArrayBuffer(file);
    };

    const handleServices = (option: "add" | "sub", subIndex?: number) => {
        if (option === "add") {
            const newService: invoiceService = {
                name: "",
                description: "",
                price: 0,
                quantity: 1
            }

            updateInvoice("services", [...invoice.services, newService])

        } else if (option === "sub") {
            if (subIndex === undefined) return

            const filteredArray = invoice.services.filter((eachService, eachServiceIndex) => eachServiceIndex !== subIndex)

            updateInvoice("services", filteredArray)
        }
    }

    const handlePaymentMethod = (option: "add" | "sub", subIndex?: number) => {
        if (option === "add") {
            const newPaymentMethod: paymentMethod = {
                name: "",
                info: ""
            }

            updateInvoice("paymentMethods", [...invoice.paymentMethods, newPaymentMethod])

        } else if (option === "sub") {
            if (subIndex === undefined) return

            const filteredArray = invoice.paymentMethods.filter((eachPaymentMethod, eachPaymentMethodIndex) => eachPaymentMethodIndex !== subIndex)

            updateInvoice("paymentMethods", filteredArray)
        }
    }

    const totalPrice = useMemo(() => {
        if (!invoice.services) return 0

        return invoice.services.reduce((accumulatedTotal, eachService) => (eachService.price * (eachService.quantity > 0 ? eachService.quantity : 1)) + accumulatedTotal, 0)
    }, [invoice.services])

    const discountValue = useMemo(() => {
        if (invoice.discount > 0) {
            return (invoice.discount / 100) * totalPrice
        } else {
            return 0
        }
    }, [invoice.discount, totalPrice])

    const taxValue = useMemo(() => {
        if (discountValue > 0) {       //calculate disounct cost
            return (invoice.tax / 100) * (totalPrice - discountValue)
        } else {
            return (invoice.tax / 100) * totalPrice
        }
    }, [invoice.tax, discountValue])

    const grandTotalPrice = useMemo(() => {
        return (totalPrice - discountValue) + taxValue
    }, [totalPrice, taxValue, discountValue])

    return (
        <div style={{ display: "flex", position: 'relative', maxHeight: "100svh" }}>
            <div className={styles.scaler} style={{ "--customScale": customScale } as React.CSSProperties}>
                <div ref={contentToPrint} className={styles.invoiceBody}>
                    <Image alt={`invoice template image svg`} src={require(`@/public/invoicebg.svg`).default.src} fill={true} style={{ objectFit: "cover", zIndex: -1 }} />

                    <div style={{ position: "absolute", top: "1.5%", left: "7%" }}>
                        <h2 style={{ textTransform: "uppercase", fontWeight: "bold" }}>Invoice</h2>

                        <div style={{ display: "grid", position: "relative", translate: "0 -10%" }}>
                            <p>Invoice No: {invoice.invoiceNumber}</p>
                            <p>Invoice Date: {invoice.invoiceDate}</p>
                            <p>Issue Date: {invoice.issueDate}</p>
                        </div>
                    </div>

                    <div style={{ position: "absolute", top: "1.5%", left: "77%" }}>
                        <img alt={`logo`} src={invoice.homeCompanyLogo} width={250} height={250} style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ position: "absolute", top: "18%", left: "50%", display: "flex", translate: "-50% 0", gap: "2vw", width: "70%" }}>
                        <div style={{ flex: 1, display: "grid", whiteSpace: "nowrap", textAlign: "right", textTransform: "uppercase", fontWeight: "bold", alignContent: 'flex-start' }}>
                            <p>Invoice To</p>
                            <h3>{invoice.invoiceTo}</h3>
                        </div>

                        <div style={{ height: "8vw", borderLeft: `.2vw solid var(--invoiceSecondaryColor)` }}></div>

                        <div style={{ flex: 1, display: "grid" }}>
                            <p>{invoice.invoiceToAddress}</p>
                            <p>P. {invoice.invoiceToPhoneNumber}</p>
                            <p>M. {invoice.invoiceToEmail}</p>
                        </div>
                    </div>


                    <div style={{ position: "absolute", top: "30%", left: "50%", translate: "-50% 0", width: "85%" }}>
                        <div className={`${styles.tableRowCont} ${styles.tableHeader}`} style={{ textTransform: "uppercase", backgroundColor: "var(--invoiceMainColor)", color: "#fff" }}>
                            <div style={{}}>
                                <p>#</p>
                            </div>

                            <div>
                                <p>Item Description</p>
                            </div>

                            <div>
                                <p>Unit Price</p>
                            </div>

                            <div>
                                <p>Quantity</p>
                            </div>

                            <div>
                                <p>Total</p>
                            </div>
                        </div>

                        {invoice.services.map((eachService, eachServiceIndex) => {
                            return (
                                <div key={eachServiceIndex} className={styles.tableRowCont}>
                                    <div>
                                        <p>{eachServiceIndex + 1}</p>
                                    </div>

                                    <div>
                                        <p className={styles.smallText} style={{ fontWeight: "bold", marginBottom: "1%" }}>{eachService.name}</p>
                                        <p className={styles.smallText}>{eachService.description}</p>
                                    </div>

                                    <div>
                                        <p>{formatter.format(eachService.price)}</p>
                                    </div>

                                    <div>
                                        <p>{eachService.quantity}</p>
                                    </div>

                                    <div>
                                        <p>{formatter.format(eachService.price * eachService.quantity)}</p>
                                    </div>
                                </div>
                            )
                        })}

                        <div className={`${styles.tableRowCont}`}>
                            <div style={{ gridColumn: "span 2", textAlign: "left", paddingTop: "3%", backgroundColor: "transparent" }}>
                                <h3>Terms & Conditions:</h3>
                                <p>{invoice.homeTermsAndConditions}</p>

                                <h3 style={{ marginTop: "4%" }}>Payment Method</h3>

                                {invoice.paymentMethods.map((eachPaymentMethod, eachPaymentMethodIndex) => {
                                    return (
                                        <p key={eachPaymentMethodIndex}><b>{eachPaymentMethod.name}: </b> {eachPaymentMethod.info}</p>
                                    )
                                })}
                            </div>

                            <div style={{ gridColumn: "span 3", backgroundColor: "#eee", padding: '0' }}>
                                <div style={{ padding: "2%" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: "2%" }}>
                                        <p>Sub Total: </p>

                                        <div style={{ borderBottom: ".2vw dotted black", flex: 1, translate: "0 -30%" }}></div>

                                        <p>{formatter.format(totalPrice)}</p>
                                    </div>

                                    {invoice.tax > 0 && (
                                        <div style={{ display: "flex", justifyContent: "space-between", gap: "2%" }}>
                                            <p>Tax Val: {invoice.tax}%</p>

                                            <div style={{ borderBottom: ".2vw dotted black", flex: 1, translate: "0 -30%" }}></div>

                                            <p>{formatter.format(taxValue)}</p>
                                        </div>
                                    )}

                                    {invoice.discount > 0 && (
                                        <div style={{ display: "flex", justifyContent: "space-between", gap: "2%" }}>
                                            <p>Discount Val: {invoice.discount}%</p>

                                            <div style={{ borderBottom: ".2vw dotted black", flex: 1, translate: "0 -30%" }}></div>

                                            <p>{formatter.format(discountValue)}</p>
                                        </div>
                                    )}
                                </div>

                                <div style={{ alignSelf: "flex-end", display: "flex", justifyContent: 'space-between', fontWeight: "bold", backgroundColor: "var(--invoiceSecondaryColor)", padding: "2%", color: "#fff" }}>
                                    <p>Grand Total:</p>
                                    <p>{formatter.format(grandTotalPrice)}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div style={{ position: "absolute", bottom: "0%", left: 0, width: "100%", display: "grid", padding: "2vw 4vw 3vw 4vw" }}>
                        <div style={{ display: "flex", justifySelf: "flex-end", marginBottom: "8vw", gap: "1vw" }}>
                            <p>Signature:</p>

                            <div style={{ borderBottom: ".1vw solid #000", minWidth: "30vw" }}>
                                <p></p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: "#fff", maxWidth: "35vw" }}>{invoice.homeAddress}</p>

                            <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
                                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                                    <div style={{ backgroundColor: "var(--invoiceMainColor)", padding: ".5vw", display: "grid", alignItems: "center", justifyItems: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    </div>

                                    <div style={{ display: "grid" }}>
                                        <p>{invoice.homePhoneNumber}</p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                                    <div style={{ backgroundColor: "var(--invoiceMainColor)", padding: ".5vw", display: "grid", alignItems: "center", justifyItems: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                    </div>

                                    <div style={{ display: "grid", alignContent: "flex-start" }}>
                                        <p>{invoice.homeWebsite}</p>
                                        <p>{invoice.homeEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {!showingSettings && (
                <div onClick={() => { showingSettingsSet(true) }} style={{ position: 'absolute', top: "50%", right: "1rem", translate: "0 -50%", rotate: "90deg", }}>
                    <svg style={{ width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" /></svg>
                </div>
            )}

            <div className={styles.settingsCont} style={{ display: !showingSettings ? "none" : '' }}>
                <div style={{ display: "flex", gap: ".5rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
                    <button className="mainButton" style={{}} onClick={() => {
                        showingSettingsSet(false)
                    }}>
                        Close
                    </button>

                    <button className="mainButton" style={{}} onClick={() => {
                        handlePrint(null, () => contentToPrint.current);
                    }}>
                        Print
                    </button>
                </div>

                <label htmlFor="volume">Zoom</label>
                <input type="range" id="volume" value={customScale} name="volume" min=".5" max="3" step={.5} onChange={(e) => {
                    customScaleSet(parseFloat(e.target.value))
                }} />

                <ShowMore
                    label="Invoice No"
                    content={
                        <div style={{ display: "grid" }}>
                            <button className="mainButton" style={{ justifySelf: "flex-end" }} onClick={() => { updateInvoice("invoiceNumber", makeInvoiceNumber()) }}>New Invoice No.</button>

                            <TextInput name="invoiceNumber" labelName="Invoice Number" placeHolder="Enter Invoice Number" value={invoice.invoiceNumber} onChange={handleInputFields} />

                            <TextInput name="invoiceDate" labelName="Invoice Date" placeHolder="Enter Invoice Date" value={invoice.invoiceDate} onChange={handleInputFields} />

                            <TextInput name="issueDate" labelName="Issue Date" placeHolder="Enter Issue Date" value={invoice.issueDate} onChange={handleInputFields} />
                        </div>
                    } />

                <ShowMore
                    label="Invoice To Details"
                    content={
                        <div style={{ display: "grid" }}>
                            <TextInput name="invoiceTo" labelName="Recipient Name" placeHolder="Enter Recipient Name" value={invoice.invoiceTo} onChange={handleInputFields} />

                            <TextInput name="invoiceToAddress" labelName="Recipient Address" placeHolder="Enter Recipient Address" value={invoice.invoiceToAddress} onChange={handleInputFields} />

                            <TextInput name="invoiceToPhoneNumber" labelName="Recipient Phone Number" placeHolder="Enter Recipient Phone Number" value={invoice.invoiceToPhoneNumber} onChange={handleInputFields} />

                            <TextInput name="invoiceToEmail" labelName="Recipient Email" placeHolder="Enter Recipient Email" value={invoice.invoiceToEmail} onChange={handleInputFields} />

                            <div className={`snap ${styles.paymentMethodCont}`} style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "100%", gap: "1rem", overflowX: "auto", marginTop: "1rem", paddingBottom: ".5rem" }}>
                                {invoice.paymentMethods.map((eachPaymentMethod, eachPaymentMethodIndex) => {
                                    return (
                                        <div key={eachPaymentMethodIndex} style={{ display: "grid", backgroundColor: "#f5deb3", padding: "1rem" }}>
                                            <button style={{ justifySelf: "flex-end" }} className="mainButton" onClick={() => {
                                                handlePaymentMethod("sub", eachPaymentMethodIndex)
                                            }}>delete</button>

                                            <TextInput name={`payment method name ${eachPaymentMethodIndex}`} labelName={"Payment Method Name"} placeHolder="Enter Payment Method Name" value={eachPaymentMethod.name}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newPaymentMethodArray = [...invoice.paymentMethods]
                                                    newPaymentMethodArray[eachPaymentMethodIndex].name = e.target.value

                                                    updateInvoice("paymentMethods", newPaymentMethodArray)
                                                }} />

                                            <TextInput name={`payment method info ${eachPaymentMethodIndex}`} labelName={"Payment Method Info"} placeHolder="Enter Payment Method Info" value={eachPaymentMethod.info}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newPaymentMethodArray = [...invoice.paymentMethods]
                                                    newPaymentMethodArray[eachPaymentMethodIndex].info = e.target.value

                                                    updateInvoice("paymentMethods", newPaymentMethodArray)
                                                }} />
                                        </div>
                                    )
                                })}
                            </div>

                            <button className="mainButton" style={{ justifySelf: "flex-end", margin: "1rem" }} onClick={() => { handlePaymentMethod("add") }}>Add Payment Method</button>
                        </div>
                    } />

                <ShowMore
                    label="Services"
                    content={
                        <div style={{ display: "grid" }}>
                            <TextInput type="number" name="tax" labelName={"Tax Amount"} placeHolder="Set The Tax Amount" value={`${invoice.tax}`} onChange={handleInputFields} />

                            <TextInput type="number" name="discount" labelName={"Discount Amount"} placeHolder="Set The Discount Amount" value={`${invoice.discount}`} onChange={handleInputFields} />

                            <div className={`snap ${styles.servicesCont}`} style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "100%", gap: "1rem", overflowX: "auto", marginTop: "1rem", paddingBottom: ".5rem" }}>
                                {invoice.services.map((eachService, eachServiceIndex) => {
                                    return (
                                        <div key={eachServiceIndex} style={{ display: "grid", backgroundColor: "#f5deb3", padding: "1rem" }}>
                                            <button style={{ justifySelf: "flex-end" }} className="mainButton" onClick={() => {
                                                handleServices("sub", eachServiceIndex)
                                            }}>delete</button>

                                            <TextInput name={`service name ${eachServiceIndex}`} labelName={"Service Name"} placeHolder="Enter Service Name" value={eachService.name}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newServicesArray = [...invoice.services]
                                                    newServicesArray[eachServiceIndex].name = e.target.value

                                                    updateInvoice("services", newServicesArray)
                                                }} />

                                            <TextInput name={`service description ${eachServiceIndex}`} labelName={"Service Description"} placeHolder="Enter Service Description" value={eachService.description}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newServicesArray = [...invoice.services]
                                                    newServicesArray[eachServiceIndex].description = e.target.value

                                                    updateInvoice("services", newServicesArray)
                                                }} />

                                            <TextInput type="number" name={`service price ${eachServiceIndex}`} labelName={"Service Price"} placeHolder="Enter Service Price" value={`${eachService.price}`}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newServicesArray = [...invoice.services]
                                                    newServicesArray[eachServiceIndex].price = parseFloat(e.target.value)

                                                    updateInvoice("services", newServicesArray)
                                                }} />

                                            <TextInput type="number" name={`service quantity ${eachServiceIndex}`} labelName={"Service Quantity"} placeHolder="Enter Service Quantity" value={`${eachService.quantity}`}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newServicesArray = [...invoice.services]
                                                    console.log(`$e`, e.target.value);
                                                    newServicesArray[eachServiceIndex].quantity = parseInt(e.target.value)

                                                    updateInvoice("services", newServicesArray)
                                                }} />
                                        </div>
                                    )
                                })}
                            </div>

                            <button className="mainButton" style={{ justifySelf: "flex-end", margin: "1rem" }} onClick={() => { handleServices("add") }}>Add Service</button>
                        </div>
                    } />

                <ShowMore
                    label="Home Company Details"
                    content={
                        <div style={{ display: "grid" }}>
                            <button className="mainButton" style={{ justifySelf: 'flex-start' }}>
                                <label htmlFor="logoUpload" style={{ cursor: "pointer" }}>Change Logo</label>
                            </button>

                            <input id="logoUpload" type="file" accept="image/*" onChange={handleImageUpload} hidden />

                            <TextInput name="homeAddress" labelName="Company Address" placeHolder="Enter Address" value={invoice.homeAddress} onChange={handleInputFields} />

                            <TextInput name="homePhoneNumber" labelName="Company Phone Number" placeHolder="Enter Phone Number" value={invoice.homePhoneNumber} onChange={handleInputFields} />

                            <TextInput name="homeWebsite" labelName="Company Website" placeHolder="Enter Website" value={invoice.homeWebsite} onChange={handleInputFields} />

                            <TextInput name="homeEmail" labelName="Company Email" placeHolder="Enter Email" value={invoice.homeEmail} onChange={handleInputFields} />

                            <TextInput name="homeTermsAndConditions" labelName="Terms & Conditions" placeHolder="Enter Terms" value={invoice.homeTermsAndConditions} onChange={handleInputFields} />
                        </div>
                    } />


                <ShowMore
                    label="Settings"
                    content={
                        <div style={{ display: "grid", alignContent: "flex-start", gap: "1rem", justifyItems: "flex-start" }}>
                            <input id="uploadJSON" type="file" accept=".json" onChange={uploadInvoice} hidden />

                            <button className="mainButton">
                                <label htmlFor="uploadJSON">Upload Invoice Settings</label>
                            </button>

                            <button className="mainButton" onClick={() => DownloadInvoice(invoice, 'invoiceData')}>
                                Download Invoice Settings
                            </button>


                            <MainButton link="?fillData=true" text="View Test Data" target="blank_" />
                        </div>} />
            </div>
        </div>
    )
}
























//style={{ "--dynamicHSize": `${fontSizes.large}px` } as React.CSSProperties}


// const [fontScaleMultiplyer, fontScaleMultiplyerSet] = useState(1)

// const fontSizes = useMemo(() => {
//     const fontBase = 35 * fontScaleMultiplyer

//     return {
//         large: fontBase * 6,
//         medium: fontBase * 2,
//         normal: fontBase
//     }

// }, [fontScaleMultiplyer])

// function calculateScaling(elWidth: number, containerWidth: number) {
//     return containerWidth / elWidth
// }

    // //get correct font size scaling based on container width
    // useEffect(() => {
    //     function setProperScale() {
    //         fontScaleMultiplyerSet(calculateScaling(2550, contentToPrint.current!.offsetWidth))
    //     }
    //     setProperScale()

    //     window.addEventListener("resize", setProperScale)

    //     return () => {
    //         window.removeEventListener("resize", setProperScale)
    //     }
    // }, [])