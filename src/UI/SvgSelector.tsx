import React from 'react';

interface Props {
    id: string;
}

export const SvgSelector = ({ id }: Props) => {
   switch (id) {
       case 'edit':
           return (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z" fill="#3F72AF"/>
                   <path d="M23.61 3.5038L20.4962 0.390054C19.9762 -0.130018 19.1294 -0.130018 18.6093 0.390054L16.1689 2.83039L21.1696 7.83108L23.61 5.39074C24.1301 4.87067 24.1301 4.02387 23.61 3.5038Z" fill="#3F72AF"/>
               </svg>
           );
       // добавить все остальные картинки.....
       default:
           return <svg></svg>
   }
};