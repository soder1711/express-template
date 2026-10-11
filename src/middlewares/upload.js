import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  console.log(req.file.path);
  // TODO: use file path to create 160x160 png thumbnail with sharp
  try {
    const originalPath = req.file.path;
    const dir = path.dirname(originalPath);
    const baseName = path.basename(originalPath);

    const thumbName = `${baseName}_thumb.png`;
    const thumbPath = path.join(dir, thumbName);

    await sharp(originalPath)
      .resize(160, 160)
      .png()
      .toFile(thumbPath);

    req.thumbnailPath = thumbPath;
    next();
  }
  catch (err) {
    console.error('Thumbnail creation failed:', err);
    next();
  }
};

export {createThumbnail};
