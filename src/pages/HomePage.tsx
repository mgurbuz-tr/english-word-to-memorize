import { Dashboard } from "./DashboardPage";

export default function HomePage() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <Dashboard />
            </div>
        </div>
    )
}