import React from 'react';
import {Button, HStack, Box} from "@chakra-ui/react";

const Paginate = ({announcements, postsPerPage, totalPosts, currentPage, paginate, setCurrentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const previousPage = (announcements) => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = (announcements) => {
        if (currentPage !== Math.ceil(announcements.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Box className="pagination-container" mt={'20'}>
            <HStack className="pagination">
                <Button colorScheme='teal' size='xs' onClick={() => previousPage(announcements)}>
                    Prev
                </Button>
                {pageNumbers.map((number) => (
                    <Button
                        colorScheme='teal' size='xs'
                        key={number}
                        onClick={() => paginate(number)}
                        className={
                            'page-number ' + (number === currentPage ? 'active' : '')
                        }
                    >
                        {number}
                    </Button>
                ))}
                <Button colorScheme='teal' size='xs' onClick={() => nextPage(announcements)}>
                    Next
                </Button>
            </HStack>
        </Box>
    );
}
export default Paginate;