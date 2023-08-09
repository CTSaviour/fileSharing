
import File from "../models/file.js";


export const uploadImage = async (request, response) => {

    const fileObj = {
        path : request.file.path,
        name : request.file.originalname
    }
    
    try {
        const file = await File.create(fileObj);
        response.status(200).json({path : `http://localhost:8888/file/${file._id}`})
    } catch(error) {
        response.status(500).json({ error : error.message })
    }
}


// for downloading the image
export const downloadImage = async (request, response) => {
    
    try {
        const file = await File.findById(request.params.fileId);
        
        file.downloadContent++;
    
        await file.save();

        response.download(file.path, file.name);

    } catch (error) {
        console.error(error.message);
        return response.status(500).json({error : error.message});
    }
}