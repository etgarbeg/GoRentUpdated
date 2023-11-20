const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

async function UploadImage(req, res, next) {
    try {
        let { image } = req.body;
        console.log(image);
        if (!image || image == undefined) { console.log("here"); next(); };
        let imageStr = `data:image/jpg;base64,${image}`;
        cloudinary.uploader.upload_large(imageStr, { quality: "auto", fetch_format: "auto" }, (err, result) => {
            if (err) throw new Error(err);
            req.cloudinaryRes = result;
            next();
        })
    } catch (error) {
        res.status(500).json({ ...error });
    }
}

module.exports = UploadImage;