import React from 'react'
import './styles/Teams.css'
import {aditya, anaga, angel, anish, ankitha, arjun, arun, bharath, bhuvana, deekshith, gaargi, harshitha, keerthi, manjushree, manvith, mayura, monish, nidhi, pavan, prajwal, pruthvi, sanjay, sathvik, shashank, shilpa, srusti, sucheth, swathi, tejas, vidwath, vijithashwa, vinith} from '../assets/team/image'
import TeamCard from './TeamCard'

const finalYears = [
    {
        imgloc: manvith,
        name: 'Manvith'
    },
    {
        imgloc: prajwal,
        name: 'Prajwal'
    },
    {
        imgloc: swathi,
        name: 'Swathi'
    },
    {
        imgloc: sucheth,
        name: 'Sucheth'
    },
    {
        imgloc: shilpa,
        name: 'Shilpa'
    },
    {
        imgloc: sathvik,
        name: 'Sathvik'
    },
    {
        imgloc: shashank,
        name: 'Shashank'
    },
    {
        imgloc: angel,
        name: 'Angel'
    },
    {
        imgloc: aditya,
        name: 'Aditya'
    },
    {
        imgloc: vinith,
        name: 'Vinith'
    },
    {
        imgloc: vijithashwa,
        name: 'Vijithashwa'
    },
    {
        imgloc: bhuvana,
        name: 'Bhuvana'
    },

    {
        imgloc: monish,
        name: 'Monish'
    },
    {
        imgloc: arjun,
        name: 'Arjun'
    },
    {
        imgloc: anish,
        name: 'Anish'
    },
    {
        imgloc: manjushree,
        name: 'Manjushree'
    },
    {
        imgloc: vidwath,
        name: 'Vidwath'
    },
    {
        imgloc: nidhi,
        name: 'Nidhi'
    }
]

const thirdYears = [
    {
        imgloc: arun,
        name: 'Arun'
    },
    {
        imgloc: ankitha,
        name: 'Ankitha'
    },
    {
        imgloc: pruthvi,
        name: 'Pruthvi'
    },
    {
        imgloc: gaargi,
        name: 'Gaargi'
    },
    {
        imgloc: deekshith,
        name: 'Deekshith'
    },
    {
        imgloc: pavan,
        name: 'Pavan'
    },
    {
        imgloc: keerthi,
        name: 'Keerthi'
    },
    {
        imgloc: bharath,
        name: 'Bharath'
    },
    {
        imgloc: sanjay,
        name: 'Sanjay'
    },
    {
        imgloc: harshitha,
        name: 'Harshitha'
    },
    {
        imgloc: mayura,
        name: 'Mayura'
    },
    {
        imgloc: anaga,
        name: 'Anagha'
    },
    {
        imgloc: srusti,
        name: 'Srusti'
    },
    {
        imgloc: tejas,
        name: 'tejas'
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