class ImageUploader {
  async upload(file) {
    const data = new FormData;
    data.append("file", file);
    data.append("upload_preset", "ykm2465i");
    const result = await fetch('https://api.cloudinary.com/v1_1/dlllfist3/image/upload', {
      method: "POST",
      body: data
    });
    return await result.json();
  }
}

export default ImageUploader;