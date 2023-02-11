const withAuth = (req, res, next) => {
    if (req.session && !req.session.logged_in && req.originalUrl !== '/shop') {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;