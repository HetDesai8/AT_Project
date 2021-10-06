
const MultipleFile = require('../models/multiplefile');

const multipleFileUpload = async (req, res, next) => {
    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: (element.path).replace(/\\/g, "/"),
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        const multipleFiles = new MultipleFile({
            city: req.body.city,
            address:req.body.address,
            pincode:req.body.pincode,
            contact:req.body.contact,
            dimension :req.body.dimension,
            price : req.body.price,
            room:req.body.room,
            URL:req.body.URL,
            files: filesArray 
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}


const getallMultipleFiles = async (req, res, next) => {
    try{
        const files = await MultipleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

getFiles = async (req, res) => {
    await  MultipleFile.findOne({ _id: req.params.id }, (err, files) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!files) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: files })
    }).catch(err => console.log(err))
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
    multipleFileUpload,
    getallMultipleFiles,
    getFiles
}