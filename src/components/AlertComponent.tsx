import React, { useState } from 'react';
import Backdrop from './BackdropComponent';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

export default function AlertComponent() {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <>
            <Backdrop show={showAlert} />
            {showAlert && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app using the cli.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
};