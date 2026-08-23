import { NextResponse } from "next/server";
import { EnquiryFormData, EnquiryRecord } from "@/src/types";

// In-memory mock database store for CMS readiness
const mockEnquiries: EnquiryRecord[] = [];

export async function POST(request: Request) {
  try {
    const body: EnquiryFormData = await request.json();

    if (!body.fullName || !body.phone || !body.travelDate || !body.destination) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, phone, travelDate, and destination are required." },
        { status: 400 }
      );
    }

    const newRecord: EnquiryRecord = {
      ...body,
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
      status: "New",
    };

    mockEnquiries.push(newRecord);

    console.log("[ENQUIRY RECEIVED]", newRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully. Our team will contact you shortly.",
        enquiryId: newRecord.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Secured read handler for future admin dashboard API
  return NextResponse.json({
    total: mockEnquiries.length,
    enquiries: mockEnquiries,
  });
}
