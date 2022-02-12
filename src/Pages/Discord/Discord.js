import React from 'react'
import { Route } from 'react-router-dom'

const Discord = () => {
    return <Route path="/" component={() => {
        window.location.href = 'https://discord.gg/h4FTbEa7Hf';
        return null;
    }} />
}

export default Discord
