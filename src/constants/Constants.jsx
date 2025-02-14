import bigCurve from "../assets/images/bg-curvy-desktop.svg"
import smallCurve from "../assets/images/bg-curvy-mobile.svg"
import quotes from "../assets/images/bg-quotes.png"
import favicon from "../assets/images/favicon-32x32.png"
import desktopPhone from "../assets/images/icon-access-anywhere.svg"
import files from "../assets/images/icon-any-file.svg"
import arrow from "../assets/images/icon-arrow.svg"
import collaboration from "../assets/images/icon-collaboration.svg"
import email from "../assets/images/icon-email.svg"
import location from "../assets/images/icon-location.svg"
import phone from "../assets/images/icon-phone.svg"
import security from "../assets/images/icon-security.svg"
import intro from "../assets/images/illustration-intro.png"
import productive from "../assets/images/illustration-stay-productive.png"
import logo from "../assets/images/logo.svg"
import profile1 from "../assets/images/profile-1.jpg"
import profile2 from "../assets/images/profile-2.jpg"
import profile3 from "../assets/images/profile-3.jpg"





export const bgImages = {
    bigCurve : bigCurve,
    smallCurve : smallCurve
}


export const icons = {
    quotes : quotes,
    favicon : favicon,
    files : files,
    arrow : arrow,
    collaboration : collaboration,
    email : email,
    location : location,
    phone : phone,
    security : security
}


export const introImgs = {
    intro : intro,
    productive : productive
}

export const brandLOgo = {
    logo : logo
}




export const ServicesData = [
    {
        img : desktopPhone,
        header : "Access your files, anywhere",
        content : "The ability to use a smartphone, tablet , or computer to access your account means your files follow you everywhere.",
    },
    {
        img : security,
        header : "Security you can trust",
        content : "2-factor authentication and user-controlled encryption are just a couple of a security features we allow to help secure your files.",
    },
    {
        img : collaboration,
        header : "Real-time collaboration",
        content : "Secure share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        img : files,
        header : "Store any type of file",
        content : "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be security stored and shared.",
    },
]


export const Testimonial = [
    {
        profileImg : profile1,
        name : "Satish Patel",
        role : "Founder & CEO, Huddle",
        testDesc : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        profileImg : profile2,
        name : "Bruce Mckenzie",
        role : "Founder & CEO, Huddle",
        testDesc : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        profileImg : profile3,
        name : "Iva Byod",
        role : "Founder & CEO, Huddle",
        testDesc : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
]