//http://localhost:3000/api/contact-us

// export async function GET(request){
//     const users = [
//         {id: 1, name: 'John Doe'},
//         {id: 2, name: 'Jane Doe'},
//         {id: 3, name: 'John Smith'}
//     ]
//     return new Response(JSON.stringify(users))
// }

import { mailOptions, transporter } from "../../../emails/client";

import { replaceMergeTags, stripHTMLTags } from "../../../emails/helpers";

import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

export async function POST(request) {
  const data = await request.json();

  // get html template
  const htmlFilePath = path.join(process.cwd(), "emails", "contact-form.html");
  let htmlContent = fs.readFileSync(
    htmlFilePath,
    "utf8",
    (err, htmlContent) => {
      if (err) {
        console.error("Error reading html file: ", err);
        return;
      }
    }
  );

  // replace merge tags with values
  htmlContent = replaceMergeTags(data, htmlContent);
  const plaintextContent = stripHTMLTags(htmlContent);

  // send email
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "NEW CONTACT INQUIRY",
      text: plaintextContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email: ", err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
