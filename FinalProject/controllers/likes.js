const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const LIKES_SAVE_FILE = '../likesSaveFile.json'

const LIKE_FILE_KEYS = ['campus', 'dome', 'hesburgh', 'grotto', 'stadium', 'overview']

const getLikeFilePath = () => {
    return resolve(__dirname, LIKES_SAVE_FILE);
}

const getLikeFileFromLocal = () => {
    const rawData = readFileSync(getLikeFilePath());
    return JSON.parse(rawData);
}

const updateLikeFile = data => {
    writeFileSync(getLikeFilePath(), JSON.stringify(data));
}

const getLikesCtl = async (req, res) => {

    const { likeKey } = req.body;

    if (!likeKey || !LIKE_FILE_KEYS.includes(likeKey)) {
        sendResponse(false, null, {
            error: 'Not found',
            message: 'Could not find like key: \'' + likeKey + '\''
        }, res);
        return;
    }

    const keyValue = getLikeFileFromLocal()[likeKey];
    
    sendResponse(true, { 
        likes: keyValue
     }, null, res);
}

const incrementLikesCtl = async (req, res) => {

    const { likeKey } = req.body;

    if (!likeKey || !LIKE_FILE_KEYS.includes(likeKey)) {
        sendResponse(false, null, {
            error: 'Not found',
            message: 'Could not find like key: \'' + likeKey + '\''
        }, res);
        return;
    }

    const allLikesData = getLikeFileFromLocal();
    allLikesData[likeKey] += 1;
    updateLikeFile(allLikesData);
    
    sendResponse(true, { 
        likes: allLikesData[likeKey]
     }, null, res);
}

const sendResponse = (success, results, error, res) => {
    return res.json({
        data: results,
        error: error,
        success: success,
    });
}

module.exports.getLikesCtl = getLikesCtl
module.exports.incrementLikesCtl = incrementLikesCtl

module.exports.LIKE_FILE_KEYS = LIKE_FILE_KEYS