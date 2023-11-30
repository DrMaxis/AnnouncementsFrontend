import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {useState} from 'react'
import {
    Box,
    Text,
    Heading,
    Stack,
    useColorModeValue,
    VStack,
    HStack,
    Link,
    TabPanel,
    Tab, TabList, Tabs, TabPanels
} from "@chakra-ui/react";
import {announcements} from "../static";
import Markdown from 'react-markdown'
import {formatDate, getStaticPath} from "../lib/helpers";
import rehypeRaw from 'rehype-raw'
import Paginate from "../components/paginate";
import axios from "axios";


export async function getServerSideProps() {
    const announcementRequest = await axios
        .post(getStaticPath('/api/announcements'))
        .catch((e) => {
            console.log(e);
        });

    return {
        props: {
            dynamicAnnouncements: announcementRequest.data.data,
        },
    };
}

export default function Nocssreset({dynamicAnnouncements}) {
    const [staticAnnouncements, setStaticAnnouncements] = useState(announcements);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const announcementSlice = (announcements) => {
        return    announcements.slice(indexOfFirstPost, indexOfLastPost);
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>GA | Announcements</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={'main-container'}>
                <h1 className={styles.title}>
                    GA | Announcements - No Chakra Ui Resets
                </h1>

                <p className={styles.description}>
                    This is a template homepage showcasing paginated Announcements
                </p>

                <Text className={styles.description}>
                    Dummy Markdown data from {' '}
                    <Link
                        textDecoration={'underline'}
                        href={'https://markdown-it.github.io/'}>
                        Markdown-it
                    </Link>
                </Text>


                <Tabs mt={'20'}>
                    <TabList>
                        <Tab>Static Announcements</Tab>
                        <Tab>Dynamic Announcements (API Fetched)</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Box width={'100%'} mt={'20'}>
                                <VStack spacing={'10'}>
                                    {announcementSlice(staticAnnouncements).map((announcement, index) => (
                                        <Box
                                            w={'100%'}
                                            maxWidth={'1000'}
                                            key={index}
                                            py={6}
                                            border={'1px solid black'}
                                            bg={useColorModeValue('white', 'gray.900')}
                                            boxShadow={'2xl'}
                                            rounded={'md'}
                                            p={6}
                                            overflow={'hidden'}
                                            maxHeight={'50vh'}
                                            overflowY='auto'
                                            css={{
                                                '&::-webkit-scrollbar': {
                                                    width: '4px',
                                                },
                                                '&::-webkit-scrollbar-track': {
                                                    width: '6px',
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    background: 'gray',
                                                    borderRadius: '24px',
                                                },
                                            }}
                                        >
                                            <Stack w={'full'}>
                                                <Heading
                                                    color={useColorModeValue('gray.700', 'white')}
                                                    fontSize={'2xl'}
                                                    fontFamily={'body'}>
                                                    {announcement.title}
                                                </Heading>

                                                <HStack direction={'column'} spacing={10} fontSize={'sm'}>
                                                    <Text
                                                        color={useColorModeValue('gray.700', 'gray.400')}
                                                        px={3}>
                                                        Author: {' '}
                                                        <Text as="span" fontWeight={600}>{announcement.author}</Text>
                                                    </Text>
                                                    <Text color={'gray.500'}>{formatDate(announcement.date)}</Text>
                                                </HStack>
                                                <Heading>
                                                    Announcement Content
                                                </Heading>
                                                <Markdown rehypePlugins={[rehypeRaw]}>{announcement.content}</Markdown>
                                            </Stack>
                                        </Box>
                                    ))}
                                </VStack>
                                <Paginate
                                    announcements={staticAnnouncements}
                                    postsPerPage={postsPerPage}
                                    totalPosts={staticAnnouncements.length}
                                    currentPage={currentPage}
                                    paginate={paginate}
                                    setCurrentPage={setCurrentPage}

                                />
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box width={'100%'} mt={'20'}>
                                <VStack spacing={'10'}>
                                    {announcementSlice(dynamicAnnouncements).map((announcement, index) => (
                                        <Box
                                            w={'100%'}
                                            maxWidth={'1000px'}
                                            key={index}
                                            py={6}
                                            border={'1px solid black'}
                                            bg={useColorModeValue('white', 'gray.900')}
                                            boxShadow={'2xl'}
                                            rounded={'md'}
                                            p={6}
                                            overflow={'hidden'}
                                            maxHeight={'50vh'}
                                            overflowY='auto'
                                            css={{
                                                '&::-webkit-scrollbar': {
                                                    width: '4px',
                                                },
                                                '&::-webkit-scrollbar-track': {
                                                    width: '6px',
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    background: 'gray',
                                                    borderRadius: '24px',
                                                },
                                            }}
                                        >
                                            <Stack w={'full'}>
                                                <Heading
                                                    color={useColorModeValue('gray.700', 'white')}
                                                    fontSize={'2xl'}
                                                    fontFamily={'body'}>
                                                    {announcement.title}
                                                </Heading>

                                                <HStack direction={'column'} spacing={10} fontSize={'sm'}>
                                                    <Text
                                                        color={useColorModeValue('gray.700', 'gray.400')}
                                                        px={3}>
                                                        Author: {' '}
                                                        <Text as="span" fontWeight={600}>{announcement.author}</Text>
                                                    </Text>
                                                    <Text color={'gray.500'}>{formatDate(announcement.date)}</Text>
                                                </HStack>
                                                <Heading>
                                                    Announcement Content
                                                </Heading>
                                                <Markdown rehypePlugins={[rehypeRaw]}>{announcement.content}</Markdown>
                                            </Stack>
                                        </Box>
                                    ))}
                                </VStack>
                                <Paginate
                                    announcements={dynamicAnnouncements}
                                    postsPerPage={postsPerPage}
                                    totalPosts={dynamicAnnouncements.length}
                                    currentPage={currentPage}
                                    paginate={paginate}
                                    setCurrentPage={setCurrentPage}
                                />
                            </Box>
                        </TabPanel>

                    </TabPanels>
                </Tabs>


            </main>
        </div>
    );
}
