import { NextResponse } from 'next/server';
import { googleReviewSnapshot } from '@/lib/google-reviews';

// Local snapshot: no credentials or third-party API request required.
export function GET() {
  return NextResponse.json(googleReviewSnapshot);
}
