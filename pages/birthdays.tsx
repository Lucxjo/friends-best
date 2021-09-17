import { Title, Paragraph, Heading } from "../components";
import DatePicker from 'react-datepicker'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"
import CopyToClipboard from "react-copy-to-clipboard";
import moment from "moment";
import Head from "next/head";

export default function BirthdaysPage() {
    const [date, setDate] = useState(new Date());
    const [copied, setCopied] = useState("Copy!");
    return (
        <>
        <Head>
            <meta name="description" content="A command generator for UtiliBots' birthday bot." />
            <meta property="og:description" content="A command generator for UtiliBots' birthday bot."/>
        </Head>
        <div className="min-h-screen min-w-full bg-gray-400 dark:bg-gray-800">
            <Title>Birthdays</Title>
            <Paragraph>You can generate your birthday command here for UtiliBots&apos; birthday bot.</Paragraph>
            <Heading>I was born on the...</Heading>
            <Paragraph>The format is <strong>DD/MM</strong>.</Paragraph>
            <DatePicker className="mx-4 dark:text-gray-300 dark:bg-gray-500 bg-white" selected={date} onChange={
                // @ts-ignore
                date => {setDate(date); setCopied("Copy!");}
            }
            dateFormat="dd/MM" />
            <Heading>Command to set your birthday: </Heading>
            <Paragraph>{`bd!setup ${Intl.DateTimeFormat().resolvedOptions().timeZone} ${moment(date).format("MM/DD")}`}</Paragraph>
            <CopyToClipboard onCopy={() => setCopied("Copied!")} text={`bd!setup ${Intl.DateTimeFormat().resolvedOptions().timeZone} ${date.getMonth()+1}/${date.getDate()}`}>
                <button className="mx-4 px-4 dark:text-gray-300 dark:bg-gray-500 bg-white">{copied}</button>
            </CopyToClipboard>
        </div>
        </>
    );
}