import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon, Terminal } from "lucide-react"

export default function AlertPage() {
    return (
        <>
            <h1 className="font-bold">Page: Alert</h1>
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Success! Your changes have been saved</AlertTitle>
                <AlertDescription>
                    This is an alert with icon, title and description.
                </AlertDescription>
            </Alert>
            <Alert>
                <PopcornIcon />
                <AlertTitle>
                    This Alert has a title and an icon. No description.
                </AlertTitle>
            </Alert>
            <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Unable to process your payment.</AlertTitle>
                <AlertDescription>
                    <p>Please verify your billing information and try again.</p>
                    <ul className="list-inside list-disc text-sm">
                        <li>Check your card details</li>
                        <li>Ensure sufficient funds</li>
                        <li>Verify billing address</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </>
    )
}