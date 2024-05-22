import React, { useState } from 'react';
import Backdrop from './BackdropComponent';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

export default function AlertComponent(props: { onClick: () => void, showAlert: boolean, state: boolean, header: string, description: string }) {

    return (
        <div onClick={()=>{props.onClick();}}>
            <Backdrop show={props.showAlert} />
            {props.showAlert && (
                <Alert>
                    <Terminal size={16} />
                    <AlertTitle>{props.header}</AlertTitle>
                    <AlertDescription>
                        {props.description}
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
};