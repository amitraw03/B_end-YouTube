import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; //file system to doing work of unlinking from our server to put in cloudinary


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null; 
        //lets upload file then on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath ,{
            resource_type:"auto"
        })
        //file has been uploaded success
        console.log('file uploaded successfully',response.url);
        fs.unlinkSync(localFilePath)
        return response;
    }
    catch(err){
        //if i am here i.e file is there but something maicious or wrong with that so we do unlink(remove temp file as upload op got failed)
        fs.unlinkSync(localFilePath)
        return null;
    }

}

const deleteFromCloudinary = async(cloudinaryFilePath)=>{
    try {
        if(!cloudinaryFilePath) return null;

        // lets delete the image by it's public id
        const publicId = cloudinaryFilePath.split('/').pop().split('.')[0];
        const response = await cloudinary.uploader.destroy(publicId, {resource_type:"auto"});
        
        console.log('File deleted successfully from Cloudinary:', response);
        return response;

    } catch (error) {
        console.log('Error while deleting from cloudinary', error);
        return null;
    }

}

export {uploadOnCloudinary, deleteFromCloudinary}