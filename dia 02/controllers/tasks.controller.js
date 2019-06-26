const get = function (req, res) {
    const tasks = [
        {
            "title": "Aprender HTML",
            "description": "Estudar a tag body"
        },
        {
            "title": "Aprender CSS",
            "description": "Estudar seletores"
        }
    ];

    res.send(tasks);
};

const create = function (req, res) {
    
};

const update = function (req, res) {
    
};

const remove = function (req, res) {
    
};

module.exports = { get, create, update, remove };