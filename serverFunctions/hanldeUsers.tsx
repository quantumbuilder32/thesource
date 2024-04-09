"use server"
import 'dotenv/config'

export async function AuthenticateAdminUser(username: string, password: string) {

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {
        return true
    } else {
        return false
    }
}