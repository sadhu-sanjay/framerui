import MaxWidthWrapper from "~/components/shared/max-width-wrapper"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <div
            className="dark:bg-gradient-to-l dark:from-slate-800
             dark:to-slate-900 first-letter:bg-red-100 w-100 h-100 
             p-4 sm:p-10 lg:p-20"
        >
            {children}
        </div>
    </section>
}