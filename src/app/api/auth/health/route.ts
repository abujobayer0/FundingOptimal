import { NextResponse } from 'next/server';
import { checkRequiredEnvVars } from '@/lib/env-check';
import connectDB from '@/lib/mongodb';

export async function GET() {
  const checks = {
    environment: false,
    database: false,
    timestamp: new Date().toISOString(),
  };

  let status = 200;
  let message = 'All systems operational';

  try {
    // Check environment variables
    checks.environment = checkRequiredEnvVars();
  } catch (error) {
    console.error('Environment check failed:', error);
    checks.environment = false;
    status = 503;
    message = 'Environment configuration error';
  }

  try {
    // Check database connection
    await connectDB();
    checks.database = true;
  } catch (error) {
    console.error('Database check failed:', error);
    checks.database = false;
    status = 503;
    message =
      status === 503
        ? 'Multiple service failures'
        : 'Database connection failed';
  }

  const response = NextResponse.json(
    {
      success: status === 200,
      message,
      checks,
    },
    { status }
  );

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}
