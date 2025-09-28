import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloud from "./cloud.js";

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: "wave_media",
    resource_type: "auto", // handles jpg, png, mp4 etc.
  },
});

const upload = multer({ storage });

export default upload;
