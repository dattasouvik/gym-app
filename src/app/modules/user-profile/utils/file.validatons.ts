import { FILE_MAX_SIZE, ALLOWED_FILE_TYPES }
  from "src/app/modules/user-profile/components/edit-profile-picture/profile-picture.config";


export function checkExtension(file_name: string): { [key: string]: boolean } | null {
  let valToLower = file_name.toLowerCase();
  let regex = new RegExp("(.*?)\.(jpg|png|jpeg|gif)$");
  let regexTest = regex.test(valToLower);
  return !regexTest ? { "invalidFile": true } : null;
}

export function checkFileSize(file_size, max_size = FILE_MAX_SIZE): { [key: string]: boolean } | null {
  return file_size > max_size ? { "invalidFileSize": true } : null;
}

export function checkFileTypes(file_type, allowed_types = ALLOWED_FILE_TYPES): { [key: string]: boolean } | null {
  return !allowed_types.includes(file_type) ? { "invalidFile": true } : null;
}

export function checkMimeType(mimeType): { [key: string]: boolean } | null {
  return mimeType.match(/image\/*/) === null ? { "invalidFile": true } : null;
}
