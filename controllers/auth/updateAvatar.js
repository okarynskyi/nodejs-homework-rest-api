const fs = require("fs/promises")
const path = require("path")
const jimp = require("jimp");

const {User} = require("../../models/user")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res)=> {
    const {path: tempUpload, originalname} = req.file;
    const { _id } = req.user;
    
    await jimp.read(tempUpload)
        .then((avatar) => {
            avatar.resize(250, 250);
            avatar.write(tempUpload);
        })
        .catch((err) => {
            console.log(err.message);
        });
    
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, {avatarURL});

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar;