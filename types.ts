import Z from "zod"


export const reviewFormSchema = Z.object({
    id: Z.string().min(1),
    name: Z.string().min(1),
    testimonial: Z.string().min(3),
    title: Z.string().min(1),
    image: Z.string(),
    accepted: Z.boolean(),
    dateSubmitted: Z.date()
})
export const newReviewFormSchema = reviewFormSchema.omit({ dateSubmitted: true, id: true })

export type reviewForm = Z.infer<typeof reviewFormSchema>
export type newReviewForm = Z.infer<typeof newReviewFormSchema>

