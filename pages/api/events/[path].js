const contents = require('../../../event.contents.json');

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const path = req.query.path;
        return res.status(200).json(contents.find(x => x.path === path));
    }
    return res.status(400).json({error: 'Bad request'});
}