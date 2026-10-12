// ONE FILE TO EDIT PER CUSTOMER. Everything on the site reads from here.
// To spin up the next customer: copy this repo, change this file + astro.config.mjs `site`, deploy.
// Name rule: `name` is the everyday business name (used on the site and in texts).
// `legalName` must match the 10DLC brand registration and EIN, and appears once for reviewers.

export const site = {
  name: 'CPA PC',
  legalName: 'Victor Schmitz CPA, PC',
  domain: 'cpapc.net',
  phone: '(605) 775-2435',
  address: '738 Main St, Burke, SD 57523',
  location: 'Burke, South Dakota',
  effectiveDate: 'October 12, 2026',

  // 10DLC / SMS wording. Must match the campaign's message flow and auto-responses.
  sms: {
    messageTypes:
      'appointment reminders and confirmations, requests for documents or information, and replies to questions you send us',
    optInHow:
      'Clients give explicit consent to receive text messages from CPA PC in one of two ways. (1) In writing: the office\'s client paperwork includes an optional text message consent checkbox, which the client checks and signs along with providing their mobile number. (2) Verbally: office staff ask the client, by phone or in person, for permission to send text messages, using a short script that states the program, message frequency, message and data rates, and how to reply STOP or HELP, and the office records the date. Consent to text messages is optional and is not a condition of receiving our services. CPA PC does not send text messages to anyone who has not given consent.',
    optInMessage:
      'CPA PC: Thank you for opting in to text messages about appointments and document requests. Msg frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt out.',
    optOutMessage:
      'CPA PC: You are unsubscribed and will receive no further text messages. To opt back in, reply START. Reply HELP for help.',
    helpMessage:
      'CPA PC: For help, call (605) 775-2435. Reply STOP to opt out.',
  },
};

export const telHref = `tel:${site.phone.replace(/[^0-9+]/g, '')}`;
