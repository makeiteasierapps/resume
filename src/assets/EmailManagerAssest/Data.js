import DataDash from '../EmailManagerAssest/datadash.png';
import EmailManagerLogo from '../EmailManagerAssest/email-manager-logo.jpeg';
import EmailForm from '../EmailManagerAssest/emailform.png';
import LoginScreen from '../EmailManagerAssest/login.png';
import ProfileScreen from '../EmailManagerAssest/profile.png';
import WelcomeScreen from '../EmailManagerAssest/welcome.png';
import ExtractedData from '../EmailManagerAssest/extractedData.png';

import PaxxiumLogin from '../PaxxiumAssets/login.png';
import HomeScreen from '../PaxxiumAssets/home.png';
import ChatScreen from '../PaxxiumAssets/chat.png';
import ChatSettings from '../PaxxiumAssets/chatsettings.png';
import PaxxiumSignup from '../PaxxiumAssets/signup.png';
import MinNavbar from '../PaxxiumAssets/navbarMinimized.png';
import ExpandedNav from '../PaxxiumAssets/navbarExpanded.png';
import DalleScreen from '../PaxxiumAssets/dalle.png';

import { ReactComponent as OpenAiLogo } from '../projectIcons/openai-lockup.svg';
import { ReactComponent as MailgunLogo } from '../projectIcons/mailgun.svg';
import { ReactComponent as NodeLogo } from '../skillsIcons/node-js.svg';
import { ReactComponent as FirebaeLogo } from '../projectIcons/firebase.svg';
import MaterialUiLogo from '../projectIcons/materialUi.png';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const EmailManagerData = {
    images: [
        {
            image: EmailManagerLogo,
            description: `Email Manager is a full stack web app hosted serverless with Vercel. 
            The front end has been built with React and Material-UI while the back end has been done with Node.js. 
            The project started as an actual solution to a companies problem. 
            The handling of sending and tracking emails with automated follow ups based on elapsed time. 
            I then decided to have some fun and implement GPT-4 to automatically respond to email replies. 
            I have preloaded the AI with context about myself and the project so feel free to ask questions!`,
        },
        {
            image: LoginScreen,
            description:
                'User accounts are managed with Firebase and Firestore',
        },
        {
            image: WelcomeScreen,
            description: `The first screen shown upon login, gives an overview of the project.`,
        },
        {
            image: ProfileScreen,
            description: `An option to use your own credentials is provided. Keys are encrypted via symmetric encryption using
        Google Cloud KMS. Profile data is pulled from the respective oAuth option choosen by the user.`,
        },
        {
            image: EmailForm,
            description:
                'Simple form to send email with a predefined template or a custom one',
        },
        {
            image: ExtractedData,
            description: `Example of data extracted from a .csv and applied to the template. Templates dynamically update to show previews`,
        },
        {
            image: DataDash,
            description: `The Dashboard shows all emails that have been sent. 
            It also displays the interactions between the recipient of the email and the AI`,
        },
    ],
    clientTech: [
        { name: 'React', logo: faReact },
        { name: 'Material UI', logo: MaterialUiLogo },
    ],
    serverTech: [
        { name: 'Node.js', logo: NodeLogo },
        { name: 'Mailgun', logo: MailgunLogo },
        { name: 'OpenAI', logo: OpenAiLogo },
        { name: 'Firebase', logo: FirebaeLogo },
    ],
    ProjectDetails: {
        font: 'BioRhyme',
        fontColor: '#00D1B5',
        title: 'Email Manager',
        description: `Full Stack Web App utilizing Mailgun to send
        emails and OpenAi to automatically respond.`,
        clientCode: 'https://github.com/makeiteasierapps/email-manager-ui',
        serverCode:
            'https://github.com/makeiteasierapps/email-manager/tree/main/node_version',
    },
};

export const PaxxiumData = {
    images: [
        {
            image: PaxxiumLogin,
            description: `Login Screen`,
        },
        {
            image: PaxxiumSignup,
            description: `Signup Screen`,
        },
        {
            image: HomeScreen,
            description: `Home Screen`,
        },
        {
            image: ChatScreen,
            description: `Chat Screen`,
        },
        {
            image: ChatSettings,
            description: `Chat Settings`,
        },
        {
            image: MinNavbar,
            description: `Minimized Navbar`,
        },
        {
            image: ExpandedNav,
            description: `Expanded Navbar`,
        },
        {
            image: DalleScreen,
            description: `Dalle Screen`,
        },
    ],
    clientTech: [
        { name: 'React', logo: faReact },
        { name: 'Material UI', logo: MaterialUiLogo },
    ],
    serverTech: [
        { name: 'Python', logo: null },
        { name: 'Flask', logo: null },
        { name: 'OpenAI', logo: OpenAiLogo },
        { name: 'Firebase', logo: FirebaeLogo },
        { name: 'Langchain', logo: null },
    ],
    ProjectDetails: {
        font: 'BioRhyme',
        fontColor: '#00D1B5',
        title: 'Paxxium',
        description: `An AI interface built with Langchain and OpenAI, built to give the user more control
        over how they interact with their AI.`,
        clientCode: null,
        serverCode: null,
    },
};
