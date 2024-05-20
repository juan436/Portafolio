const { validationResult, check } = require('express-validator');

const validatorBack = [
    check('title')
        .exists()
        .isLength({ max: 50 })
        .isString()
        .not().isEmpty(),
    check('description')
        .exists()
        .isLength({ max: 500 })
        .isString()
        .not().isEmpty(),
    check('linkRepository')
        .exists()
        .isLength({ max: 2000 })
        .isString()
        .not().isEmpty(),
    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ error: 'Datos incorrectos' });
        }
        next();
    }
];
const validatorFullStack = [
    check('title')
        .exists()
        .isLength({ max: 50 })
        .isString()
        .not().isEmpty(),
    check('description')
        .exists()
        .isLength({ max: 400 })
        .isString()
        .not().isEmpty(),
    check('userTest')
        .exists()
        .isString()
        .not().isEmpty(),
    check('passTest')
        .exists()
        .isString()
        .not().isEmpty(),
    check('techSkills')
        .exists()
        .not().isEmpty(),
    check('linkRepository')
        .exists()
        .isLength({ max: 2000 })
        .isString()
        .not().isEmpty(),
    check('linkDeploy')
        .exists()
        .isLength({ max: 2000 })
        .isString()
        .not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Datos incorrectos' });
        }
        next();
    }
];


module.exports = { validatorBack,validatorFullStack };
