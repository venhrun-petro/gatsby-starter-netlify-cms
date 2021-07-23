import React, { useState } from 'react'
import { useInput } from '~h/useInput'
import Img from '~c/general/Image'
import { dataContent } from '~u/data'
import { encode } from '~u/helpers'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Form2() {
  const content = Content(useFormQuery())

//   const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
//   const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
//   const { value:guestName, bind:bindGuest, reset:resetGuest } = useInput('');
//   const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
//   const [ submit, setSubmit ] = useState(false);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     // alert(`Submitting Name ${firstName} ${lastName}`);
//     // resetFirstName();
//     // resetLastName();
//     const discordData = {
//       MMERGE1: firstName,
//       MMERGE5: lastName
//     };

//     addToMailchimp(mail, discordData) // listFields are optional if you are only capturing the email address.
//     .then(data => {
//       // I recommend setting data to React state
//       // but you can do whatever you want (including ignoring this `then()` altogether)
//       console.log(data)
//     })
//     .catch(() => {
//       // unnecessary because Mailchimp only ever
//       // returns a 200 status code
//       // see below for how to handle errors
//     })

    // fetch('/',{
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({ 'form-name': 'Volter', ...discordData })
      
    // })
//     setSubmit(true);
  }

//   const mail = 'mail' + Math.floor(Math.random() * 52632 + 1) + '@gmail.com';
  
  return(
    <>
//       {!submit ?
//         <form className="teaser_cont_form-normal" name="Volter"
//         data-netlify="true" onSubmit={handleSubmit}>
//           <div className="teaser_cont_form-normal_block none" >
//               <label className="teaser_cont_form-normal_block_data">
//                 <span>
//                 <Img src={content.dataImage} />
//                 {content.dataName}
//                 </span>
//                 <div className="teaser_cont_form-normal_block_data_outside">
//                   <input
//                     name="EMAIL"
//                     value={mail}
//                     type="email" 
//                     placeholder="email" 
//                   /> 
//                 </div>
//               </label>
//             </div>
//             <div className="teaser_cont_form-normal_block" >
//               <label className="teaser_cont_form-normal_block_data">
//                 <span>
//                 <Img src={content.dataImage} />
//                 {content.dataName}
//                 </span>
//                 <div className="teaser_cont_form-normal_block_data_outside">
//                   <input
//                     name="MMERGE1"
//                     type="text" 
//                     placeholder="Name"
//                     {...bindFirstName}
//                   /> 
//                 </div>
//               </label>
//             </div>
//             <div className="teaser_cont_form-normal_block">
//               <label className="teaser_cont_form-normal_block_data">
//                 <span>
//                   <Img src={content.dataImage} />
//                   {content.dataPhone}
//                 </span>
//                 <div className="teaser_cont_form-normal_block_data_outside">
//                   <input
//                     type="text"
//                     name="MMERGE5"
//                     placeholder="Phone"
//                     {...bindLastName}
//                   /> 
//                 </div>
//               </label>
//             </div> 

            <a href={"tel:" + content.contactPhone2} className="general-button" type="button">
              {content.dataButton}
            </a>
//             <input type="hidden" name="form-name" value="Volter" />
//         </form>
//       :
//         <div className="teaser_cont_thanks">
//           <h2 className="teaser_cont_thanks_title">{content.dataThanks}</h2>
//         </div>
//      }
    </>
  )
}


export const useFormQuery = () =>
useStaticQuery(graphql`
  query FormQuery {
    allFile(filter: {name: {eq: "content"}}) {
      nodes {
        childEnJson {
//           dataImage
//           dataThanks
//           dataName
//           dataPhone
//           dataButton
          contactPhone2
        }
        childUkJson {
//           dataImage
//           dataThanks
//           dataName
//           dataPhone
//           dataButton
          contactPhone2,
        }
        sourceInstanceName
      }
    }
  }
`).allFile.nodes
