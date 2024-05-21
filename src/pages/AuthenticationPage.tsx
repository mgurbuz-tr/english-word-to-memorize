import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import { AnimatePresence, motion } from 'framer-motion';

export default function AuthenticationPage(props: { setToken: Function }) {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: "-55%" }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1.5 }} >

                <Tabs defaultValue="login" className="w-[400px] max-w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">

                        <LoginPage setToken={props.setToken} />

                    </TabsContent>
                    <TabsContent value="signup">
                        <SignUpPage />
                    </TabsContent>
                </Tabs>
            </motion.div>
        </AnimatePresence>
    )
}