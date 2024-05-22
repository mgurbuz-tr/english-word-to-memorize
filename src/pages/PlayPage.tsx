import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { createSignalRConnection } from "@/service/wordshub";
import { HubConnection } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import OtpComponent from "@/components/OtpComponent";
import { AnimatePresence, motion } from "framer-motion";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import AlertComponent from "@/components/AlertComponent";
export default function PlayPage() {

    const [connection, setConnection] = useState<HubConnection>();
    const [en, setEn] = useState<string>();
    const [tr, setTr] = useState<string>();
    const [solutions, setSolutions] = useState<Array<{ "answer": string, "isValid": boolean }>>(new Array());
    const [timerKey, setTimerKey] = useState(0);
    const [isSuccess, setIsSuccess] = useState<boolean | null>();
    const lifeCount = 5;
    useEffect(() => {
        async function createConnection() {

            if (connection != null) return;
            var cnn = await createSignalRConnection();
            setConnection(cnn);
            cnn.invoke("SendMessage", "a", "b");
            cnn.on("word", (en, tr) => {
                setIsSuccess(null);
                setTimerKey(prevKey => prevKey + 1);
                setEn(en);
                setTr(tr);
                setSolutions([]);
            })
        }
        createConnection();
    }, [connection]);


    function addSolitionItem(item: { "answer": string, "isValid": boolean }) {
        var sln = [...solutions];
        sln = _.concat(item, sln);
        sln.push();
        setSolutions(sln);
    }
    const onFalse = (guess: string) => {
        console.log(isSuccess);
        setTimerKey(prevKey => prevKey + 1);
        addSolitionItem({ "answer": guess, "isValid": false });
        if (lifeCount - checkCount() <= 1) {
            setIsSuccess(false);
        }
    }

    const onTrue = () => {
        setIsSuccess(true);
    }

    const checkCount = () => {
        return solutions.filter(s => s.isValid == false).length;
    }

    const onTimeComplete = () => {
        addSolitionItem({ "answer": getWhitespaceText(en!.length), "isValid": false });
        setTimerKey(prevKey => prevKey + 1);
        if (lifeCount - checkCount() <= 1) {
            setIsSuccess(false);
        }
    }

    function getWhitespaceText(len :number){
        let text ="";
        for (let index = 0; index < len; index++) {
            text+=" ";
        }
        return text;
    }

    return (
        <div className="container">
            <div className="flex h-screen justify-center items-center pl-10">
                {isSuccess != null && <div className="absolute z-50" style={{ width: '300px' }} >
                    <AlertComponent
                        onClick={() => { connection?.invoke("GetNextWord"); }}
                        showAlert={checkCount() == lifeCount || isSuccess}
                        header={isSuccess! ? "Congratulations" : "You didn't know!"}
                        description={isSuccess! ? "You have successfully guessed the word" : "You have failed to guess the word!"}
                        state={isSuccess!}
                    />
                </div>}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <CountdownCircleTimer
                                size={100}
                                key={timerKey}
                                isPlaying={(lifeCount - checkCount() > 0)}
                                duration={10}
                                colors={['#0F172A', '#0F172A', '#0F172A', '#0F172A']}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={onTimeComplete}
                            >
                                {({ remainingTime }) => (
                                    <div className="text-xs flex flex-col justify-center items-center">
                                        <span>{remainingTime}</span>
                                        <span>Seconds</span>
                                    </div>)}
                            </CountdownCircleTimer>
                        </CardTitle>
                        <CardDescription>
                            <div className="flex flex-col justify-center items-center">
                                <span className="uppercase text-xl">{tr}</span>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                {(lifeCount - checkCount() > 0) && Array.from(Array(lifeCount - checkCount())).map((s) => {
                                    return <img width={20} src="src/assets/hearth.png" alt="placeholder" />
                                })}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AnimatePresence key={"src"}>
                            {(lifeCount - checkCount() != 0) && <motion.div key={"src-motion"} initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 2 }}>
                                <OtpComponent key='editable' guessTest="" isReadonly={false} onFalse={onFalse} onTrue={onTrue} trueValue={en} />
                            </motion.div>}
                            {solutions.map((s, i) => {
                                return (
                                    <motion.div key={"dest" + i} initial={{ y: '-20%' }} animate={{ y: '0%' }} transition={{ duration: 0.2 }}>
                                        <OtpComponent isReadonly={true} guessTest={s.answer} key={i} trueValue="" onTrue={() => { }} onFalse={() => { }} />
                                    </motion.div>
                                )
                            })
                            }
                        </AnimatePresence>
                    </CardContent>
                    <CardFooter>
                        <Button><Link to="/">Close</Link></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}