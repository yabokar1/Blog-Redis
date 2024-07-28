import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import keys from "../config/keys";
import { User as UserType } from "../types";
import UserModel from "../models/User";

console.log(keys.googleClientID);
// @ts-ignore
passport.serializeUser((user: UserType, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "auth/google/callback",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await UserModel.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        console.log("Here...");
        console.log(profile.id);
        console.log(profile.displayName);
        const user = await new UserModel({
          googleId: profile.id,
          displayName: profile.displayName,
        }).save();
        done(null, user);
      } catch (err) {
        console.log("Error during saving");
        done(err, undefined);
      }
    }
  )
);

export default passport;
