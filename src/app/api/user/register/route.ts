import { connect } from '@/config/dbConfig';
import { createUser } from './registerActions';

import { NextRequest, NextResponse } from 'next/server';

/**
 * Connect to the database
 */
connect();

const POST = async (request: NextRequest) => {
  try {
    const { userName, email, password } = await request.json();
    const user = await createUser({ userName, email, password });
    if (!user) {
      return NextResponse.json({
        success: false,
        staus: 400,
        error: 'User already exists'
      });
    }
    return NextResponse.json({
      success: true,
      status: 201,
      message: 'User created',
      user: user
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, error: error.message });
  }
};

export { POST };
