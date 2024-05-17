import * as React from 'react';
import Z from "zod"

export const userFormSchema = Z.object({
    name: Z.string().min(1),
    email: Z.string().min(1),
    company: Z.string().min(1).nullable(),
    message: Z.string().min(1),
})

export type userForm = Z.infer<typeof userFormSchema>

export const EmailTemplate = ({ name, email, company, message }: userForm) => (
    <div>
        <h1>{name} has contacted you!</h1>

        {company && <h2>Company: {company}</h2>}

        <p>Email: {email}</p>

        <p>{message}</p>
    </div>
);
