// lets import some stuff
import passport from 'passport';
// import LocalStrategy from 'passport-local';
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
// import User from '../models/user_model';

dotenv.config({ silent: true });

const googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/login/cb',
  passReqToCallback: true,
};

const googleCB = (request, accessToken, refreshToken, profile, done) => {
  // Send tokens profile info to server
};

const googleLogin = new GoogleStrategy(googleOptions, googleCB);

// Tell passport to use this strategy
passport.use(googleLogin);


// export const requireAuth = passport.authenticate('jwt', { session: false });
// export const requireSignin = passport.authenticate('local', { session: false });

export const requireSignIn = passport.authenticate('google', { scope: ['profile'] });
export const requireAuth = passport.authenticate('google', { scope: ['profile'] });
