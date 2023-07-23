'use client';
import "./globals.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { MarketingFooter, NavBar } from "../ui-components"
import {HeroLayout1} from "../ui-components";
import {ProfileCardCollection} from "../ui-components";
import { ProfileCardProps } from "@/ui-components/ProfileCard";
import { ProfileCardCollectionProps } from "@/ui-components/ProfileCardCollection";
import {ContactUsNew} from "../ui-components";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import {studioTheme} from "../ui-components";
import {ProfileCard} from "../ui-components"
import '@aws-amplify/ui-react/styles.css'
import config from '../aws-exports'

export default function Home() {
  return (
   <AmplifyProvider theme={studioTheme}>
    <NavBar/>
<HeroLayout1 width="100%"/>
<br/><br/>
<div className="contact-form-container" id="contactUs">
<ContactUsNew/>
</div>
<MarketingFooter/>
    </AmplifyProvider>
     
  )
}
