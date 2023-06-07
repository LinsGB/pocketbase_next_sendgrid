import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase'
import sgMail from '@sendgrid/mail'

export async function GET(request: Request) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'linsgb2@gmail.com',
    from: 'cantecti@gmail.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('SUCCESS')
    }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });

  const pb = new PocketBase('http://127.0.0.1:8090')
  const record = await pb.collection('user').getList(1, 1, {filter: 'is_admin = true'})
  console.log('admin => ', record.items[0].email)
 
  return NextResponse.json({ test: 'Hello World' });
}