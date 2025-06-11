// Environment variable checker utility
export function checkRequiredEnvVars() {
  const requiredVars = ['MONGODB_URI', 'JWT_SECRET', 'JWT_REFRESH_SECRET'];

  const missing: string[] = [];
  const warnings: string[] = [];

  for (const varName of requiredVars) {
    const value = process.env[varName];

    if (!value) {
      missing.push(varName);
    } else if (value.startsWith('fallback-') || value.includes('localhost')) {
      warnings.push(
        `${varName} is using a default/development value: ${value}`
      );
    }
  }

  const optionalVars = [
    'JWT_EXPIRES_IN',
    'JWT_REFRESH_EXPIRES_IN',
    'COOKIE_DOMAIN',
    'NODE_ENV',
  ];

  console.log('Environment Variables Check:');
  console.log('=============================');

  if (missing.length > 0) {
    console.error('❌ Missing required variables:', missing);
    return false;
  }

  console.log('✅ All required variables are present');

  if (warnings.length > 0) {
    console.warn('⚠️  Warnings:');
    warnings.forEach((warning) => console.warn(`   ${warning}`));
  }

  console.log('\n📋 Current values:');
  [...requiredVars, ...optionalVars].forEach((varName) => {
    const value = process.env[varName];
    if (value) {
      // Mask sensitive values
      const maskedValue =
        varName.includes('SECRET') || varName.includes('URI')
          ? value.substring(0, 10) + '...'
          : value;
      console.log(`   ${varName}: ${maskedValue}`);
    }
  });

  return true;
}

// Export individual checkers for specific use cases
export function checkDatabaseConnection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is required');
  }

  if (uri === 'mongodb://localhost:27017/fundingoptimal') {
    console.warn('Using default local MongoDB connection');
  }

  return uri;
}

export function checkJWTSecrets() {
  const secret = process.env.JWT_SECRET;
  const refreshSecret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required');
  }

  if (!refreshSecret) {
    throw new Error('JWT_REFRESH_SECRET environment variable is required');
  }

  if (
    secret === 'fallback-secret-key' ||
    refreshSecret === 'fallback-refresh-secret-key'
  ) {
    console.warn('Using fallback JWT secrets - not secure for production');
  }

  return { secret, refreshSecret };
}
