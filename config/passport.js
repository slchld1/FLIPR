const GoogleStrategy = require('passport-google-oauth20').Strategy
const Customer = require('../models/Customer')


module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const newCustomer = {
                googleID: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
                email: profile.emails[0].value,
            }
            try {
                let customer = await Customer.findOne({ googleID:  profile.id })

                if(customer) {

                    done(null, customer)
                }else {
                    customer = await Customer.create(newCustomer)
                    done(null, customer)
                }
                    } catch (err) {
                console.error(err)
                }
            }
        )
    )
    passport.serializeUser((customer, done) => {
        done(null, customer.id)
    })
    
      // used to deserialize the customer
    passport.deserializeUser((id, done) => {
        Customer.findById(id, (err, customer) => {
                done(err, customer);
            });
    })

}