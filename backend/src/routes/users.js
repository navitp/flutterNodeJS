const { Router } = require ('express');
const router = Router();

const User = require('../models/User');

const faker = require ('faker');

router.get('/api/users',  async (req, res) =>{
    const users = await User.find();
    res.json({users});
});

router.get('/api/users/create', (req, res) => {
    for(let i = 0; i < 5; i++) {
        User.create({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        });
    }
    res.json({message:'5 Users created'});
});

module.exports = router;