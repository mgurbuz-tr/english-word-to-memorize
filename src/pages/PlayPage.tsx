import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { createSignalRConnection, disconnectSignalR } from "@/service/wordshub";
import { HubConnection } from "@microsoft/signalr";
import { REGEXP_ONLY_CHARS } from "input-otp"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import OtpComponent from "@/components/OtpComponent";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import AlertComponent from "@/components/AlertComponent";


export default function PlayPage() {

    const [connection, setConnection] = useState<HubConnection>();
    const [en, setEn] = useState<string>();
    const [tr, setTr] = useState<string>();
    const [solutions, setSolutions] = useState<Array<{ "answer": string, "isValid": boolean }>>(new Array());

    useEffect(() => {
        async function createConnection() {

            if (connection != null) return;
            var cnn = await createSignalRConnection();
            setConnection(cnn);
            cnn.invoke("SendMessage", "a", "b");
            cnn.on("word", (en, tr) => {
                setEn(en);
                setTr(tr);
            })
        }
        createConnection();
    }, [connection]);


    const onFalse = (guess: string) => {
        setSolutions([...solutions, { "answer": guess, "isValid": false }]);
        if (checkCount() == 3) {

        }
    }

    const onTrue = () => {

        // setSolutions([...solutions, { "answer": en!, "isValid": true }]);
    }

    const checkCount = () => {
        return solutions.filter(s => s.isValid == false).length;
    }

    return (
        <div className="container">
            <div className="flex h-screen justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>New Word</CardTitle>
                        <CardDescription>{tr} | Try Count : {solutions.filter(s => s.isValid == false).length}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <>
                            <OtpComponent guessTest="" isReadonly={false} onFalse={onFalse} onTrue={onTrue} trueValue={en} key="guess" />
                        </>

                        {solutions.map((s, i) => {
                            return (
                                <>
                                    <OtpComponent isReadonly={true} guessTest={s.answer} key={i} trueValue="" onTrue={() => { }} onFalse={() => { }} />
                                </>)
                        })}
                    </CardContent>
                    <CardFooter>
                        <Button><Link to="/">Close</Link></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}