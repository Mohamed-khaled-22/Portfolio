import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(

    async () => {
        // compress hero image with high quality
        await imagemin(["public/Image/Hero/*.{jpg,png}"], {
            destination: "public/Image-optimized/Hero",
            plugins: [
                imageminMozjpeg({ quality: 85 }),
                imageminPngquant({ quality: [0.8, 0.9] })
            ]
        });

        // compress other images with medium quality
        await imagemin(["public/Image/Projects-image/*.{jpg,png}"], {
            destination: "public/Image-optimized/Projects-image",
            plugins: [
                imageminMozjpeg({ quality: 70 }),
                imageminPngquant({ quality: [0.6, 0.8] })
            ]
        });

    })();
