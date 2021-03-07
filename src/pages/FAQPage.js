import React from "react";
import firebase from 'firebase';
import FAQ from '../components/FAQ'

class FAQPage extends React.Component {
  render() {
  return (
      <div id="faq-container">
      
      <div id="faq-questions">
        <FAQ question="What is a toast?" answer='A toast is a message sent through A Toasty Space. It is a play-on-words to describe "toast" as a delectable slice of browned bread and "toast" as a gesture of honour to salute someone else!' />
        <FAQ question="Is A Toasty Space free?" answer="Yes! A Toasty Space was created for everyone, so it is completely free to use. That being said, feel free to support us on Patreon, as linked on the “Support Us” page!" />
        <FAQ question="What am I allowed to toast?" answer="Words that spread positivity, achievements you would like to celebrate, or simply your favourite type of toast!" />
        <FAQ question="How do I report an inappropriate toast?" answer="Put it back in the toaster. No, seriously! We'll send it back to the toaster so no one will see it ever again!" />
      </div>
      
      </div>
    );
  } 
}
export default FAQPage;