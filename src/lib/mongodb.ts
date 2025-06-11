import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/fundingoptimal';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Track connection state
let isConnecting = false;

async function connectDB() {
  try {
    // If already connected, return early
    if (mongoose.connections[0].readyState === 1) {
      return;
    }

    // If currently connecting, wait for it to complete
    if (isConnecting) {
      return new Promise((resolve, reject) => {
        const checkConnection = () => {
          if (mongoose.connections[0].readyState === 1) {
            resolve(void 0);
          } else if (mongoose.connections[0].readyState === 0) {
            setTimeout(checkConnection, 100);
          } else {
            reject(new Error('Connection failed'));
          }
        };
        checkConnection();
      });
    }

    isConnecting = true;

    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log('MongoDB connected successfully');
    isConnecting = false;
  } catch (error) {
    isConnecting = false;
    console.error('MongoDB connection error:', error);

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('ENOTFOUND')) {
        throw new Error(
          'MongoDB server not found. Check your connection string.'
        );
      } else if (error.message.includes('authentication failed')) {
        throw new Error(
          'MongoDB authentication failed. Check your credentials.'
        );
      } else if (error.message.includes('timeout')) {
        throw new Error(
          'MongoDB connection timeout. Server may be unreachable.'
        );
      }
    }

    throw error;
  }
}

export default connectDB;
