# Authentication Deployment Guide

This guide ensures your authentication system works perfectly in production across all deployment platforms.

## 🚀 Quick Production Checklist

### 1. Environment Variables (CRITICAL)

**Required for production:**

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fundingoptimal

# JWT Secrets (Generate strong secrets!)
JWT_SECRET=your-super-secure-jwt-secret-at-least-32-characters-long
JWT_REFRESH_SECRET=your-super-secure-refresh-secret-different-from-jwt-secret

# Environment
NODE_ENV=production
```

**Optional but recommended:**

```bash
# JWT Configuration
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
JWT_ISSUER=your-app-name
JWT_AUDIENCE=your-app-users

# Cookie Configuration
COOKIE_DOMAIN=yourdomain.com
# For subdomains: .yourdomain.com
# Leave empty for single domain

# Force secure cookies (auto-detected in production)
FORCE_SECURE_COOKIES=true
```

### 2. Generate Secure JWT Secrets

**Generate strong secrets (run these commands):**

```bash
# Generate JWT_SECRET
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate JWT_REFRESH_SECRET (must be different)
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 3. Platform-Specific Setup

#### Vercel

1. Go to your project settings
2. Add all environment variables under "Environment Variables"
3. Redeploy your application

```bash
# Quick deploy
vercel env add JWT_SECRET
vercel env add JWT_REFRESH_SECRET
vercel env add MONGODB_URI
vercel env add NODE_ENV production
vercel --prod
```

#### Netlify

1. Site settings → Environment variables
2. Add all required variables
3. Trigger new deploy

#### Railway

```bash
railway variables set JWT_SECRET=your-secret
railway variables set JWT_REFRESH_SECRET=your-refresh-secret
railway variables set MONGODB_URI=your-mongo-uri
railway variables set NODE_ENV=production
```

#### Digital Ocean/AWS/GCP

Add environment variables to your container/instance configuration.

### 4. Domain Configuration

#### Single Domain

```bash
COOKIE_DOMAIN=yourdomain.com
```

#### Subdomains

```bash
COOKIE_DOMAIN=.yourdomain.com
```

#### Multiple Domains (leave empty)

```bash
COOKIE_DOMAIN=
```

## 🔧 Testing Your Deployment

### 1. Health Check

Visit: `https://yourdomain.com/api/auth/health`

Expected response:

```json
{
  "success": true,
  "message": "All systems operational",
  "checks": {
    "environment": true,
    "database": true,
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### 2. Authentication Flow Test

1. Register a new user
2. Login with credentials
3. Access protected routes
4. Verify token refresh works
5. Logout and confirm cleanup

### 3. Cookie Verification

**Check browser dev tools → Application → Cookies:**

- `accessToken` should be present
- `refreshToken` should be present
- Both should have `Secure` and `SameSite` flags in production

## 🛠️ Common Deployment Issues & Solutions

### Issue: "JWT_SECRET environment variable is required"

**Solution:** Ensure JWT secrets are set in your deployment platform's environment variables.

### Issue: Cookies not working after deployment

**Solutions:**

1. Check `COOKIE_DOMAIN` setting
2. Ensure HTTPS is enabled (cookies require secure connection in production)
3. Verify `SameSite` settings for cross-domain scenarios

### Issue: Database connection failed

**Solutions:**

1. Verify `MONGODB_URI` is correctly set
2. Check MongoDB Atlas network access (whitelist your deployment IP)
3. Ensure database user has proper permissions

### Issue: "Invalid token" errors in production

**Solutions:**

1. Verify JWT secrets match between deployments
2. Check token expiration settings
3. Ensure system clock is synchronized

### Issue: Authentication works locally but not in production

**Solutions:**

1. Check all environment variables are set
2. Verify HTTPS is enabled
3. Check browser console for cookie/CORS errors
4. Review server logs for specific error messages

## 🔐 Security Best Practices

### JWT Secrets

- Use cryptographically secure random strings (64+ characters)
- Never commit secrets to version control
- Use different secrets for access and refresh tokens
- Rotate secrets periodically

### Cookie Security

- Always use HTTPS in production
- Set appropriate `COOKIE_DOMAIN`
- Enable `Secure` and `SameSite` flags
- Use `HttpOnly` for refresh tokens

### Database Security

- Use connection string with authentication
- Enable MongoDB Atlas network restrictions
- Regular security updates and monitoring

## 📊 Monitoring & Logging

### Health Monitoring

Set up monitoring for:

- `/api/auth/health` endpoint
- Authentication success/failure rates
- Token refresh frequency
- Database connection status

### Error Tracking

Monitor these error patterns:

- JWT configuration errors
- Database connection failures
- Cookie setting/reading issues
- Token validation failures

## 🚨 Troubleshooting Commands

### Check Environment Variables

```bash
# In your deployment platform's console
echo $JWT_SECRET
echo $MONGODB_URI
echo $NODE_ENV
```

### Test Database Connection

```bash
# Test MongoDB connection
mongosh "your-mongodb-uri"
```

### Verify JWT Tokens

```javascript
// In browser console (development only!)
console.log('Access Token:', document.cookie.match(/accessToken=([^;]+)/)?.[1]);
```

## 📞 Support

If you're still having issues:

1. Check the health endpoint first
2. Review server logs for specific errors
3. Verify all environment variables are set correctly
4. Test the authentication flow step by step

## 🔄 Updates & Maintenance

### Regular Tasks

- Monitor authentication success rates
- Review and rotate JWT secrets periodically
- Update dependencies regularly
- Monitor database performance
- Check for security updates

### Before Major Updates

- Test authentication flow in staging
- Backup current environment configuration
- Have rollback plan ready
- Monitor error rates post-deployment
