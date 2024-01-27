import React from 'react'
import './styles/Teams.css'
import {aditya, anaga, angel, anish, ankitha, arjun, arun, bharath, bhuvana, deekshith, gaargi, harshitha, keerthi, manjushree, manvith, mayura, monish, nidhi, pavan, prajwal, pruthvi, sanjay, sathvik, shashank, shilpa, srusti, sucheth, swathi, tejas, vidwath, vijithashwa, vinith} from '../assets/team/image'
import TeamCard from './TeamCard'

const finalYears = [
    {
        imgloc: manvith,
        name: 'Manvith G S'
    },
    {
        imgloc: prajwal,
        name: 'J A Prajwal'
    },
    {
        imgloc: swathi,
        name: 'Swathi S Shetty'
    },
    {
        imgloc: sucheth,
        name: 'Sucheth S'
    },
    {
        imgloc: shilpa,
        name: 'Shilpashree Y'
    },
    {
        imgloc: sathvik,
        name: 'Sathvik Rao'
    },
    {
        imgloc: shashank,
        name: 'Shashank K S'
    },
    {
        imgloc: angel,
        name: 'Angel Joseph'
    },
    {
        imgloc: aditya,
        name: 'Aditya R Shetty'
    },
    {
        imgloc: vinith,
        name: 'Vinith M'
    },
    {
        imgloc: vijithashwa,
        name: 'Vijithashwa M G'
    },
    {
        imgloc: bhuvana,
        name: 'Bhuvana N R'
    },

    {
        imgloc: monish,
        name: 'Monish D Naik'
    },
    {
        imgloc: arjun,
        name: 'Arjun H L'
    },
    {
        imgloc: anish,
        name: 'Anish Kashyap N'
    },
    {
        imgloc: manjushree,
        name: 'Manjushree Patil'
    },
    {
        imgloc: vidwath,
        name: 'Vidwath K T'
    },
    {
        imgloc: nidhi,
        name: 'Nidhi A Jain'
    }
]

const thirdYears = [
    {
        imgloc: arun,
        name: 'Arun Kumar'
    },
    {
        imgloc: ankitha,
        name: 'Ankitha T'
    },
    {
        imgloc: pruthvi,
        name: 'Pruthvi P M'
    },
    {
        imgloc: gaargi,
        name: 'Gaargi H A'
    },
    {
        imgloc: deekshith,
        name: 'Deekshith H U'
    },
    {
        imgloc: pavan,
        name: 'Pavan B'
    },
    {
        imgloc: keerthi,
        name: 'Keerthi H B'
    },
    {
        imgloc: bharath,
        name: 'Bharath M'
    },
    {
        imgloc: sanjay,
        name: 'Sanjay B S'
    },
    {
        imgloc: harshitha,
        name: 'Harshitha'
    },
    {
        imgloc: mayura,
        name: 'Mayura M L'
    },
    {
        imgloc: anaga,
        name: 'Anagha P Nadig'
    },
    {
        imgloc: srusti,
        name: 'Srusti H G'
    },
    {
        imgloc: tejas,
        name: 'Tejas Noojile'
    },


]

const TeamList = () => {
  return (
    <div className='team-design'>
        <h1>ENIGMA'24 CREW</h1>
        <div className='team-containers'>
            <h2>Final Years: </h2>
            <div className='team-card-contianer'>
                {
                    finalYears.map((person) =>{
                        return(
                            <TeamCard img={person.imgloc} name={person.name}/>
                        );
                    })
                }
                
            </div>
        </div>
        <div className='team-containers'>
            <h2>Third Years: </h2>
            <div className='team-card-contianer'>
            {
                    thirdYears.map((person) =>{
                        return(
                            <TeamCard img={person.imgloc} name={person.name}/>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TeamList