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



export default function PlayPage() {

    const [connection, setConnection] = useState<HubConnection>();
    const [en, setEn] = useState<string>();
    const [tr, setTr] = useState<string>();
    const [count, setCount] = useState<number>(0);
    const [inputData, setInputData] = useState<string>();
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


    return (
        <div className="container">
            <div className="flex h-screen justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>New Word</CardTitle>
                        <CardDescription>{tr} | Try Count : {solutions.filter(s => s.isValid == false).length}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center items-center pb-5">
                            <div className="flex-initial">
                                <InputOTP maxLength={en?.length!} pattern={REGEXP_ONLY_CHARS} className="uppercase" value={inputData} onChange={(inp) => { setInputData(inp) }} onComplete={(cmp, aaa) => {
                                    var arr = [...solutions];
                                    arr.push({ answer: cmp, isValid: cmp.toLocaleLowerCase() == en!.toLocaleLowerCase() });
                                    setSolutions(arr);
                                    setInputData("");
                                    
                                }}>
                                    <InputOTPGroup>
                                        {(en != null && [...en!].map((char, index) => {
                                            return (
                                                <><InputOTPSlot key={index} index={index} className="uppercase" /></>);
                                        }))}

                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <div className="flex-initial pl-2">
                                <Badge variant="outline">Badge</Badge>
                            </div>
                        </div>
                        {solutions.map(s => {
                            return <>
                                <div className="flex justify-center items-center pb-5">
                                    <div className="flex-initial">
                                        <InputOTP maxLength={s.answer.length} pattern={REGEXP_ONLY_CHARS} className="uppercase" value={s.answer}>
                                            <InputOTPGroup>
                                                {(s.answer != null && [...s.answer!].map((char, index) => {
                                                    return (
                                                        <><InputOTPSlot key={index} index={index} className="uppercase" /></>);
                                                }))}

                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                    <div className="flex-initial pl-2">
                                        <Badge variant="outline">{s.isValid ? "True" : "False"}</Badge>
                                    </div>
                                </div>
                            </>
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