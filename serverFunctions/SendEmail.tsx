"use server"
import { EmailTemplate, userForm } from '@/components/EmailTemplate';
import { Resend } from 'resend';

export const sendEmail = async ({ name, message, email, company }: userForm) => {
    try {
        const resend = new Resend('re_JH3bH1ex_72QEoK67koaNvwCLVGa9osch');

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "romario@thesourcebps.com",
            subject: `new customer inquiry ${name}`,
            react: <EmailTemplate name={name} email={email} company={company} message={message} />,
        });

        console.log(`$sending mail succesfully `);

        return true
    } catch (error) {
        console.log(`$error sending email`, error);
        return false
    }
}