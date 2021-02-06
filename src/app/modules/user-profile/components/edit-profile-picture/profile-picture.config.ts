const FILE_MAX_SIZE:number = 3145728;
const ALLOWED_FILE_TYPES:string[]=  ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
const PictureErrorMessage = {
  "required" : "Please select an image file.",
  "invalidFile" : "Only images are allowed ( JPG | PNG | JPEG | GIF ).",
  "invalidFileSize" : `Maximum size allowed is ${(FILE_MAX_SIZE / 1024)/1024} Mb.`,
}

enum MessageKey {
  required = 'required',
  invalidFile = 'invalidFile',
  invalidFileSize = 'invalidFileSize'
}
export { FILE_MAX_SIZE, ALLOWED_FILE_TYPES, PictureErrorMessage, MessageKey};
