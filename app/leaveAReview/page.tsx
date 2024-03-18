import ReviewForm from "@/components/reviewForm/ReviewForm"
import Z from "zod"

export const reviewFormSchema = Z.object({
    name: Z.string().min(1),
    testimonial: Z.string().min(3),
    title: Z.string().min(1),
    image: Z.string(),
    accepted: Z.boolean(),
    dateSubmitted: Z.date()
})
export const newReviewFormSchema = reviewFormSchema.omit({ dateSubmitted: true })

export type reviewForm = Z.infer<typeof reviewFormSchema>
export type newReviewForm = Z.infer<typeof newReviewFormSchema>


export default async function Page() {

    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Leave A Review</h1>
            </section>

            <section>
                <ReviewForm />
            </section>
        </main>
    )
}
