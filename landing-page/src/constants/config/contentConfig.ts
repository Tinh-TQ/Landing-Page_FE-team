import { ContentType } from "../../interfaces";
import { facebookIcon, youtubeinIcon, twitterIcon, instagramIcon, linkedinIcon } from "./icon";
 
export const activityStatuses: ContentType[] = [
  {
    header: 'Quick Link',
    content: [
      'Service', "Portfolio", 'About us', 'Testimonial', 'Subscribe'
    ]
  },
  {
    header: 'Resource',
    content: [
      'Support', "Policy", 'Terms', "Conditions"
    ]
  },

  {
    header: "Social Media",
    content: [

    ]
  }
];
 
export const activityStatusesIcons: ContentType[] = [
  {
    header: '',
    content: [
      facebookIcon, linkedinIcon, twitterIcon, youtubeinIcon, instagramIcon
    ],
  },
]