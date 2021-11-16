function checkAuthorizedUser(req, res, next) {

    const testMode = true;
    if (!testMode) {
        // validation and authorization middleware functions
        // res.status(500).send("Unauthorized access");
        return;
    }
    next();
    return;
}

module.exports.checkAuthorizedUser = checkAuthorizedUser;