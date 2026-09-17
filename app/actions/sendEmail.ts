"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: any,
  formData: FormData
) {
  try {
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const projectType = formData.get("projectType")?.toString() || "";
    const details = formData.get("details")?.toString() || "";

    const { data, error } = await resend.emails.send({
      from: "WyvernStack <hello@wyvernstack.co.in>",
      to: ["wyvernstack.solutions@gmail.com"],
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <h3>Project Details</h3>
        <p>${details.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        message: error.message,
      };
    }

    console.log("Email sent:", data);

    return {
      success: true,
      message: "Thanks — your project brief has been sent successfully.",
    };
  } catch (error) {
    console.error("Send email error:", error);

    return {
      success: false,
      message: "Something went wrong while sending your message.",
    };
  }
}