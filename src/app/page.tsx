'use client';
import "./globals.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { ContactForm, HeroLayout1responsive, MarketingFooter, NavBar } from "../ui-components"
import {ProfileCardCollection} from "../ui-components";
import { ProfileCardProps } from "@/ui-components/ProfileCard";
import { ProfileCardCollectionProps } from "@/ui-components/ProfileCardCollection";
import {ContactUsNew} from "../ui-components";
import { AmplifyProvider,Flex,View } from "@aws-amplify/ui-react";
import {studioTheme} from "../ui-components";
import {ProfileCard} from "../ui-components"
import '@aws-amplify/ui-react/styles.css'
import config from '../aws-exports'
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Home() {
  return (
   <AmplifyProvider theme={studioTheme}>
    <div color="#FFFFFF">
    <NavBar width="100%"/>
<HeroLayout1responsive width="100%"/>
<br/><br/>
<div className="contact-form-container" id="contactUs">
<ContactForm/>
</div>
<MarketingFooter/>
    </div>
    </AmplifyProvider>
     
  )
}
