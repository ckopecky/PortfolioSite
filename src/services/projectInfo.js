import { CineViewImages, SortingHatImages, GoogleCloneImages, InstaCloneImages, UXLecturesImages, BreakoutImages }from './imageImports';
require('dotenv').config();

export const CineView = {
    images: CineViewImages,
    github: process.env.REACT_APP_GITHUB_CINEVIEW,
    deploy: process.env.REACT_APP_DEPLOY_CINEVIEW,
    description: "An application that allows a community of movie watchers read and write reviews on movies. Tech Stack: PostgreSQL, Express, React, Node"
}

export const GoogleClone = {
    images: GoogleCloneImages,
    github: process.env.REACT_APP_GITHUB_GOOGLE_CLONE,
    deploy: process.env.REACT_APP_DEPLOY_GOOGLE_CLONE,
    description: "An exercise in React UI -- a functional Google Clone Search page. Tech Stack: React"
}

export const InstaClone = {
    images: InstaCloneImages,
    github: process.env.REACT_APP_GITHUB_INSTACLONE,
    deploy: process.env.REACT_APP_DEPLOY_INSTACLONE,
    description: "An exericse in static User Interface development using React -- an Instagram Clone. Tech Stack: React"
}

export const Breakout = {
    images: BreakoutImages,
    github: process.env.REACT_APP_GITHUB_BREAKOUT,
    deploy: null,
    description: "An exercise in Python toy game development -- a Breakout Clone. Tech stack: Pygame, Python"
}

export const LambdaNotes = {
    images: [],
    github: process.env.REACT_APP_GITHUB_LAMBDA_NOTES,
    deploy: process.env.REACT_APP_DEPLOY_LAMBDA_NOTES,
    description: "Full-Stack Application created from client-designed wireframes. Tech Stack: MongoDB, Express, React, Node"
}

export const SortingHat = {
    images: SortingHatImages,
    github: process.env.REACT_APP_GITHUB_SORTING_HAT,
    deploy: process.env.REACT_APP_DEPLOY_SORTING_HAT,
    description: "You've been accepted to wizarding school! Take the quiz to be sorted into your house."

}