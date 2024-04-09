import ReviewForm from "@/components/reviewForm/ReviewForm"

export default async function Page() {

    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Leave A Review</h1>
            </section>

            <section style={{ display: "grid", justifyItems: 'center' }}>
                <ReviewForm />
            </section>
        </main>
    )
}
