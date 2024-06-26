
import { AlertTriangle } from 'lucide-react';

interface FormErrorProps
{
    message?: string;
}

export const FormErrorMessage =
    (
        { message }: FormErrorProps) =>
    {
        if (!message) return null;

        return (
            <div className=" bg-destructive/30 p-3 rounded-md flex  items-center gap-x-2  text-destructive">
                <AlertTriangle className=' h-4 w-4' />
                <p>{message}</p>
            </div>
        )
    }

