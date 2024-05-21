import { REGEXP_ONLY_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { useState } from "react";
import _ from 'lodash';
import { Badge } from "./ui/badge";


export default function OtpComponent(
    props: {
        trueValue: string | undefined,
        onTrue: () => void | null,
        onFalse: (data: string) => void | null,
        isReadonly: boolean | null,
        guessTest: string | undefined
    }) {
    const [otpText, setOtpText] = useState<string>();
    const { trueValue, onTrue, onFalse, isReadonly, guessTest } = props;
    const onComplete = (cmp: string) => {
        var isTrue = cmp.toLocaleLowerCase() == trueValue?.toLocaleLowerCase();
        if (isTrue) {
            onTrue();
        } else {
            onFalse(cmp!);
        }
        setOtpText("");
    }
    if (!isReadonly)
        return (
            <div className="flex pb-5">
                <div className="flex-initial">
                    <InputOTP
                        maxLength={trueValue?.length!}
                        pattern={REGEXP_ONLY_CHARS}
                        className="uppercase"
                        value={otpText}
                        onChange={(inp) => { setOtpText(inp) }} onComplete={onComplete}>
                        <InputOTPGroup>
                            {(trueValue != null && [...trueValue!].map((char, index) => {
                                return (
                                    <><InputOTPSlot key={index} index={index} className="uppercase" /></>);
                            }))}

                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <div className="flex-initial pl-2 ">
                    <Badge variant="outline" className="hidden"></Badge>
                </div>
            </div>
        );
    else
        return (
            <div className="flex justify-center items-center pb-5">
                <div className="flex-initial">
                    <InputOTP maxLength={guessTest!.length} pattern={REGEXP_ONLY_CHARS} className="uppercase" value={guessTest!}>
                        <InputOTPGroup>
                            {(guessTest != null && [...guessTest!].map((char, index) => {
                                return (
                                    <><InputOTPSlot key={index} index={index} className="uppercase" /></>);
                            }))}

                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <div className="flex-initial pl-2">
                    <Badge variant="destructive">False</Badge>
                </div>
            </div>
        );
}