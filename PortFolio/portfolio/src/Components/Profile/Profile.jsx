import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'

export const Profile = () => {
    return (
        <ProfileBox>
            <div className="profile_name">
                <Typography className="name">Amarjeet Singh</Typography>
                <Typography className="title">Full stack web developer</Typography>
            </div>
            <figure className="profile_image">
                <img className="img" src="./xps-4TBSG2Oqu0Q-unsplash.jpg" alt="/" />
            </figure>
            <div className="profile_information">
                insert timeline
                <hr />
                <Button>Download CV</Button>
            </div>
        </ProfileBox>
    )
}

const ProfileBox = styled.div`
    background-color:#FFF;
    border-radius:6px;
    width:100%;
    display:inline-block;

    & .profile_name{
        line-height:18px;
        padding:20px;

        & .name{
            text-transform:uppercase;
            font-size:17px;
            font-weight:bold;
        }

        & .title{
            font-size:13px;
            color:#777;
        }
    }

    & .profile_image{
        margin-top:-10px;
        -webkit-clip-path:polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
        clip-path:polygon(0 9%, 100% 0, 100% 94%, 0% 100%);

        & img{
            width:100%;
        }
    }


`


