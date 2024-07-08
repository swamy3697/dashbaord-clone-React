import React from 'react'

import '../Components/ApiKeys.css';
import CredentialsInput from './CredentialsInput';

const textClasses = 'text-foreground';
const mutedTextClasses = 'text-muted-foreground';
const bgCardClasses = 'bg-card';
const bgInputClasses = 'bg-input';
const borderClasses = 'border-border'

const ApiKeys = () => {
  return (
    <div className='ApiKeys_contianer'>

      <div className='headContainer-apikeys'>
      <h1 className={`text-2xl font-bold ${textClasses}`}>API Keys</h1>
      <p className={`${mutedTextClasses} mt-2`}>
        Keep your API key confidential; avoid revealing it in browsers or any client-side code. For the safeguarding of your account, Retell AI reserves the right to deactivate any API key that is
        detected to have been disclosed in a public setting.
      </p>


      </div>

      <CredentialsInput/>
      
    </div>
  )
}

export default ApiKeys