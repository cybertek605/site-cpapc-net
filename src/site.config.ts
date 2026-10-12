// ONE FILE TO EDIT PER CUSTOMER. Everything on the site reads from here.
// To spin up the next customer: copy this repo, change this file + astro.config.mjs `site`, deploy.
// Name rule: `name` is the everyday business name (used on the site and in texts).
// `legalName` must match the 10DLC brand registration and EIN, and appears once for reviewers.
// IMPORTANT: this site must match the submitted 10DLC campaign (Telnyx campaign 4b3001a1-30bb-a137-982f-2a4003afde05):
//   privacy + terms at /privacy-policy, opt-in via the /contact form only, www.cpapc.net as the main address.

export const site = {
  name: 'CPA PC',
  legalName: 'Victor Schmitz CPA, PC',
  domain: 'www.cpapc.net',
  phone: '(605) 775-2435',        // main office line
  helpPhone: '(605) 842-1708',    // number in the campaign's HELP auto-response
  address: '738 Main St, Burke, SD 57523',
  location: 'Burke, South Dakota',
  effectiveDate: 'October 12, 2026',

  // Contact form posts here (n8n workflow "CPA PC Website - Contact Form + Text Consent").
  // The consent wording in that workflow (CONSENT_TEXT) must match the checkbox on /contact.
  formEndpoint: 'https://n8n.cybertek.systems/webhook/cpapc-contact-form',

  // 10DLC / SMS wording. Must match the campaign's message flow and auto-responses.
  sms: {
    messageTypes: 'SMS updates, account notifications, reminders, and event notifications',
    optInHow:
      'Customers opt in to text messages from CPA PC by visiting our website contact form at https://www.cpapc.net/contact, entering their phone number, and selecting the checkbox to consent to receiving text messages at that phone number, and agreeing to our Privacy Policy. The checkbox is optional and is not checked by default. Consent to text messages is not a condition of receiving our services. CPA PC does not send text messages to anyone who has not given consent.',
    optInMessage:
      'CPA PC: Thank you for opting into SMS updates, account notifications, reminders, and event notifications. Reply HELP for help. Message frequency may vary. Msg & Data rates may apply. To opt out at any time reply STOP.',
    optOutMessage:
      'CPA PC: Thank you for opting-out of SMS messaging. You are now unsubscribed and will receive no further messages. To opt back in at any time, reply START.',
    helpMessage:
      'CPA PC: Please call us at 605-842-1708 or visit https://www.cpapc.net for help.',
  },
};

export const telHref = `tel:${site.phone.replace(/[^0-9+]/g, '')}`;
export const helpTelHref = `tel:${site.helpPhone.replace(/[^0-9+]/g, '')}`;
