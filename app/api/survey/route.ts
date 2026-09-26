import { NextRequest, NextResponse } from "next/server";
import type { SurveyPayload, SurveyResponse } from "@/lib/types";

const VALID_SERVICES = new Set([
  "starlink",
  "cctv-gate",
  "networking",
  "hardware-support",
]);

const PTS_MANAGEMENT_EMAIL = "operations@paalovingtech.com";

/**
 * Mock implementation of an outbound alert to the PTS management team.
 * Swap this out for a real Resend or Nodemailer call once API credentials
 * are available, e.g.:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "surveys@paalovingtech.com",
 *     to: PTS_MANAGEMENT_EMAIL,
 *     subject: `New site survey request from ${payload.name}`,
 *     text: buildEmailBody(payload),
 *   });
 */
async function sendManagementAlert(payload: SurveyPayload): Promise<void> {
  const body = buildEmailBody(payload);
  console.log(
    `[mock-email] To: ${PTS_MANAGEMENT_EMAIL} | Subject: New site survey request from ${payload.name}\n${body}`
  );
  // Simulate network latency of a real email provider call.
  await new Promise((resolve) => setTimeout(resolve, 150));
}

function buildEmailBody(payload: SurveyPayload): string {
  return [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Location: ${payload.location}`,
    `Service: ${payload.service}`,
    `Scope: ${payload.scope || "(none provided)"}`,
  ].join("\n");
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: NextRequest) {
  let payload: Partial<SurveyPayload>;

  try {
    payload = (await request.json()) as Partial<SurveyPayload>;
  } catch {
    return NextResponse.json<SurveyResponse>(
      { success: false, message: "Invalid request body. Please try again." },
      { status: 400 }
    );
  }

  const { name, phone, location, service, scope } = payload;

  const missingFields: string[] = [];
  if (!isNonEmptyString(name)) missingFields.push("name");
  if (!isNonEmptyString(phone)) missingFields.push("phone");
  if (!isNonEmptyString(location)) missingFields.push("location");
  if (!isNonEmptyString(service)) missingFields.push("service");

  if (missingFields.length > 0) {
    return NextResponse.json<SurveyResponse>(
      {
        success: false,
        message: `Please fill in the following required field(s): ${missingFields.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  if (!VALID_SERVICES.has(service as string)) {
    return NextResponse.json<SurveyResponse>(
      { success: false, message: "Please select a valid service." },
      { status: 400 }
    );
  }

  const validatedPayload: SurveyPayload = {
    name: (name as string).trim(),
    phone: (phone as string).trim(),
    location: (location as string).trim(),
    service: service as SurveyPayload["service"],
    scope: isNonEmptyString(scope) ? scope.trim() : "",
  };

  try {
    await sendManagementAlert(validatedPayload);
  } catch (error) {
    console.error("Failed to send PTS management alert:", error);
    return NextResponse.json<SurveyResponse>(
      {
        success: false,
        message:
          "We received your request but could not notify our team automatically. Please call +233 24 200 3013 to confirm.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json<SurveyResponse>(
    {
      success: true,
      message:
        "Thank you! Our Kumasi technical team will call you within 24 hours to schedule your site survey.",
    },
    { status: 200 }
  );
}
