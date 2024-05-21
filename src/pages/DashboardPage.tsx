import { Link } from "react-router-dom"
import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from "framer-motion"

export function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col md:overflow-hidden">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        to="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Package2 className="h-6 w-6" />
                    </Link>
                    <Link
                        to="#"
                        className="text-foreground transition-colors hover:text-foreground">
                        Home
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground">
                        ...
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground">
                        ...
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground">
                        ...
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground">
                        ...
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                to="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                            </Link>
                            <Link to="#" className="hover:text-foreground">
                                Home
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Aaaa
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Bbbb
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Ccc
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Ddd
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <AnimatePresence>

                    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1.0 }} >
                            <Card >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Founded Words
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">1/871</div>
                                    <p className="text-xs text-muted-foreground">
                                        Level: A1
                                    </p>
                                </CardContent>
                            </Card></motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1.5 }} > <Card x-chunk="dashboard-01-chunk-1">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Completed Sentences
                                </CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1/100</div>
                                <p className="text-xs text-muted-foreground">
                                    Level: A1
                                </p>
                            </CardContent>
                        </Card>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 2 }} >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Spended Time</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">30 Hour</div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 2.5 }} >
                            <Card>
                            <CardHeader  className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle  className="text-xl font-medium">A2</CardTitle>
                                <CardDescription className="text-xl">Next Level</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground">+25% from last week</div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={25} aria-label="25% increase" />
                            </CardFooter>
                        </Card></motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 3 }} className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card className="col-span-4" >
                            <CardHeader className="flex flex-row items-center">
                                <div className="grid gap-2">
                                    <CardTitle>Last Words</CardTitle>
                                    <CardDescription>
                                        Last learned words
                                    </CardDescription>
                                </div>
                                <Button asChild size="sm" className="ml-auto gap-1">
                                    <Link to="/play">
                                        Play
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </Button>

                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>English</TableHead>
                                            <TableHead className="text-right">Turkish</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="capitalize">
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">wind</div>
                                            </TableCell>
                                            <TableCell className="text-right">rüzgar</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">trouble</div>
                                            </TableCell>
                                            <TableCell className="text-right">sorun</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">summer</div>
                                            </TableCell>
                                            <TableCell className="text-right">yaz</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">since</div>
                                            </TableCell>
                                            <TableCell className="text-right">beri</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">use</div>
                                            </TableCell>
                                            <TableCell className="text-right">kullanım</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Button asChild size="lg" className="ml-auto items-center justify-center flex gap-1">
                                    <Link to="#">
                                        View All
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </Button>

                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}
